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
  ArrowRight
} from "lucide-react"

const services = [
  {
    id: "gebaeudereinigung",
    icon: Building2,
    title: "Gebäudereinigung",
    description: "Professionelle Reinigung für Bürogebäude, Gewerbeimmobilien und öffentliche Einrichtungen.",
    features: ["Treppenhausreinigung", "Flurreinigung", "Eingangsbereiche"],
    color: "from-green-500 to-green-600",
  },
  {
    id: "fensterreinigung",
    icon: Droplets,
    title: "Fensterreinigung",
    description: "Streifenfreier Glanz für alle Fenstergrößen - innen und außen.",
    features: ["Rahmenreinigung", "Glasfassaden", "Schwer erreichbare Fenster"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "bueroreinigung",
    icon: Building2,
    title: "Büroreinigung",
    description: "Saubere Arbeitsplätze für produktive Teams - täglich oder wöchentlich.",
    features: ["Schreibtische", "Sanitäranlagen", "Küchenbereiche"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "grundreinigung",
    icon: Sparkles,
    title: "Grundreinigung",
    description: "Intensive Tiefenreinigung für einen strahlend sauberen Neuanfang.",
    features: ["Bodenreinigung", "Desinfektion", "Tiefenreinigung"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "privathaushalt",
    icon: Home,
    title: "Privat Haushalt",
    description: "Gründliche Reinigung für Ihr Zuhause - regelmäßig oder einmalig.",
    features: ["Wohnungsreinigung", "Umzugsreinigung", "Airbnb"],
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "gastronomie",
    icon: UtensilsCrossed,
    title: "Gastronomie",
    description: "Hygienische Sauberkeit für Restaurants, Cafés und Hotels.",
    features: ["Küchenreinigung", "Gastraumreinigung", "HACCP-konform"],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "schulen",
    icon: GraduationCap,
    title: "Schulen",
    description: "Saubere Lernumgebungen für Schulen und Bildungseinrichtungen.",
    features: ["Klassenzimmer", "Sporthallen", "Sanitäranlagen"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "fitnessstudios",
    icon: Dumbbell,
    title: "Fitnessstudios",
    description: "Hygienische Reinigung für Fitness- und Sporteinrichtungen.",
    features: ["Gerätereinigung", "Umkleiden", "Desinfektion"],
    color: "from-red-500 to-red-600",
  },
  {
    id: "praxen",
    icon: Stethoscope,
    title: "Praxen",
    description: "Professionelle Reinigung für Arztpraxen und medizinische Einrichtungen.",
    features: ["Praxisräume", "Wartezimmer", "Medizinische Hygiene"],
    color: "from-teal-500 to-teal-600",
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Unsere Leistungen
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            9 Bereiche.{" "}
            <span className="text-green-600">Eine Qualität.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Von der Büroreinigung bis zur medizinischen Praxis - wir bieten maßgeschneiderte 
            Reinigungslösungen für jeden Bedarf.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link 
                href={`/leistungen#${service.id}`}
                className="inline-flex items-center text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link href="/angebot">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg font-medium">
              Jetzt Angebot anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
