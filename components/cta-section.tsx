"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-8 px-4 sm:px-6 lg:px-8 mb-32">
      <div className="relative max-w-4xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center p-8 md:p-10 rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 text-balance leading-tight">
            Bereit für ein{" "}
            <span className="font-medium italic bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              sauberes Zuhause
            </span>
            ?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Kontaktieren Sie uns noch heute für ein kostenloses Angebot. Professionelle Reinigung für Gärten, Häuser und
            Büros in München.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/angebot">
              <button className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-semibold text-base md:text-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                Jetzt Angebot erhalten
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
