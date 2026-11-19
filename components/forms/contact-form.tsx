"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MessageSquare, Send } from "lucide-react";

import { FormField, fieldAria } from "@/components/forms/form-field";
import { FormSuccess } from "@/components/forms/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/schemas";
import { business } from "@/lib/site";

export function ContactForm() {
  const [preparedHref, setPreparedHref] = React.useState<string | null>(null);
  const [formError, setFormError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      security: "",
    },
  });

  const [preparedName, setPreparedName] = React.useState("");

  function onSubmit(data: ContactValues) {
    const subject = `Website message from ${data.firstName} ${data.lastName}`;
    const body = [
      "Message from the Wyoming Family Dentistry website",
      "",
      `Name: ${data.firstName} ${data.lastName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      "",
      "Message:",
      data.message?.trim() ? data.message : "Not provided",
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
    setFormError("Please check the highlighted fields before preparing your message.");
  }

  if (preparedHref) {
    return (
      <FormSuccess
        title={`Thank you, ${preparedName || "friend"}.`}
        message={`Your message is ready to send to Wyoming Family Dentistry. Use the email button below to send it from your own email app, or call the office at ${business.phone}.`}
        mailto={preparedHref}
        mailtoLabel="Send message by email"
      />
    );
  }

  return (
    <div className="rounded-4xl border border-ink/10 bg-paper p-6 shadow-soft sm:p-9">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-teal/10 text-teal">
          <MessageSquare aria-hidden="true" className="size-5" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal">
            Contact form
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Share a question, comment, or concern.
          </p>
        </div>
      </div>

      <form
        className="mt-7 space-y-5"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="First name"
            htmlFor="contact-first-name"
            error={errors.firstName?.message}
          >
            <Input
              id="contact-first-name"
              autoComplete="given-name"
              placeholder="First name"
              {...fieldAria("contact-first-name", errors.firstName?.message)}
              {...register("firstName")}
            />
          </FormField>
          <FormField
            label="Last name"
            htmlFor="contact-last-name"
            error={errors.lastName?.message}
          >
            <Input
              id="contact-last-name"
              autoComplete="family-name"
              placeholder="Last name"
              {...fieldAria("contact-last-name", errors.lastName?.message)}
              {...register("lastName")}
            />
          </FormField>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="Phone"
            htmlFor="contact-phone"
            error={errors.phone?.message}
          >
            <Input
              id="contact-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(999) 999-9999"
              {...fieldAria("contact-phone", errors.phone?.message)}
              {...register("phone")}
            />
          </FormField>
          <FormField
            label="Email"
            htmlFor="contact-email"
            error={errors.email?.message}
          >
            <Input
              id="contact-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...fieldAria("contact-email", errors.email?.message)}
              {...register("email")}
            />
          </FormField>
        </div>

        <FormField
          label="Message"
          htmlFor="contact-message"
          error={errors.message?.message}
          optional
        >
          <Textarea
            id="contact-message"
            placeholder="How can we help?"
            {...fieldAria("contact-message", errors.message?.message)}
            {...register("message")}
          />
        </FormField>

        <FormField
          label="Security question: 2 + 2 = ?"
          htmlFor="contact-security"
          error={errors.security?.message}
          hint="Enter the answer as a number."
        >
          <Input
            id="contact-security"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Your answer"
            className="max-w-40"
            {...fieldAria(
              "contact-security",
              errors.security?.message,
              "contact-security-hint",
            )}
            {...register("security")}
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
          Prepare message
        </Button>
      </form>
    </div>
  );
}
