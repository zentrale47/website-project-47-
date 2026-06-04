"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Calculator, Euro } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function ROICalculatorSection() {
  const [squareMeters, setSquareMeters] = useState(100)
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("roi-calculator")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const pricePerSquareMeter = 3
  const totalPrice = squareMeters * pricePerSquareMeter

  const handleNavigation = (path: string) => {
    router.push(path)
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
  }

  return (
    <section id="roi-calculator" className="py-4 md:py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 backdrop-blur-sm mb-6">
            <Calculator className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Preis Rechner</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-balance">
            Berechnen Sie Ihren{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Reinigungspreis
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Einfache und transparente Preisberechnung für Ihre Reinigungsfläche
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Card className="p-6 md:p-8 bg-gradient-to-br from-green-600 to-green-700 border-green-500 shadow-2xl h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8">Ihre Fläche</h3>

              <div className="space-y-8 flex-1">
                {/* Square Meters Slider */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-3">
                    Quadratmeter (m²): <span className="text-white font-bold text-lg">{squareMeters} m²</span>
                  </label>
                  <Slider
                    value={[squareMeters]}
                    onValueChange={([value]) => setSquareMeters(value)}
                    max={500}
                    min={10}
                    step={10}
                    className="w-full touch-pan-x [&_[role=slider]]:bg-white [&_[role=slider]]:border-white [&_[role=slider]]:w-7 [&_[role=slider]]:h-7 [&_[role=slider]]:cursor-pointer [&_[role=slider]]:touch-none [&_.bg-primary]:bg-white [&_[role=slider]]:shadow-lg"
                  />
                  <div className="flex justify-between text-xs text-white/80 mt-2">
                    <span>10 m²</span>
                    <span>500 m²</span>
                  </div>
                </div>

                <div className="lg:hidden p-4 md:p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="text-sm font-semibold text-white mb-3">Ihre Kostenschätzung</h4>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">ca. {totalPrice}€</div>
                    <div className="text-xs text-white/80">Unverbindliche Preisschätzung</div>
                  </div>
                </div>

                <div className="flex-1"></div>

                {/* Info Box */}
                <div className="mt-8 p-4 md:p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="text-sm font-semibold text-white mb-3">💡 Preisinformation</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-white/90">
                      <span className="font-medium">Preis pro m²:</span> {pricePerSquareMeter}€
                    </p>
                    <p className="text-xs text-white/70">
                      Unsere Preise sind transparent und fair. Keine versteckten Kosten.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Card className="p-6 md:p-8 bg-white border-green-200 shadow-2xl h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">Ihre Kostenschätzung</h3>

              <div className="space-y-6 flex-1">
                {/* Price Breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-center gap-3">
                      <Calculator className="w-5 h-5 text-green-600" />
                      <span className="text-base text-gray-700">Fläche</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{squareMeters} m²</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-center gap-3">
                      <Euro className="w-5 h-5 text-green-600" />
                      <span className="text-base text-gray-700">Preis pro m²</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{pricePerSquareMeter}€</span>
                  </div>
                </div>

                {/* Total Price */}
                <div className="mt-8 p-6 md:p-8 rounded-xl bg-gradient-to-br from-green-500 to-green-600 border border-green-400">
                  <div className="text-center">
                    <div className="text-sm text-white/90 mb-2">Geschätzter Gesamtpreis</div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-1">ca. {totalPrice}€</div>
                    <div className="text-xs text-white/80">Unverbindliche Preisschätzung</div>
                  </div>
                </div>

                <div className="space-y-3 mt-8">
                  <Link href="/angebot">
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg font-semibold cursor-pointer"
                      size="lg"
                    >
                      Angebot anfordern
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50 py-6 text-lg font-semibold bg-transparent cursor-pointer"
                      size="lg"
                    >
                      Beratungstermin buchen
                    </Button>
                  </Link>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * Endgültiger Preis kann je nach Verschmutzungsgrad und Zusatzleistungen variieren
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
