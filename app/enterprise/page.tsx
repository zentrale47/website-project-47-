import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Building2, Users, Clock, Shield, CheckCircle2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
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
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
              Beratungsgespräch vereinbaren
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Enterprise Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Warum CleanVis für Ihr Unternehmen?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir verstehen die besonderen Anforderungen von Großunternehmen und bieten skalierbare, zuverlässige
              Reinigungslösungen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dediziertes Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Ein festes Reinigungsteam für Ihre Standorte mit persönlichem Ansprechpartner und Account Manager.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <Clock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Verfügbarkeit</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible Reinigungszeiten, die sich an Ihre Geschäftszeiten anpassen – auch nachts und am Wochenende.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Qualitätssicherung</h3>
              <p className="text-gray-600 leading-relaxed">
                Regelmäßige Qualitätskontrollen, digitales Reporting und transparente Leistungsnachweise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Unsere Enterprise Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Reinigungslösungen für alle Bereiche Ihres Unternehmens
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bürokomplexe & Verwaltungsgebäude</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tägliche Unterhaltsreinigung aller Büroflächen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sanitär- und Sozialraumreinigung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Konferenzraum- und Empfangsbereichspflege</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Glasfassaden- und Fensterreinigung</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Produktions- & Lagerhallen</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industriereinigung nach Hygienestandards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Maschinenreinigung und Entstaubung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hochdruckreinigung von Böden und Flächen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Entsorgungsmanagement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Einzelhandel & Showrooms</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Verkaufsflächenreinigung während und nach Öffnungszeiten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Schaufenster- und Vitrinen-Pflege</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bodenreinigung und -pflege</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kundentoiletten-Service</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Außenanlagen & Parkplätze</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Parkplatz- und Zufahrtsreinigung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Grünflächenpflege und Gartendienste</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Winterdienst und Schneeräumung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Müllplatz-Management</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Ihre Vorteile</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kosteneffizienz</h3>
              <p className="text-gray-600">
                Transparente Preisgestaltung und langfristige Verträge für planbare Kosten
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Versicherungsschutz</h3>
              <p className="text-gray-600">Vollständig versichert mit Haftpflicht- und Unfallversicherung</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Geschultes Personal</h3>
              <p className="text-gray-600">Professionell ausgebildete Mitarbeiter mit Sicherheitsschulungen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualitätsmanagement</h3>
              <p className="text-gray-600">ISO-zertifizierte Prozesse und regelmäßige Audits</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexibilität</h3>
              <p className="text-gray-600">Anpassbare Leistungspakete nach Ihren Anforderungen</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Standort</h3>
              <p className="text-gray-600">Einheitliche Standards über alle Ihre Standorte hinweg</p>
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
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
                Beratung anfragen
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full bg-transparent"
              >
                +49 89 123 456 789
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
