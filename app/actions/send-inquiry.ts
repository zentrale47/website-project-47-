"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Wohin die Anfragen geschickt werden.
// WICHTIG: Solange die Domain cleanvis.de NICHT bei resend.com/domains verifiziert
// ist, erlaubt Resend nur den Versand an die eigene Konto-Adresse. Setze daher
// INQUIRY_TO_EMAIL auf die im Resend-Konto registrierte E-Mail (z.B. die Gmail-Adresse).
// Nach der Domain-Verifizierung kann INQUIRY_TO_EMAIL auf info@cleanvis.de gesetzt werden.
const TO_EMAIL = process.env.INQUIRY_TO_EMAIL || "devislucaci08@gmail.com"

// Absender: Solange cleanvis.de nicht in Resend verifiziert ist, MUSS
// onboarding@resend.dev verwendet werden. Nach Domain-Verifizierung auf
// z.B. "CleanVis <anfrage@cleanvis.de>" umstellen (via INQUIRY_FROM_EMAIL).
const FROM_EMAIL = process.env.INQUIRY_FROM_EMAIL || "CleanVis Webformular <onboarding@resend.dev>"

export type InquiryState = {
  success: boolean
  message: string
} | null

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function sendInquiry(_prevState: InquiryState, formData: FormData): Promise<InquiryState> {
  // Name kann entweder als "name" oder als "firstName"/"lastName" kommen
  const firstName = String(formData.get("firstName") ?? "").trim()
  const lastName = String(formData.get("lastName") ?? "").trim()
  const name = (String(formData.get("name") ?? "").trim() || `${firstName} ${lastName}`).trim()
  const email = String(formData.get("email") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const service = String(formData.get("service") ?? "").trim()
  const area = String(formData.get("area") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const subject = String(formData.get("subject") ?? "Neue Anfrage über die Website").trim()

  // Basis-Validierung
  if (!name || !email || !message) {
    return { success: false, message: "Bitte füllen Sie Name, E-Mail und Nachricht aus." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: "Bitte geben Sie eine gültige E-Mail-Adresse an." }
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: "Der E-Mail-Dienst ist noch nicht konfiguriert. Bitte kontaktieren Sie uns telefonisch unter 0172 6316205.",
    }
  }

  const rows = [
    ["Name", name],
    ["E-Mail", email],
    ["Telefon", phone || "—"],
    ["Leistung", service || "—"],
    ["Fläche", area ? `${area} m²` : "—"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#212529;">${escapeHtml(label)}</td><td style="padding:6px 12px;color:#495057;">${escapeHtml(value)}</td></tr>`,
    )
    .join("")

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#368A59;">Neue Anfrage über cleanvis.de</h2>
      <table style="border-collapse:collapse;width:100%;background:#f8f9fa;border-radius:8px;">${rows}</table>
      <h3 style="color:#212529;margin-top:24px;">Nachricht</h3>
      <p style="color:#495057;white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `${subject} – ${name}`,
      html,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return {
        success: false,
        message: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      }
    }

    return { success: true, message: "Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns innerhalb von 24 Stunden." }
  } catch (err) {
    console.log("[v0] Send inquiry exception:", err)
    return {
      success: false,
      message: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
    }
  }
}
