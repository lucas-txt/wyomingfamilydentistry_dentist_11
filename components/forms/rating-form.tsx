"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Send, Star } from "lucide-react";

import { FormField, fieldAria } from "@/components/forms/form-field";
import { FormSuccess } from "@/components/forms/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ratingSchema, type RatingValues } from "@/lib/schemas";
import { business } from "@/lib/site";

export function RatingForm() {
  const [preparedHref, setPreparedHref] = React.useState<string | null>(null);
  const [formError, setFormError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RatingValues>({
    resolver: zodResolver(ratingSchema),
    mode: "onTouched",
    defaultValues: {
      rating: 0,
      improvement: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const [preparedName, setPreparedName] = React.useState("");

  function onSubmit(data: RatingValues) {
    const subject = `Patient satisfaction survey: ${data.rating}/10`;
    const body = [
      "Patient satisfaction survey from the Wyoming Family Dentistry website",
      "",
      `Rating: ${data.rating} out of 10`,
      `Name: ${[data.firstName, data.lastName].filter(Boolean).join(" ") || "Not provided"}`,
      `Email: ${data.email}`,
      "",
      "How can we improve?",
      data.improvement?.trim() ? data.improvement : "Not provided",
    ].join("\n");

    setPreparedName(data.firstName ?? "");
    setPreparedHref(
      `mailto:${business.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
    );
    setFormError(null);
  }

  function onInvalid() {
    setFormError("Please choose a rating and check the highlighted fields.");
  }

  if (preparedHref) {
    return (
      <FormSuccess
        title={`Thank you, ${preparedName || "friend"}.`}
        message="Your feedback is ready to send to Wyoming Family Dentistry. Use the email button below to send it from your own email app. We appreciate you taking the time to tell us how we did."
        mailto={preparedHref}
        mailtoLabel="Send feedback by email"
      />
    );
  }

  return (
    <div className="rounded-4xl border border-ink/10 bg-paper p-6 shadow-soft sm:p-9">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-lime/25 text-teal-deep">
          <Star aria-hidden="true" className="size-5" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
            Patient satisfaction survey
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Your feedback helps our team keep improving.
          </p>
        </div>
      </div>

      <form
        className="mt-7 space-y-6"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
      >
        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold leading-5 text-ink">
            How would you rate your experience?
          </legend>
          <p className="text-xs leading-5 text-ink-soft">
            Choose a number from 1 to 10, where 1 is the worst and 10 is the
            best.
          </p>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <RadioGroup
                value={field.value > 0 ? String(field.value) : undefined}
                onValueChange={(value) => field.onChange(Number(value))}
                className="grid grid-cols-5 gap-2 sm:grid-cols-10"
                aria-describedby={
                  errors.rating ? "rating-error" : undefined
                }
              >
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (value) => (
                    <RadioGroupItem
                      key={value}
                      value={String(value)}
                      aria-label={`${value} out of 10`}
                      className="size-11 w-full rounded-2xl"
                    >
                      {value}
                    </RadioGroupItem>
                  ),
                )}
              </RadioGroup>
            )}
          />
          {errors.rating ? (
            <p
              id="rating-error"
              role="alert"
              className="text-xs font-semibold text-danger"
            >
              {errors.rating.message}
            </p>
          ) : null}
        </fieldset>

        <FormField
          label="How can we improve?"
          htmlFor="rating-improvement"
          error={errors.improvement?.message}
          optional
        >
          <Textarea
            id="rating-improvement"
            placeholder="Tell us what stood out or what we could do better."
            {...fieldAria("rating-improvement", errors.improvement?.message)}
            {...register("improvement")}
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="First name"
            htmlFor="rating-first-name"
            error={errors.firstName?.message}
            optional
          >
            <Input
              id="rating-first-name"
              autoComplete="given-name"
              placeholder="First name"
              {...fieldAria("rating-first-name", errors.firstName?.message)}
              {...register("firstName")}
            />
          </FormField>
          <FormField
            label="Last name"
            htmlFor="rating-last-name"
            error={errors.lastName?.message}
            optional
          >
            <Input
              id="rating-last-name"
              autoComplete="family-name"
              placeholder="Last name"
              {...fieldAria("rating-last-name", errors.lastName?.message)}
              {...register("lastName")}
            />
          </FormField>
        </div>

        <FormField
          label="Email"
          htmlFor="rating-email"
          error={errors.email?.message}
        >
          <Input
            id="rating-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...fieldAria("rating-email", errors.email?.message)}
            {...register("email")}
          />
        </FormField>

        {formError ? (
          <p
            role="alert"
            className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-3 text-sm font-semibold text-danger"
          >
            {formError}
          </p>
        ) : null}

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <Send aria-hidden="true" className="size-4" />
          Prepare feedback
        </Button>
      </form>
    </div>
  );
}
