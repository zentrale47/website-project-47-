import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Building2, Users, Clock, Shield, CheckCircle2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-background">
      <GlassmorphismNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
            <Building2 className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Enterprise Lösungen</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Reinigungslösungen für <span className="text-green-100">Großunternehmen</span>
          </h1>
          <p className="text-xl text-green-50 leading-relaxed mb-8">
            Maßgeschneiderte Facility-Management-Lösungen für Unternehmen mit mehreren Standorten, Bürokomplexen und
            großen Gewerbeflächen in München und Umgebung.
          </p>
          <Link href="/angebot">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
              Beratungsgespräch vereinbaren
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Enterprise Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Warum CleanVis für Ihr Unternehmen?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir verstehen die besonderen Anforderungen von Großunternehmen und bieten skalierbare, zuverlässige
              Reinigungslösungen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Dediziertes Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ein festes Reinigungsteam für Ihre Standorte mit persönlichem Ansprechpartner und Account Manager.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">24/7 Verfügbarkeit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Flexible Reinigungszeiten, die sich an Ihre Geschäftszeiten anpassen – auch nachts und am Wochenende.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Qualitätssicherung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Regelmäßige Qualitätskontrollen, digitales Reporting und transparente Leistungsnachweise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-card/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Unsere Enterprise Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Umfassende Reinigungslösungen für alle Bereiche Ihres Unternehmens
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Bürokomplexe & Verwaltungsgebäude</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Tägliche Unterhaltsreinigung aller Büroflächen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Sanitär- und Sozialraumreinigung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Konferenzraum- und Empfangsbereichspflege</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Glasfassaden- und Fensterreinigung</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Produktions- & Lagerhallen</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Industriereinigung nach Hygienestandards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Maschinenreinigung und Entstaubung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Hochdruckreinigung von Böden und Flächen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Entsorgungsmanagement</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Einzelhandel & Showrooms</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Verkaufsflächenreinigung während und nach Öffnungszeiten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Schaufenster- und Vitrinen-Pflege</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Bodenreinigung und -pflege</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Kundentoiletten-Service</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Außenanlagen & Parkplätze</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Parkplatz- und Zufahrtsreinigung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Grünflächenpflege und Gartendienste</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Winterdienst und Schneeräumung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">Müllplatz-Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ihre Vorteile</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Kosteneffizienz</h3>
              <p className="text-muted-foreground">
                Transparente Preisgestaltung und langfristige Verträge für planbare Kosten
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Versicherungsschutz</h3>
              <p className="text-muted-foreground">Vollständig versichert mit Haftpflicht- und Unfallversicherung</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Geschultes Personal</h3>
              <p className="text-muted-foreground">Professionell ausgebildete Mitarbeiter mit Sicherheitsschulungen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Qualitätsmanagement</h3>
              <p className="text-muted-foreground">ISO-zertifizierte Prozesse und regelmäßige Audits</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Flexibilität</h3>
              <p className="text-muted-foreground">Anpassbare Leistungspakete nach Ihren Anforderungen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Multi-Standort</h3>
              <p className="text-muted-foreground">Einheitliche Standards über alle Ihre Standorte hinweg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Bereit für eine maßgeschneiderte Lösung?</h2>
          <p className="text-xl text-green-50 mb-8 leading-relaxed">
            Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unserem Enterprise-Team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/angebot">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
                Beratung anfragen
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full bg-transparent"
              >
                0172 6316205
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
