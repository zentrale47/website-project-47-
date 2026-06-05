import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Phone, Clock, Zap, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotfallServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Notfall-Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Heute anrufen, <span className="text-primary">heute sauber</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Schnelle und flexible Notfallreinigung für dringende Situationen in München
            </p>
          </div>

          {/* Emergency Hotline */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-12 shadow-2xl">
            <Phone className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Notfall-Hotline</h2>
            <p className="text-primary-foreground/90 mb-6">Wir sind schnell für Sie erreichbar</p>
            <a
              href="tel:+491726316205"
              className="inline-block bg-card text-primary font-bold text-3xl md:text-4xl px-8 py-4 rounded-full hover:bg-card/80 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              +49 172 6316205
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <Clock className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-2">Schnell vor Ort</h3>
              <p className="text-muted-foreground">Wir sind in der Regel innerhalb weniger Stunden bei Ihnen</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <Zap className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-2">Express-Reinigung</h3>
              <p className="text-muted-foreground">Schnelle und gründliche Reinigung für Notfälle</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-2">Professionell</h3>
              <p className="text-muted-foreground">Erfahrenes Team mit professioneller Ausrüstung</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <Phone className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-2">Flexibel erreichbar</h3>
              <p className="text-muted-foreground">Auch an Wochenenden und Feiertagen für Sie da</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Brauchen Sie sofort Hilfe?</h3>
            <p className="text-muted-foreground mb-6">Rufen Sie uns jetzt an oder fordern Sie ein Angebot an</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+491726316205">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
              <a href="/angebot">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
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
