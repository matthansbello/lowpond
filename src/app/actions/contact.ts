"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { success: false, error: "Email service not configured. Please add RESEND_API_KEY to your .env.local file." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "LowPond <lowpond@notifications.mustardway.com>",
      to: [process.env.CONTACT_RECIPIENT_EMAIL || "lowpondng@gmail.com"],
      subject: `New Project Inquiry: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1B2A4A; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0A1628; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Project Inquiry</h1>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <p style="margin-top: 0;">You have received a new message from the LowPond website contact form.</p>
            
            <div style="background-color: #F8FAFC; padding: 24px; border-radius: 6px; margin: 24px 0;">
              <h2 style="font-size: 18px; margin-top: 0; border-bottom: 2px solid #3B82F6; padding-bottom: 8px; display: inline-block;">Sender Details</h2>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>

            <h2 style="font-size: 18px; margin-bottom: 12px;">Project Details</h2>
            <div style="white-space: pre-wrap; background-color: #F1F5F9; padding: 20px; border-radius: 6px; border-left: 4px solid #3B82F6;">
              ${message}
            </div>
          </div>
          <div style="background-color: #F8FAFC; padding: 16px; text-align: center; font-size: 12px; color: #94A3B8;">
            Sent from LowPond Engineering Contact Form
          </div>
        </div>
      `,
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
