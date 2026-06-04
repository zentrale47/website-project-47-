"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { CheckCircle2, Users, Award, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <GlassmorphismNav />

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Über{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                CleanVis
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ihr vertrauensvoller Partner für professionelle Reinigungsdienstleistungen in München
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <Image
              src="/images/cleanvis-full-logo.png"
              alt="CleanVis Logo"
              width={800}
              height={267}
              className="h-64 md:h-80 w-auto"
            />
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unsere Geschichte</h2>
            <p className="text-gray-600 mb-4">
              CleanVis wurde mit der Vision gegründet, München sauberer und grüner zu machen. Wir sind ein
              familiengeführtes Unternehmen, das sich auf umweltfreundliche Reinigungslösungen spezialisiert hat.
            </p>
            <p className="text-gray-600 mb-4">
              Mit über 5 Jahren Erfahrung in der Branche haben wir uns einen Namen für Qualität, Zuverlässigkeit und
              Kundenzufriedenheit gemacht. Unser Team besteht aus geschulten Fachkräften, die mit Leidenschaft und
              Sorgfalt arbeiten.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Qualität</h3>
              <p className="text-gray-600">
                Wir setzen auf höchste Qualitätsstandards und verwenden nur umweltfreundliche Reinigungsmittel.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Team</h3>
              <p className="text-gray-600">
                Unser erfahrenes Team ist geschult, versichert und arbeitet mit größter Sorgfalt.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <Award className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Erfahrung</h3>
              <p className="text-gray-600">
                Über 5 Jahre Erfahrung und hunderte zufriedene Kunden in München und Umgebung.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <Heart className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Leidenschaft</h3>
              <p className="text-gray-600">
                Wir lieben was wir tun und setzen uns mit Herzblut für saubere Räume und Gärten ein.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Bereit für ein sauberes Zuhause?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot
            </p>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/contact"
                setTimeout(() => window.scrollTo(0, 0), 100)
              }}
              className="inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
