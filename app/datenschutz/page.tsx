import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz | CleanVis",
  description: "Datenschutzerklärung der CleanVis Gebäudereinigung in München.",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Verantwortlicher</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p>Devis Lucaci · CleanVis Gebäudereinigung</p>
                <p>Sarasatestraße 26, 81247 München</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:info@cleanvis.de" className="text-primary hover:underline">
                    info@cleanvis.de
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Erhebung und Verarbeitung von Daten</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Anfrage (z. B. über das
                Kontakt- oder Angebotsformular) freiwillig mitteilen. Diese Daten werden ausschließlich zur Bearbeitung
                Ihrer Anfrage und zur Kontaktaufnahme verwendet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
                Ihrer gespeicherten personenbezogenen Daten. Wenden Sie sich hierfür bitte an die oben genannte
                E-Mail-Adresse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Speicherdauer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ihre Daten werden gelöscht, sobald sie für die genannten Zwecke nicht mehr erforderlich sind und keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
