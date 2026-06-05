"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const AlertTriangle = () => (
  <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z"
    />
  </svg>
)

const CheckCircle = () => (
  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
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
    <section ref={sectionRef} className="py-8 md:py-12 px-4 relative z-10 my-0">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 backdrop-blur-md border border-green-200 text-green-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
            Ihr Problem bei der Reinigung
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance mb-4 sm:mb-6">
            Warum <span className="text-green-600">professionelle Reinigung</span> wichtig ist
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Sauberkeit schafft Wohlbefinden und einen positiven Eindruck. Hier ist, wie wir helfen.
          </p>
        </div>

        {/* Main Problem/Solution Cards */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Problem Card */}
          <div className="group">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 sm:p-8 h-full hover:bg-white transition-all duration-500 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-100">
                  <AlertTriangle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-600">Ihr Problem</h3>
              </div>

              {/* Key Stat */}
              <div className="bg-red-50 backdrop-blur-sm border border-red-200 rounded-xl p-4 sm:p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">Keine Zeit</div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Zwischen Arbeit und Familie bleibt oft keine Zeit für gründliche Reinigung
                </p>
              </div>

              {/* Problem Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Zeitaufwendige Reinigungsarbeiten nehmen wertvolle Freizeit
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Schwer erreichbare Stellen werden oft vernachlässigt
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm sm:text-base">Fehlende professionelle Ausrüstung und Expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 sm:p-8 h-full hover:bg-white transition-all duration-500 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-100">
                  <CheckCircle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-600">Unsere Lösung</h3>
              </div>

              {/* Key Stat */}
              <div className="bg-green-50 backdrop-blur-sm border border-green-200 rounded-xl p-4 sm:p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">100% Sauber</div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Professionelle Reinigung mit modernster Ausrüstung und geschultem Personal
                </p>
              </div>

              {/* Solution Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-gray-600 text-sm sm:text-base">Flexible Terminvereinbarung nach Ihren Wünschen</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-gray-600 text-sm sm:text-base">Umweltfreundliche Reinigungsmittel und Methoden</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-gray-600 text-sm sm:text-base">Erfahrenes Team für Gärten, Häuser und Büros</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-600 flex-wrap ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-4 sm:p-6 hover:bg-white transition-all duration-300 shadow-lg min-w-[150px]">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">5+ Jahre</div>
            <p className="text-gray-600 text-xs sm:text-sm">Erfahrung in München</p>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-4 sm:p-6 hover:bg-white transition-all duration-300 shadow-lg min-w-[150px]">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">100%</div>
            <p className="text-gray-600 text-xs sm:text-sm">Zufriedenheitsgarantie</p>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-900 shadow-lg ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
            Starten Sie noch heute mit CleanVis
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Erhalten Sie ein kostenloses Angebot für Ihre Reinigungs- und Gartenpflegebedürfnisse.
          </p>
          <Link href="/angebot">
            <Button
              size="lg"
              className="bg-green-600 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg group cursor-pointer"
            >
              Kostenloses Angebot erhalten
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
