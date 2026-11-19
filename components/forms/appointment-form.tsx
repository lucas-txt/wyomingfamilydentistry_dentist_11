"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, type FieldPath } from "react-hook-form";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  Send,
} from "lucide-react";

import { FormField, fieldAria } from "@/components/forms/form-field";
import { FormSuccess } from "@/components/forms/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { appointmentSchema, type AppointmentValues } from "@/lib/schemas";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "About you",
    description: "The basics we need to open your request.",
  },
  {
    title: "Visit details",
    description: "How to reach you and when you prefer to visit.",
  },
  {
    title: "Confirm",
    description: "Check your details and answer the security question.",
  },
] as const;

const stepFields: FieldPath<AppointmentValues>[][] = [
  ["firstName", "lastName", "patientType"],
  ["phone", "email", "preferredTime", "reason"],
  ["security"],
];

const preferredTimes = ["Morning", "Midday", "Afternoon"] as const;

export function AppointmentForm() {
  const [step, setStep] = React.useState(0);
  const [preparedHref, setPreparedHref] = React.useState<string | null>(null);
  const [preparedName, setPreparedName] = React.useState("");
  const [formError, setFormError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    control,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    // Errors appear when Continue/submit is pressed. Validating on blur would
    // re-render the wizard while the pointer is between down and up, which can
    // swallow the first click and leave the user on the same step.
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      patientType: "New Patient",
      phone: "",
      email: "",
      preferredTime: [],
      reason: "",
      security: "",
    },
  });

  const values = step === 2 ? getValues() : null;

  async function goToNextStep() {
    setFormError(null);
    const valid = await trigger(stepFields[step], { shouldFocus: true });
    if (valid) {
      setStep((current) => Math.min(current + 1, steps.length - 1));
    }
  }

  function onSubmit(data: AppointmentValues) {
    const subject = `Appointment request: ${data.firstName} ${data.lastName}`;
    const body = [
      "Appointment request from the Wyoming Family Dentistry website",
      "",
      `Name: ${data.firstName} ${data.lastName}`,
      `Patient type: ${data.patientType}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Preferred time: ${
        data.preferredTime?.length ? data.preferredTime.join(", ") : "No preference"
      }`,
      "",
      "Reason for appointment:",
      data.reason?.trim() ? data.reason : "Not provided",
    ].join("\n");

    setPreparedName(data.firstName);
    setPreparedHref(
      `mailto:${business.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
    );
    setFormError(null);
  }

  function onInvalid() {
    setFormError(
      "Please check the highlighted fields before preparing your request.",
    );
  }

  if (preparedHref) {
    return (
      <FormSuccess
        title={`Thank you, ${preparedName || "friend"}.`}
        message={`Your appointment request is ready to send to Wyoming Family Dentistry. Use the email button below to send it from your own email app, or call the office at ${business.phone} and we will help you find a time. This form does not guarantee an appointment; our team will contact you to confirm.`}
        mailto={preparedHref}
        mailtoLabel="Send request by email"
      />
    );
  }

  return (
    <div className="rounded-4xl border border-ink/10 bg-paper p-6 shadow-soft sm:p-9">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-teal/10 text-teal">
          <CalendarCheck aria-hidden="true" className="size-5" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
            Appointment request
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Step {step + 1} of {steps.length}
          </p>
        </div>
      </div>

      <ol className="mt-7 grid grid-cols-3 gap-2" aria-label="Form progress">
        {steps.map((item, index) => {
          const complete = index < step;
          const current = index === step;

          return (
            <li
              key={item.title}
              aria-current={current ? "step" : undefined}
              className="min-w-0"
            >
              <span
                className={cn(
                  "flex h-1.5 w-full rounded-full transition-colors",
                  complete || current ? "bg-teal" : "bg-ink/10",
                )}
              />
              <span
                className={cn(
                  "mt-2 hidden text-[11px] font-semibold leading-4 sm:block",
                  current ? "text-ink" : "text-ink-soft",
                )}
              >
                {item.title}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-7 border-t border-ink/10 pt-7">
        <h2 className="text-2xl leading-tight text-ink">{steps[step].title}</h2>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          {steps[step].description}
        </p>
      </div>

      <form
        className="mt-6"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
      >
        {step === 0 ? (
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                label="First name"
                htmlFor="appointment-first-name"
                error={errors.firstName?.message}
              >
                <Input
                  id="appointment-first-name"
                  autoComplete="given-name"
                  placeholder="First name"
                  {...fieldAria(
                    "appointment-first-name",
                    errors.firstName?.message,
                  )}
                  {...register("firstName")}
                />
              </FormField>
              <FormField
                label="Last name"
                htmlFor="appointment-last-name"
                error={errors.lastName?.message}
              >
                <Input
                  id="appointment-last-name"
                  autoComplete="family-name"
                  placeholder="Last name"
                  {...fieldAria(
                    "appointment-last-name",
                    errors.lastName?.message,
                  )}
                  {...register("lastName")}
                />
              </FormField>
            </div>

            <fieldset className="space-y-2">
              <legend className="text-sm font-semibold leading-5 text-ink">
                Are you a new or returning patient?
              </legend>
              <Controller
                control={control}
                name="patientType"
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="grid gap-2 sm:grid-cols-2"
                    aria-describedby={
                      errors.patientType
                        ? "appointment-patient-type-error"
                        : undefined
                    }
                  >
                    {(["New Patient", "Returning Patient"] as const).map(
                      (option) => {
                        const id =
                          option === "New Patient"
                            ? "patient-type-new"
                            : "patient-type-returning";

                        return (
                          <div
                            key={option}
                            className="flex items-center gap-3 rounded-2xl border border-ink/15 bg-cream/50 px-4 py-3"
                          >
                            <RadioGroupItem
                              value={option}
                              id={id}
                              aria-describedby={
                                errors.patientType
                                  ? "appointment-patient-type-error"
                                  : undefined
                              }
                            />
                            <Label htmlFor={id}>{option}</Label>
                          </div>
                        );
                      },
                    )}
                  </RadioGroup>
                )}
              />
              {errors.patientType ? (
                <p
                  id="appointment-patient-type-error"
                  role="alert"
                  className="text-xs font-semibold text-danger"
                >
                  {errors.patientType.message}
                </p>
              ) : null}
            </fieldset>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                label="Phone"
                htmlFor="appointment-phone"
                error={errors.phone?.message}
              >
                <Input
                  id="appointment-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(999) 999-9999"
                  {...fieldAria("appointment-phone", errors.phone?.message)}
                  {...register("phone")}
                />
              </FormField>
              <FormField
                label="Email"
                htmlFor="appointment-email"
                error={errors.email?.message}
              >
                <Input
                  id="appointment-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  {...fieldAria("appointment-email", errors.email?.message)}
                  {...register("email")}
                />
              </FormField>
            </div>

            <fieldset className="space-y-3">
              <legend className="text-sm font-semibold leading-5 text-ink">
                Preferred time{" "}
                <span className="font-normal text-ink-soft">(optional)</span>
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {preferredTimes.map((time) => (
                  <label key={time} className="cursor-pointer">
                    <input
                      type="checkbox"
                      value={time}
                      className="peer sr-only"
                      {...register("preferredTime")}
                    />
                    <span className="flex min-h-11 items-center justify-center gap-1.5 rounded-2xl border border-ink/15 bg-cream/50 px-2 py-2 text-center text-xs font-semibold text-ink transition-colors peer-checked:border-teal peer-checked:bg-teal peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-teal peer-focus-visible:ring-offset-2">
                      <Check
                        aria-hidden="true"
                        className="size-3.5 opacity-0 transition-opacity peer-checked:opacity-100"
                      />
                      {time}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <FormField
              label="Reason for appointment"
              htmlFor="appointment-reason"
              error={errors.reason?.message}
              optional
            >
              <Textarea
                id="appointment-reason"
                placeholder="Tell us what you need and anything we should know."
                {...fieldAria("appointment-reason", errors.reason?.message)}
                {...register("reason")}
              />
            </FormField>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-5">
            <dl className="grid gap-3 rounded-2xl border border-ink/10 bg-cream/50 p-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  Name
                </dt>
                <dd className="mt-1 font-semibold text-ink">
                  {values?.firstName} {values?.lastName}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  Patient type
                </dt>
                <dd className="mt-1 font-semibold text-ink">
                  {values?.patientType}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  Phone
                </dt>
                <dd className="mt-1 font-semibold text-ink">{values?.phone}</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  Email
                </dt>
                <dd className="mt-1 break-all font-semibold text-ink">
                  {values?.email}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  Preferred time
                </dt>
                <dd className="mt-1 font-semibold text-ink">
                  {values?.preferredTime?.length
                    ? values.preferredTime.join(", ")
                    : "No preference"}
                </dd>
              </div>
            </dl>

            <FormField
              label="Security question: 2 + 2 = ?"
              htmlFor="appointment-security"
              error={errors.security?.message}
              hint="Enter the answer as a number."
            >
              <Input
                id="appointment-security"
                inputMode="numeric"
                autoComplete="off"
                placeholder="Your answer"
                className="max-w-40"
                {...fieldAria(
                  "appointment-security",
                  errors.security?.message,
                  "appointment-security-hint",
                )}
                {...register("security")}
              />
            </FormField>

            <p className="text-xs leading-5 text-ink-soft">
              This form does not guarantee an appointment. Our team will contact
              you to confirm.
            </p>
          </div>
        ) : null}

        {formError ? (
          <p
            role="alert"
            className="mt-5 rounded-2xl border border-danger/20 bg-danger/5 px-4 py-3 text-sm font-semibold text-danger"
          >
            {formError}
          </p>
        ) : null}

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          {step > 0 ? (
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormError(null);
                setStep((current) => Math.max(current - 1, 0));
              }}
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back
            </Button>
          ) : (
            <span className="hidden sm:block" />
          )}

          {step < steps.length - 1 ? (
            <Button type="button" onClick={goToNextStep}>
              Continue
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              <Send aria-hidden="true" className="size-4" />
              Prepare request
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
