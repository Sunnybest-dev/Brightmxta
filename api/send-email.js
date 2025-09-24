// /api/send-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    await resend.emails.send({
      from: "Brightmxta <onboarding@resend.dev>", // verified Resend sender
      to: process.env.EMAIL_TO, // the email that receives the messages
      subject: `New Message from ${name}`,
      text: `From: ${email}\n\n${message}`,
      replyTo: email,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
