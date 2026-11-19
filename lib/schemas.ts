import { z } from "zod";

const nameField = (label: string) =>
  z
    .string()
    .trim()
    .min(1, { message: `${label} is required.` })
    .max(80, { message: `${label} is too long.` });

const emailField = z
  .string()
  .trim()
  .min(1, { message: "Email is required." })
  .email({ message: "Enter a valid email address." });

const phoneField = z
  .string()
  .trim()
  .min(7, { message: "Enter a valid phone number." })
  .regex(/^[0-9()+\-.\s]{7,}$/, {
    message: "Enter a valid phone number.",
  });

const securityField: z.ZodString = z
  .string()
  .trim()
  .refine((value): boolean => value === "4", {
    message: "Please solve the security question: 2 + 2 = ?",
  });

export const appointmentSchema = z.object({
  firstName: nameField("First name"),
  lastName: nameField("Last name"),
  patientType: z.enum(["New Patient", "Returning Patient"], {
    message: "Select whether you are a new or returning patient.",
  }),
  phone: phoneField,
  email: emailField,
  preferredTime: z.array(z.enum(["Morning", "Midday", "Afternoon"])).optional(),
  reason: z.string().trim().max(1000).optional(),
  security: securityField,
});

export type AppointmentValues = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  firstName: nameField("First name"),
  lastName: nameField("Last name"),
  phone: phoneField,
  email: emailField,
  message: z.string().trim().max(2000).optional(),
  security: securityField,
});

export type ContactValues = z.infer<typeof contactSchema>;

export const ratingSchema = z.object({
  rating: z
    .number({ message: "Choose a rating." })
    .int()
    .min(1, { message: "Choose a rating from 1 to 10." })
    .max(10, { message: "Choose a rating from 1 to 10." }),
  improvement: z.string().trim().max(2000).optional(),
  firstName: z.string().trim().max(80).optional(),
  lastName: z.string().trim().max(80).optional(),
  email: emailField,
});

export type RatingValues = z.infer<typeof ratingSchema>;
