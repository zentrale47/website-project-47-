"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
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
  { name: "Angebot", href: "/angebot" },
  { name: "Über uns", href: "/about" },
]

export function GlassmorphismNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const lastScrollY = useRef(0)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 100)

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        if (currentScrollY > 50) {
          if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
            setIsVisible(false)
          } else if (lastScrollY.current - currentScrollY > 5) {
            setIsVisible(true)
          }
        } else {
          setIsVisible(true)
        }

        lastScrollY.current = currentScrollY
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })

      return () => {
        window.removeEventListener("scroll", controlNavbar)
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setOpenDropdown(itemName)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const handleLinkClick = (href: string, e?: React.MouseEvent) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#")

      // If we're on a different page, navigate first
      if (path && window.location.pathname !== path) {
        window.location.href = href
        return
      }

      // If we're on the same page, scroll to section
      if (hash) {
        e?.preventDefault()
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const navbarHeight = 100
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }, 100)
      }
    } else {
      // For non-anchor links, scroll to top
      e?.preventDefault()
      window.location.href = href
      setTimeout(() => window.scrollTo(0, 0), 100)
    }
    setIsOpen(false)
    setOpenDropdown(null)
  }

  return (
    <>
      <nav
        className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 md:-translate-y-24 opacity-0"
        } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          transition: hasLoaded ? "all 0.5s ease-out" : "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Main Navigation */}
        <div className="w-[90vw] max-w-xs md:max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-4 py-3 md:px-6 md:py-2 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={(e) => handleLinkClick("/", e)}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <Image
                    src="/images/cleanvis-logo.png"
                    alt="CleanVis"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-green-600 transition-all duration-200 font-medium cursor-pointer flex items-center gap-1"
                        onClick={(e) => handleLinkClick(item.href, e)}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl py-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-sans text-sm"
                              onClick={(e) => handleLinkClick(subItem.href, e)}
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
                      className="text-gray-700 hover:text-green-600 hover:scale-105 transition-all duration-200 font-medium cursor-pointer"
                      onClick={(e) => handleLinkClick(item.href, e)}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>

              {/* Desktop CTA Button */}
              <div className="hidden md:block">
                <Link href="/contact" onClick={(e) => handleLinkClick("/contact", e)}>
                  <button className="relative bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group">
                    <span className="mr-2">Kontakt</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 hover:scale-110 transition-transform duration-200 cursor-pointer"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <div
            className={`fixed inset-0 transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
            style={{ top: "0", left: "0", right: "0", bottom: "0", zIndex: -1 }}
          />

          <div
            className={`mt-2 w-[90vw] max-w-xs mx-auto transition-all duration-500 ease-out transform-gpu ${
              isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div key={item.name}>
                      <button
                        onClick={() => {
                          if (openDropdown === item.name) {
                            setOpenDropdown(null)
                          } else {
                            setOpenDropdown(item.name)
                          }
                        }}
                        className="w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 py-3 transition-all duration-300 font-medium flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => handleLinkClick(subItem.href)}
                              className="block w-full text-left text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 py-2 text-sm"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => handleLinkClick(item.href)}
                      className="w-full text-left text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 py-3 transition-all duration-300 font-medium"
                    >
                      {item.name}
                    </button>
                  ),
                )}
                <div className="h-px bg-gray-200 my-2" />
                <button
                  onClick={() => handleLinkClick("/contact")}
                  className="w-full relative bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                >
                  <span className="mr-2">Kontakt</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
