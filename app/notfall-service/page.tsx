import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Phone, Clock, Zap, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotfallServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
              <Zap className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">Notfall-Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Heute anrufen,{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                heute sauber
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schnelle und flexible Notfallreinigung für dringende Situationen in München
            </p>
          </div>

          {/* Emergency Hotline */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center mb-12 shadow-2xl">
            <Phone className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">24/7 Notfall-Hotline</h2>
            <p className="text-white/90 mb-6">Wir sind rund um die Uhr für Sie erreichbar</p>
            <a
              href="tel:+4989123456789"
              className="inline-block bg-white text-green-600 font-bold text-3xl md:text-4xl px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              +49 89 123 456 789
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <Clock className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sofort verfügbar</h3>
              <p className="text-gray-600">Wir sind innerhalb von 2-4 Stunden bei Ihnen vor Ort</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <Zap className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Express-Reinigung</h3>
              <p className="text-gray-600">Schnelle und gründliche Reinigung für Notfälle</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <CheckCircle2 className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professionell</h3>
              <p className="text-gray-600">Erfahrenes Team mit professioneller Ausrüstung</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <Phone className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Erreichbar</h3>
              <p className="text-gray-600">Auch an Wochenenden und Feiertagen für Sie da</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Notfall-Service Preise</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Express-Zuschlag</h4>
                  <p className="text-sm text-gray-600">Innerhalb von 2-4 Stunden</p>
                </div>
                <span className="text-2xl font-bold text-green-600">+50€</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Basis-Reinigung</h4>
                  <p className="text-sm text-gray-600">Pro Quadratmeter</p>
                </div>
                <span className="text-2xl font-bold text-green-600">5€/m²</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Wochenend-Zuschlag</h4>
                  <p className="text-sm text-gray-600">Samstag & Sonntag</p>
                </div>
                <span className="text-2xl font-bold text-green-600">+30€</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center mt-6">
              * Alle Preise verstehen sich inklusive Anfahrt im Stadtgebiet München
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Brauchen Sie sofort Hilfe?</h3>
            <p className="text-gray-600 mb-6">Rufen Sie uns jetzt an oder fordern Sie ein Angebot an</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+4989123456789">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
              <a href="/angebot">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg bg-transparent"
                >
                  Angebot anfordern
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
