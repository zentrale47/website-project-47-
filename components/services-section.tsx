"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Home,
  Sparkles,
  UtensilsCrossed,
  GraduationCap,
  Dumbbell,
  Stethoscope,
  Droplets,
  Briefcase,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    id: "gebaeudereinigung",
    icon: Building2,
    title: "Gebäudereinigung",
    description: "Professionelle Reinigung für Bürogebäude, Gewerbeimmobilien und öffentliche Einrichtungen.",
    features: ["Treppenhausreinigung", "Flurreinigung", "Eingangsbereiche"],
  },
  {
    id: "fensterreinigung",
    icon: Droplets,
    title: "Fensterreinigung",
    description: "Streifenfreier Glanz für alle Fenstergrößen - innen und außen.",
    features: ["Rahmenreinigung", "Glasfassaden", "Schwer erreichbare Fenster"],
  },
  {
    id: "bueroreinigung",
    icon: Briefcase,
    title: "Büroreinigung",
    description: "Saubere Arbeitsplätze für produktive Teams - täglich oder wöchentlich.",
    features: ["Schreibtische", "Sanitäranlagen", "Küchenbereiche"],
  },
  {
    id: "grundreinigung",
    icon: Sparkles,
    title: "Grundreinigung",
    description: "Intensive Tiefenreinigung für einen strahlend sauberen Neuanfang.",
    features: ["Bodenreinigung", "Desinfektion", "Tiefenreinigung"],
  },
  {
    id: "privathaushalt",
    icon: Home,
    title: "Privat Haushalt",
    description: "Gründliche Reinigung für Ihr Zuhause - regelmäßig oder einmalig.",
    features: ["Wohnungsreinigung", "Umzugsreinigung", "Airbnb"],
  },
  {
    id: "gastronomie",
    icon: UtensilsCrossed,
    title: "Gastronomie",
    description: "Hygienische Sauberkeit für Restaurants, Cafés und Hotels.",
    features: ["Küchenreinigung", "Gastraumreinigung", "HACCP-konform"],
  },
  {
    id: "schulen",
    icon: GraduationCap,
    title: "Schulen",
    description: "Saubere Lernumgebungen für Schulen und Bildungseinrichtungen.",
    features: ["Klassenzimmer", "Sporthallen", "Sanitäranlagen"],
  },
  {
    id: "fitnessstudios",
    icon: Dumbbell,
    title: "Fitnessstudios",
    description: "Hygienische Reinigung für Fitness- und Sporteinrichtungen.",
    features: ["Gerätereinigung", "Umkleiden", "Desinfektion"],
  },
  {
    id: "praxen",
    icon: Stethoscope,
    title: "Praxen",
    description: "Professionelle Reinigung für Arztpraxen und medizinische Einrichtungen.",
    features: ["Praxisräume", "Wartezimmer", "Medizinische Hygiene"],
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const node = sectionRef.current
    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Unsere Leistungen
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
            9 Bereiche. <span className="text-primary">Eine Qualität.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Von der Büroreinigung bis zur medizinischen Praxis - wir bieten maßgeschneiderte Reinigungslösungen für
            jeden Bedarf.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-background rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.features.map((feature, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-card text-muted-foreground rounded-full border border-border">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={`/leistungen#${service.id}`}
                className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link href="/angebot">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium"
            >
              Jetzt Angebot anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
