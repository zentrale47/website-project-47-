import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Kontaktieren Sie <span className="text-primary">uns</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Wir sind für Sie da. Kontaktieren Sie uns für ein unverbindliches Angebot.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Nachricht senden</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input placeholder="Ihr Name" className="w-full bg-background border-border focus-visible:bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-Mail</label>
                  <Input type="email" placeholder="ihre@email.de" className="w-full bg-background border-border focus-visible:bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                  <Input type="tel" placeholder="0172 1234567" className="w-full bg-background border-border focus-visible:bg-background" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nachricht</label>
                  <Textarea placeholder="Ihre Nachricht..." className="w-full min-h-32 bg-background border-border focus-visible:bg-background" />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                  Nachricht senden
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Telefon</h3>
                <p className="text-muted-foreground mb-2">Rufen Sie uns an:</p>
                <a href="tel:+491726316205" className="text-2xl font-bold text-primary hover:text-primary/80">
                  0172 6316205
                </a>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">E-Mail</h3>
                <p className="text-muted-foreground mb-2">Schreiben Sie uns:</p>
                <a
                  href="mailto:info@cleanvis.de"
                  className="text-xl font-bold text-primary hover:text-primary/80 break-all"
                >
                  info@cleanvis.de
                </a>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Standort</h3>
                <p className="text-muted-foreground">
                  Sarasatestraße 26, 81247 München
                  <br />
                  Wir bedienen ganz München und Umgebung
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Öffnungszeiten</h3>
                <div className="text-muted-foreground space-y-1">
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
