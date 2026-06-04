import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Kontaktieren Sie{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">uns</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir sind für Sie da. Kontaktieren Sie uns für ein unverbindliches Angebot.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nachricht senden</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input placeholder="Ihr Name" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                  <Input type="email" placeholder="ihre@email.de" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <Input type="tel" placeholder="+49 123 456789" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                  <Textarea placeholder="Ihre Nachricht..." className="w-full min-h-32" />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                  Nachricht senden
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <Phone className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
                <p className="text-gray-600 mb-2">Rufen Sie uns an:</p>
                <a href="tel:+4989123456789" className="text-2xl font-bold text-green-600 hover:text-green-700">
                  +49 89 123 456 789
                </a>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <Mail className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Mail</h3>
                <p className="text-gray-600 mb-2">Schreiben Sie uns:</p>
                <a
                  href="mailto:info@cleanvis.de"
                  className="text-xl font-bold text-green-600 hover:text-green-700 break-all"
                >
                  info@cleanvis.de
                </a>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <MapPin className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Standort</h3>
                <p className="text-gray-600">
                  München, Deutschland
                  <br />
                  Wir bedienen ganz München und Umgebung
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <Clock className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Öffnungszeiten</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Montag - Freitag: 8:00 - 18:00</p>
                  <p>Samstag: 9:00 - 14:00</p>
                  <p>Sonntag: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
