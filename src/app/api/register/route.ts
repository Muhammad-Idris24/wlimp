import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { registrationSchema, type RegistrationInput } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many attempts. Please wait a few minutes and try again." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const parsed = registrationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message ?? "Please review the form and try again." }, { status: 400 });
  }

  const { website, ...registration } = parsed.data;
  if (website) {
    return NextResponse.json({ message: "Registration received." });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("conference_registrations").insert({
      full_name: registration.fullName,
      email: registration.email,
      phone: registration.phone,
      gender: registration.gender,
      organization: registration.organization,
      location: registration.location,
      role: registration.role,
      motivation: registration.motivation,
      attendance_type: registration.attendanceType,
      source: "website",
      user_agent: request.headers.get("user-agent"),
      ip_address: ip,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ message: "This email has already been registered for the conference." }, { status: 409 });
      }
      throw error;
    }

    await sendEmails(registration).catch((emailError) => {
      console.error("Registration email delivery failed", emailError);
    });

    return NextResponse.json({ message: "Registration completed." });
  } catch (error) {
    console.error("Registration failed", error);
    return NextResponse.json({ message: "We could not complete your registration right now. Please try again shortly." }, { status: 500 });
  }
}

async function sendEmails(registration: Omit<RegistrationInput, "website">) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !adminEmail) {
    return;
  }

  const resend = new Resend(apiKey);

  await Promise.all([
    resend.emails.send({
      from,
      to: registration.email,
      subject: "WLIMP Leadership Conference registration received",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; color:#17211d; line-height:1.7;">
          <h1 style="font-size:24px; margin:0 0 12px;">Registration received</h1>
          <p>Dear ${escapeHtml(registration.fullName)},</p>
          <p>Thank you for registering for the WeCare Leadership Conference.</p>
          <p><strong>Theme:</strong> ${siteConfig.theme}<br />
          <strong>Date:</strong> ${siteConfig.date}<br />
          <strong>Attendance type:</strong> ${registration.attendanceType}</p>
          <p>The WeCare team will share additional event details as planning progresses.</p>
          <p>WeCare Centre for Community Awareness and Empowerment Initiative</p>
        </div>
      `,
      replyTo: adminEmail,
    }),
    resend.emails.send({
      from,
      to: adminEmail,
      subject: `New WLIMP registration: ${registration.fullName}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; color:#17211d; line-height:1.7;">
          <h1 style="font-size:22px;">New conference registration</h1>
          <p><strong>Name:</strong> ${escapeHtml(registration.fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(registration.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(registration.phone)}</p>
          <p><strong>Type:</strong> ${registration.attendanceType}</p>
          <p><strong>Organisation:</strong> ${escapeHtml(registration.organization)}</p>
          <p><strong>Location:</strong> ${escapeHtml(registration.location)}</p>
          <p><strong>Role:</strong> ${escapeHtml(registration.role)}</p>
          <p><strong>Motivation:</strong><br />${escapeHtml(registration.motivation)}</p>
        </div>
      `,
      replyTo: registration.email,
    }),
  ]);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
