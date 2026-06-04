"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navigation = [
  {
    name: "Leistungen",
    href: "/leistungen",
    dropdown: [
      { name: "Gebäudereinigung", href: "/leistungen#gebaeudereinigung" },
      { name: "Fensterreinigung", href: "/leistungen#fensterreinigung" },
      { name: "Büroreinigung", href: "/leistungen#bueroreinigung" },
      { name: "Grundreinigung", href: "/leistungen#grundreinigung" },
      { name: "Privat Haushalt", href: "/leistungen#privathaushalt" },
      { name: "Gastronomie", href: "/leistungen#gastronomie" },
    ],
  },
  { name: "Notfall-Service", href: "/notfall-service" },
  { name: "Über uns", href: "/about" },
  { name: "Kontakt", href: "/contact" },
]

export function GlassmorphismNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavigate = (href: string, e?: React.MouseEvent) => {
    setIsOpen(false)
    setOpenDropdown(null)
    setMobileServicesOpen(false)

    if (href.includes("#")) {
      const [path, hash] = href.split("#")
      if (path && window.location.pathname !== path) {
        window.location.href = href
        return
      }
      if (hash) {
        e?.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          const offset = element.getBoundingClientRect().top + window.pageYOffset - 96
          window.scrollTo({ top: offset, behavior: "smooth" })
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden md:block bg-[#212529] text-primary-foreground/70">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              München &amp; Umgebung
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              Mo–Fr 8:00 – 18:00 Uhr
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+491726316205" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary" />
              0172 6316205
            </a>
            <a href="mailto:info@cleanvis.de" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary" />
              info@cleanvis.de
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md border-border shadow-sm"
            : "bg-card border-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <Image
                  src="/images/cleanvis-logo.png"
                  alt="CleanVis Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">CleanVis</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 pt-2 w-60">
                        <div className="bg-card border border-border rounded-xl shadow-xl py-2 overflow-hidden">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => handleNavigate(subItem.href, e)}
                              className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/angebot"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-md transition-colors shadow-sm"
              >
                Angebot anfragen
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menü öffnen"
              className="md:hidden text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-transparent"
          }`}
        >
          <div className="px-4 py-4 space-y-1 bg-card">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-foreground/90 font-medium rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-3 border-l border-border pl-3 space-y-1 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={(e) => handleNavigate(subItem.href, e)}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-foreground/90 font-medium rounded-lg hover:bg-primary/10 transition-colors"
                >
                  {item.name}
                </Link>
              ),
            )}

            <div className="pt-3 mt-2 border-t border-border space-y-3">
              <Link
                href="/angebot"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-3 rounded-md transition-colors"
              >
                Angebot anfragen
              </Link>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-1">
                <a href="tel:+491726316205" className="flex items-center gap-1.5 hover:text-primary">
                  <Phone className="w-4 h-4 text-primary" />
                  Anrufen
                </a>
                <a href="mailto:info@cleanvis.de" className="flex items-center gap-1.5 hover:text-primary">
                  <Mail className="w-4 h-4 text-primary" />
                  E-Mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
