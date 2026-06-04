import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { FileText, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AngebotPage() {
  return (
    <div className="min-h-screen bg-white">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
              <FileText className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Angebot</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Kostenloses{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Angebot
              </span>{" "}
              anfordern
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Erhalten Sie ein unverbindliches und transparentes Angebot für Ihre Reinigungsdienstleistung
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ihre Anfrage</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Vorname</label>
                      <Input placeholder="Max" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nachname</label>
                      <Input placeholder="Mustermann" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                    <Input type="email" placeholder="max@beispiel.de" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <Input type="tel" placeholder="+49 123 456789" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Art der Reinigung</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Gartenpflege</option>
                      <option>Hausreinigung</option>
                      <option>Büroreinigung</option>
                      <option>Fensterreinigung</option>
                      <option>Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fläche (m²)</label>
                    <Input type="number" placeholder="100" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Zusätzliche Informationen</label>
                    <Textarea placeholder="Beschreiben Sie Ihre Anforderungen..." className="w-full min-h-32" />
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                    Angebot anfordern
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu
                  </p>
                </form>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Ihre Vorteile</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Kostenlos & unverbindlich</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Antwort innerhalb von 24 Stunden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Transparente Preisgestaltung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Individuelle Beratung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Flexible Terminvereinbarung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Schnelle Antwort garantiert</h3>
                <p className="text-sm text-white/90">
                  Wir melden uns innerhalb von 24 Stunden mit einem detaillierten Angebot bei Ihnen.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fragen?</h3>
                <p className="text-sm text-gray-600 mb-4">Rufen Sie uns direkt an:</p>
                <a href="tel:+4989123456789" className="text-xl font-bold text-green-600 hover:text-green-700 block">
                  +49 89 123 456 789
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
