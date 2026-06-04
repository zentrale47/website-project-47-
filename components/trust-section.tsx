"use client"

import { useRef, useState, useEffect } from "react"
import { CheckCircle, Shield, Clock, Users, Award, ThumbsUp } from "lucide-react"

const trustFeatures = [
  {
    icon: Shield,
    title: "Haftpflichtversichert",
    description: "Vollständig versichert für Ihre Sicherheit und Ihren Schutz.",
  },
  {
    icon: Clock,
    title: "Flexible Termine",
    description: "Reinigung nach Ihrem Zeitplan - auch am Wochenende.",
  },
  {
    icon: Users,
    title: "Geschultes Personal",
    description: "Professionell ausgebildete Reinigungskräfte.",
  },
  {
    icon: Award,
    title: "Qualitätsgarantie",
    description: "Zufriedenheit garantiert oder kostenlose Nachreinigung.",
  },
  {
    icon: ThumbsUp,
    title: "Schnelle Rückmeldung",
    description: "Angebote innerhalb von 24 Stunden.",
  },
  {
    icon: CheckCircle,
    title: "Feste Ansprechpartner",
    description: "Persönliche Betreuung durch Ihren Kontakt.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Erster Eindruck",
    description: "Ein Objekt, das morgens sofort bereit wirkt - klare Böden, saubere Kontaktflächen und ein gepflegter Empfang.",
    highlight: "Der Eindruck stimmt, bevor jemand etwas erklären muss.",
  },
  {
    step: "02",
    title: "Klare Anfrage",
    description: "Sie schildern Ihren Bedarf online oder telefonisch. Wir verstehen sofort, was wichtig ist.",
    highlight: "Transparente Kommunikation von Anfang an.",
  },
  {
    step: "03",
    title: "Team-Einsatz",
    description: "Unser geschultes Team arbeitet systematisch und gründlich nach Ihren Vorgaben.",
    highlight: "Professionell und zuverlässig.",
  },
  {
    step: "04",
    title: "Qualitätskontrolle",
    description: "Regelmäßige Kontrollen sichern gleichbleibend hohe Qualität.",
    highlight: "Kontinuierliche Verbesserung.",
  },
]

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

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
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
            Die CleanVis Story
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aus Reinigung wird ein{" "}
            <span className="text-green-600">verlässlicher Eindruck.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Menschen entscheiden in Sekunden, ob ein Raum gepflegt, professionell und vertrauenswürdig wirkt. 
            Wir sorgen dafür, dass Ihr Objekt jeden Tag bereit ist.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          {/* Step Tabs */}
          <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {processSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeStep === index
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {step.step} {step.title}
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 max-w-4xl mx-auto transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-start gap-6">
              <div className="hidden md:flex w-20 h-20 bg-green-600 rounded-2xl items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">{processSteps[activeStep].step}</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {processSteps[activeStep].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-700 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {processSteps[activeStep].highlight}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
