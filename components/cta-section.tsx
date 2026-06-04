"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, ArrowRight, MapPin, Clock } from "lucide-react"

export function CTASection() {
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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Bereit für professionelle Reinigung?
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Kontaktieren Sie uns für ein unverbindliches Angebot. 
            Wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Contact Options */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Phone */}
          <a 
            href="tel:+4917631285390" 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Anrufen</h3>
            <p className="text-green-100 mb-4">Direkt mit uns sprechen</p>
            <span className="text-white font-medium">+49 176 31285390</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/4917631285390" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-green-100 mb-4">Schnell und unkompliziert</p>
            <span className="text-white font-medium">Jetzt schreiben</span>
          </a>

          {/* Email */}
          <Link 
            href="/angebot"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Online Anfrage</h3>
            <p className="text-green-100 mb-4">Formular in 60 Sekunden</p>
            <span className="text-white font-medium">Angebot anfragen</span>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link href="/angebot">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
            >
              Kostenloses Angebot anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold bg-transparent"
            >
              Kontakt aufnehmen
            </Button>
          </Link>
        </div>

        {/* Info Row */}
        <div className={`flex flex-wrap items-center justify-center gap-8 mt-12 text-green-100 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>München & Umgebung</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Mo-Fr 8:00 - 18:00 Uhr</span>
          </div>
        </div>
      </div>
    </section>
  )
}
