"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { attendanceTypes, genderOptions, registrationSchema, type RegistrationInput } from "@/lib/validation";

type Status = "idle" | "success" | "error";

export function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationInput>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      attendanceType: "Participant",
      gender: undefined,
      website: "",
    },
  });

  async function onSubmit(values: RegistrationInput) {
    setStatus("idle");
    setMessage("");

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(payload.message ?? "Registration could not be completed. Please try again.");
      return;
    }

    setStatus("success");
    setMessage("Your registration has been received. A confirmation email will follow shortly.");
    reset({ attendanceType: "Participant", website: "" });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form" noValidate>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="form-grid">
        <Field label="Full Name" error={errors.fullName?.message}>
          <Input id="fullName" autoComplete="name" aria-invalid={!!errors.fullName} {...register("fullName")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field label="Gender" error={errors.gender?.message}>
          <Select value={watch("gender")} onValueChange={(value) => setValue("gender", value as RegistrationInput["gender"], { shouldValidate: true })}>
            <SelectTrigger id="gender" aria-invalid={!!errors.gender}>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {genderOptions.map((option) => (
                <SelectItem value={option} key={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Institution / Organization" error={errors.organization?.message}>
          <Input id="organization" autoComplete="organization" aria-invalid={!!errors.organization} {...register("organization")} />
        </Field>
        <Field label="State / Country" error={errors.location?.message}>
          <Input id="location" autoComplete="address-level1" aria-invalid={!!errors.location} {...register("location")} />
        </Field>
        <Field label="Occupation / Role" error={errors.role?.message}>
          <Input id="role" aria-invalid={!!errors.role} {...register("role")} />
        </Field>
        <Field label="Attendance Type" error={errors.attendanceType?.message}>
          <Select value={watch("attendanceType")} onValueChange={(value) => setValue("attendanceType", value as RegistrationInput["attendanceType"], { shouldValidate: true })}>
            <SelectTrigger id="attendanceType" aria-invalid={!!errors.attendanceType}>
              <SelectValue placeholder="Select attendance type" />
            </SelectTrigger>
            <SelectContent>
              {attendanceTypes.map((option) => (
                <SelectItem value={option} key={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Why do you want to attend?" error={errors.motivation?.message}>
        <Textarea id="motivation" aria-invalid={!!errors.motivation} {...register("motivation")} />
      </Field>

      <div className="form-footer">
        <p>
          By registering, you agree to receive conference updates from WeCare Centre for Community Awareness and Empowerment Initiative.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 data-icon="inline-start" className="animate-spin" aria-hidden="true" /> : <ArrowRight data-icon="inline-start" aria-hidden="true" />}
          {isSubmitting ? "Submitting" : "Submit Registration"}
        </Button>
      </div>

      {status !== "idle" ? (
        <div className={status === "success" ? "form-status success" : "form-status error"} role={status === "success" ? "status" : "alert"}>
          {status === "success" ? <CheckCircle2 aria-hidden="true" /> : null}
          <span>{message}</span>
        </div>
      ) : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  const id = typeof children === "object" && children && "props" in children ? (children.props as { id?: string }).id : undefined;

  return (
    <div className="field" data-invalid={!!error}>
      {id ? <Label htmlFor={id}>{label}</Label> : <Label>{label}</Label>}
      {children}
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}
