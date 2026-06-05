import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, MessageCircle, Shield, Clock, CheckCircle, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 pt-12 pb-20 relative">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-background.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Badge Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-in-badge">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4 mr-2" />
            Haftpflichtversichert
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm font-medium backdrop-blur-sm">
            <Clock className="w-4 h-4 mr-2" />
            Flexible Termine
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm font-medium backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            Kostenlose Beratung
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 animate-fade-in-heading">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Professionelle <span className="text-primary">Gebäudereinigung</span>
            <br />
            in München
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Zuverlässige Reinigung für Büros, Privathaushalte, Gastronomie, Schulen, Fitnessstudios und Praxen. Online
            anfragen und Termine sauber planen.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-buttons">
          <Link href="/angebot">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl group cursor-pointer"
            >
              Kostenloses Angebot anfragen
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
          <Link href="/leistungen">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-medium border-2 border-white/50 text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 bg-transparent backdrop-blur-sm cursor-pointer"
            >
              Leistungen ansehen
            </Button>
          </Link>
          <a href="https://wa.me/4917631285390" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 py-6 text-lg font-medium border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105 bg-transparent cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Service Cockpit Dashboard */}
        <div className="bg-card rounded-3xl shadow-2xl border border-border p-6 md:p-8 max-w-5xl mx-auto animate-fade-in-trust">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Service Cockpit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">live</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-8 text-center">
            Sauberkeit wird planbar
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="bg-background rounded-2xl p-4 text-center border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">60</div>
              <div className="text-xs text-muted-foreground">Sek. Online-Anfrage</div>
            </div>
            <div className="bg-background rounded-2xl p-4 text-center border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">9</div>
              <div className="text-xs text-muted-foreground">Leistungsbereiche</div>
            </div>
            <div className="bg-background rounded-2xl p-4 text-center border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">24h</div>
              <div className="text-xs text-muted-foreground">Rückmeldefokus</div>
            </div>
            <div className="bg-background rounded-2xl p-4 text-center border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Zufriedenheit</div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <div className="flex items-center gap-3 bg-primary/15 rounded-xl p-3 border border-primary/30">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <span className="text-sm font-medium text-card-foreground">Anfrage</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-xl p-3 border border-border">
              <div className="w-8 h-8 bg-muted-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <span className="text-sm font-medium text-muted-foreground">Planung</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-xl p-3 border border-border">
              <div className="w-8 h-8 bg-muted-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <span className="text-sm font-medium text-muted-foreground">Team</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-xl p-3 border border-border">
              <div className="w-8 h-8 bg-muted-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <span className="text-sm font-medium text-muted-foreground">Kontrolle</span>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">Nächster Schritt</p>
              <p className="font-medium text-card-foreground">Anfrage in 60 Sekunden starten</p>
            </div>
            <Link href="/angebot">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 font-medium">
                Starten
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Badges Bottom */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-white/80 animate-fade-in-trust">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Feste Ansprechpartner</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Flexible Zeiten</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>München & Umgebung</span>
          </div>
        </div>
      </div>
    </section>
  )
}
