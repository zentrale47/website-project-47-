"use client"

import { useFormState, useFormStatus } from "react-dom"
import { sendInquiry, type InquiryState } from "@/app/actions/send-inquiry"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Wird gesendet...
        </>
      ) : (
        "Angebot anfordern"
      )}
    </Button>
  )
}

export function AngebotForm() {
  const [state, formAction] = useFormState<InquiryState, FormData>(sendInquiry, null)

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">Anfrage gesendet!</h2>
        <p className="text-muted-foreground max-w-sm">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="subject" value="Neue Angebotsanfrage" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
            Vorname
          </label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="Max"
            className="w-full bg-background border-border focus-visible:bg-background"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
            Nachname
          </label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Mustermann"
            className="w-full bg-background border-border focus-visible:bg-background"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          E-Mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="max@beispiel.de"
          className="w-full bg-background border-border focus-visible:bg-background"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Telefon
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="0172 1234567"
          className="w-full bg-background border-border focus-visible:bg-background"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
          Art der Reinigung
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-2 bg-background border border-border text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
        >
          <option>Gebäudereinigung</option>
          <option>Fensterreinigung</option>
          <option>Büroreinigung</option>
          <option>Grundreinigung</option>
          <option>Privat Haushalt</option>
          <option>Gastronomie</option>
          <option>Schulen & Bildung</option>
          <option>Fitnessstudios</option>
          <option>Praxen & Medizin</option>
        </select>
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-foreground mb-2">
          Fläche (m²)
        </label>
        <Input
          id="area"
          name="area"
          type="number"
          placeholder="100"
          className="w-full bg-background border-border focus-visible:bg-background"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Zusätzliche Informationen
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Beschreiben Sie Ihre Anforderungen..."
          className="w-full min-h-32 bg-background border-border focus-visible:bg-background"
        />
      </div>

      {state && !state.success && (
        <div className="flex items-start gap-3 rounded-lg bg-destructive/15 border border-destructive/30 p-4">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">{state.message}</p>
        </div>
      )}

      <SubmitButton />

      <p className="text-xs text-muted-foreground text-center">
        Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu
      </p>
    </form>
  )
}
