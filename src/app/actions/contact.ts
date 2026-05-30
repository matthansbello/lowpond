"use server";

import { Resend } from "resend";
import { escapeHtml } from "@/lib/escape-html";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

const VALID_SUBJECTS = [
  "Request a Consultation",
  "Structural Engineering Services",
  "Mining & Mineral Activities",
  "Project Management Inquiry",
  "Other",
] as const;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function trimField(value: FormDataEntryValue | null, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function sendContactEmail(formData: FormData) {
  const honeypot = trimField(formData.get("website"), 100);
  if (honeypot) {
    return { success: true };
  }

  const firstName = trimField(formData.get("firstName"), MAX_FIELD_LENGTH);
  const lastName = trimField(formData.get("lastName"), MAX_FIELD_LENGTH);
  const email = trimField(formData.get("email"), MAX_FIELD_LENGTH);
  const subject = trimField(formData.get("subject"), MAX_FIELD_LENGTH);
  const message = trimField(formData.get("message"), MAX_MESSAGE_LENGTH);

  if (!firstName || !lastName || !email || !subject || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!VALID_SUBJECTS.includes(subject as (typeof VALID_SUBJECTS)[number])) {
    return { success: false, error: "Please select a valid inquiry type." };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return {
      success: false,
      error: "Email service not configured. Please contact us directly by phone or email.",
    };
  }

  try {
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!recipientEmail) {
      console.error("Missing CONTACT_RECIPIENT_EMAIL environment variable");
      return { success: false, error: "Configuration error: Missing recipient email address." };
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: "Lowpond <lowpond@notifications.mustardway.com>",
      to: [recipientEmail],
      subject: `New Project Inquiry: ${subject}`,
      replyTo: email,
      html: [
        '<div style="font-family: sans-serif; line-height: 1.6; color: #1B2A4A; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">',
        '  <div style="background-color: #0A1628; padding: 24px; text-align: center;">',
        '    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Project Inquiry</h1>',
        "  </div>",
        '  <div style="padding: 32px; background-color: #ffffff;">',
        '    <p style="margin-top: 0;">You have received a new message from the Lowpond website contact form.</p>',
        '    <div style="background-color: #F8FAFC; padding: 24px; border-radius: 6px; margin: 24px 0;">',
        '      <h2 style="font-size: 18px; margin-top: 0; border-bottom: 2px solid #3B82F6; padding-bottom: 8px; display: inline-block;">Sender Details</h2>',
        `      <p style="margin: 8px 0;"><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>`,
        `      <p style="margin: 8px 0;"><strong>Email:</strong> ${safeEmail}</p>`,
        `      <p style="margin: 8px 0;"><strong>Subject:</strong> ${safeSubject}</p>`,
        "    </div>",
        '    <h2 style="font-size: 18px; margin-bottom: 12px;">Project Details</h2>',
        '    <div style="white-space: pre-wrap; background-color: #F1F5F9; padding: 20px; border-radius: 6px; border-left: 4px solid #3B82F6;">',
        `      ${safeMessage}`,
        "    </div>",
        "  </div>",
        '  <div style="background-color: #F8FAFC; padding: 16px; text-align: center; font-size: 12px; color: #94A3B8;">',
        "    Sent from Lowpond Engineering Contact Form",
        "  </div>",
        "</div>",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend API error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}
