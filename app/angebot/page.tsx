import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { FileText, CheckCircle2 } from "lucide-react"
import { AngebotForm } from "@/components/angebot-form"

export default function AngebotPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Angebot</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Kostenloses <span className="text-primary">Angebot</span> anfordern
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Erhalten Sie ein unverbindliches und transparentes Angebot für Ihre Reinigungsdienstleistung
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Ihre Anfrage</h2>
                <AngebotForm />
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Ihre Vorteile</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Kostenlos & unverbindlich</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Antwort innerhalb von 24 Stunden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Transparente Konditionen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Individuelle Beratung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Flexible Terminvereinbarung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="text-lg font-bold mb-2">Schnelle Antwort garantiert</h3>
                <p className="text-sm text-primary-foreground/90">
                  Wir melden uns innerhalb von 24 Stunden mit einem detaillierten Angebot bei Ihnen.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Fragen?</h3>
                <p className="text-sm text-muted-foreground mb-4">Rufen Sie uns direkt an:</p>
                <a href="tel:+491726316205" className="text-xl font-bold text-primary hover:text-primary/80 block">
                  +49 172 6316205
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
