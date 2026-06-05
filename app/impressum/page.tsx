import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum | CleanVis",
  description: "Impressum und rechtliche Angaben der CleanVis Gebäudereinigung in München.",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Impressum</h1>

          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p className="text-foreground font-medium">Devis Lucaci</p>
                <p>CleanVis Gebäudereinigung</p>
                <p>Sarasatestraße 26</p>
                <p>81247 München</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Kontakt</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p>
                  Telefon:{" "}
                  <a href="tel:+491726316205" className="text-primary hover:underline">
                    +49 172 6316205
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:info@cleanvis.de" className="text-primary hover:underline">
                    info@cleanvis.de
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Verantwortlich für den Inhalt</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p>Devis Lucaci</p>
                <p>Sarasatestraße 26, 81247 München</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Haftungsausschluss</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
