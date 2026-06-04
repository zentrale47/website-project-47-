import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Sparkles, 
  Building2, 
  Droplets, 
  Home, 
  UtensilsCrossed, 
  GraduationCap, 
  Dumbbell, 
  Stethoscope,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const services = [
  {
    id: "gebaeudereinigung",
    icon: Building2,
    title: "Gebäudereinigung",
    description: "Professionelle Reinigung für Bürogebäude, Gewerbeimmobilien und öffentliche Einrichtungen. Wir sorgen für Sauberkeit in allen Bereichen Ihres Gebäudes.",
    features: [
      "Treppenhausreinigung",
      "Flur- und Eingangsbereiche",
      "Aufzüge und Gemeinschaftsräume",
      "Tiefgaragen und Außenbereiche",
      "Regelmäßige Unterhaltsreinigung",
      "Sonderreinigungen auf Anfrage",
    ],
    color: "bg-primary",
  },
  {
    id: "fensterreinigung",
    icon: Droplets,
    title: "Fensterreinigung",
    description: "Streifenfreier Glanz für alle Fenstergrößen und -arten. Professionelle Reinigung innen und außen - auch für schwer erreichbare Fenster.",
    features: [
      "Fensterreinigung innen und außen",
      "Rahmen- und Fensterbankreinigung",
      "Glasfassaden und Wintergärten",
      "Schwer erreichbare Fenster",
      "Regelmäßige Wartungsverträge",
      "Umweltfreundliche Reinigungsmittel",
    ],
    color: "bg-primary",
  },
  {
    id: "bueroreinigung",
    icon: Building2,
    title: "Büroreinigung",
    description: "Saubere Büros für produktive Teams. Wir reinigen Ihre Arbeitsräume nach Ihrem Zeitplan - täglich, wöchentlich oder nach Bedarf.",
    features: [
      "Schreibtisch- und Arbeitsplatzreinigung",
      "Sanitäranlagen und WCs",
      "Küchen- und Pausenräume",
      "Müllentsorgung und Recycling",
      "Desinfektion von Kontaktflächen",
      "Flexible Reinigungszeiten",
    ],
    color: "bg-primary",
  },
  {
    id: "grundreinigung",
    icon: Sparkles,
    title: "Grundreinigung",
    description: "Intensive Tiefenreinigung für einen strahlend sauberen Neuanfang. Ideal nach Renovierung, Umzug oder für die jährliche Grundreinigung.",
    features: [
      "Intensive Bodenreinigung",
      "Tiefenreinigung aller Oberflächen",
      "Fenster und Rahmen",
      "Küche komplett inkl. Geräte",
      "Bad und Sanitäranlagen",
      "Desinfektion aller Bereiche",
    ],
    color: "bg-primary",
  },
  {
    id: "privathaushalt",
    icon: Home,
    title: "Privat Haushalt",
    description: "Gründliche Reinigung für Ihr Zuhause. Von der regelmäßigen Pflege bis zur einmaligen Grundreinigung - wir passen uns Ihren Wünschen an.",
    features: [
      "Regelmäßige Haushaltsreinigung",
      "Einmalige Grundreinigung",
      "Umzugsreinigung",
      "Airbnb-Zwischenreinigung",
      "Fensterreinigung",
      "Individuelle Wünsche",
    ],
    color: "bg-primary",
  },
  {
    id: "gastronomie",
    icon: UtensilsCrossed,
    title: "Gastronomie",
    description: "Hygienische Sauberkeit für Restaurants, Cafés, Hotels und Kantinen. Wir kennen die besonderen Anforderungen der Gastronomie.",
    features: [
      "Küchenreinigung (HACCP-konform)",
      "Gastraumreinigung",
      "Sanitäranlagen",
      "Außenbereiche und Terrassen",
      "Fettabscheider-Reinigung",
      "Notfall-Service verfügbar",
    ],
    color: "bg-primary",
  },
  {
    id: "schulen",
    icon: GraduationCap,
    title: "Schulen & Bildung",
    description: "Saubere Lernumgebungen für Schulen, Kindergärten und Bildungseinrichtungen. Hygiene und Sicherheit für Kinder und Jugendliche.",
    features: [
      "Klassenzimmer und Lehrerzimmer",
      "Sporthallen und Umkleiden",
      "Sanitäranlagen",
      "Mensen und Küchen",
      "Außenbereiche",
      "Ferienreinigung",
    ],
    color: "bg-primary",
  },
  {
    id: "fitnessstudios",
    icon: Dumbbell,
    title: "Fitnessstudios",
    description: "Hygienische Reinigung für Fitness- und Sporteinrichtungen. Besonderer Fokus auf Desinfektion und Hygiene.",
    features: [
      "Gerätereinigung und Desinfektion",
      "Umkleiden und Duschen",
      "Sanitäranlagen",
      "Kursräume und Studios",
      "Empfangs- und Wartebereiche",
      "Tägliche Hygiene-Checks",
    ],
    color: "bg-primary",
  },
  {
    id: "praxen",
    icon: Stethoscope,
    title: "Praxen & Medizin",
    description: "Professionelle Reinigung für Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen. Höchste Hygienestandards garantiert.",
    features: [
      "Praxis- und Behandlungsräume",
      "Wartezimmer und Empfang",
      "Sanitäranlagen",
      "Medizinische Hygiene",
      "Desinfektion nach Vorschrift",
      "Flexible Reinigungszeiten",
    ],
    color: "bg-primary",
  },
]

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-background">
      <GlassmorphismNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Unsere Leistungen</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            9 Bereiche. <span className="text-primary">Eine Qualität.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Von der Gebäudereinigung bis zur medizinischen Praxis - CleanVis bietet maßgeschneiderte 
            Reinigungslösungen für jeden Bedarf in München und Umgebung.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`py-20 px-4 ${index % 2 === 0 ? "bg-background" : "bg-card/40"}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-4`}>
                  <service.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{service.title}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/angebot">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3">
                    Angebot anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className={`${service.color} rounded-3xl p-8 text-primary-foreground ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-6">
                  <service.icon className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">Leistungsumfang</h3>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Bereit für professionelle Reinigung?</h2>
          <p className="text-xl text-green-50 mb-8 leading-relaxed">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Wir melden uns innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/angebot">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
                Angebot anfordern
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full bg-transparent"
              >
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
