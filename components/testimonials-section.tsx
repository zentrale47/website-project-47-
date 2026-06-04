"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"
import Aurora from "@/components/Aurora"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    console.log("[v0] TestimonialsSection mounted with Aurora")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("[v0] TestimonialsSection is visible")
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
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

  const services = [
    {
      text: "Professionelle Reinigung für Airbnb-Unterkünfte. Schnelle Zwischenreinigung zwischen Gästen mit höchsten Hygienestandards.",
      name: "Airbnb Reinigung",
      role: "Kurzzeitvermietung",
    },
    {
      text: "Gründliche Hausreinigung für Privathaushalte in München. Von der Grundreinigung bis zur regelmäßigen Pflege.",
      name: "Private Haushalte",
      role: "Wohnungsreinigung",
    },
    {
      text: "Büroreinigung für Unternehmen jeder Größe. Saubere Arbeitsumgebung für produktive Teams.",
      name: "Büroreinigung",
      role: "Gewerbliche Reinigung",
    },
    {
      text: "Professionelle Gartenreinigung und -pflege. Terrassen, Wege und Außenbereiche immer gepflegt.",
      name: "Gartenreinigung",
      role: "Außenbereich",
    },
    {
      text: "Fensterreinigung für Privat und Gewerbe. Streifenfreier Glanz für alle Fenstergrößen.",
      name: "Fensterreinigung",
      role: "Spezialreinigung",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-8 pb-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Aurora colorStops={["#22c55e", "#10b981", "#ffffff"]} amplitude={1.2} blend={0.9} speed={0.5} />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-green-600 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-green-500/30"></div>
            Unsere Dienstleistungen
            <div className="w-8 h-px bg-green-500/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight text-balance">
            Was wir für Sie <span className="font-medium italic text-green-600">reinigen</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Von Airbnb-Wohnungen bis zu Bürogebäuden – CleanVis bietet professionelle Reinigungsdienste in ganz München
          </p>
        </div>

        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[700px] overflow-hidden">
          <div
            className="flex gap-8 max-w-4xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={services.slice(0, 3)} duration={25} className="flex-1" />
            <TestimonialsColumn testimonials={services.slice(2, 5)} duration={30} className="flex-1 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
