import { z } from "zod";

export const attendanceTypes = ["Participant", "Partner", "Media", "Volunteer"] as const;
export const genderOptions = ["Female", "Male", "Prefer not to say"] as const;

export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(180),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30),
  gender: z.enum(genderOptions, { error: "Please select a gender option." }),
  organization: z.string().trim().min(2, "Please enter your institution or organisation.").max(160),
  location: z.string().trim().min(2, "Please enter your state or country.").max(120),
  role: z.string().trim().min(2, "Please enter your occupation or role.").max(120),
  motivation: z.string().trim().min(40, "Please share a little more about your motivation.").max(1200),
  attendanceType: z.enum(attendanceTypes, { error: "Please select an attendance type." }),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;
