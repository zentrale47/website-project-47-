"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Leistungen",
    links: [
      { title: "Unsere Leistungen", href: "/leistungen" },
      { title: "Büroreinigung", href: "/leistungen#buero" },
      { title: "Hausreinigung", href: "/leistungen#haus" },
      { title: "Gartenpflege", href: "/leistungen#garten" },
      { title: "Fensterreinigung", href: "/leistungen#fenster" },
      { title: "Enterprise", href: "/enterprise" },
    ],
  },
  {
    label: "Unternehmen",
    links: [
      { title: "Über uns", href: "/about" },
      { title: "Kontakt", href: "/contact" },
      { title: "Notfall-Service", href: "/notfall-service" },
      { title: "Angebot Anfordern", href: "/angebot" },
    ],
  },
  {
    label: "Social Media",
    links: [
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
]

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-gray-200 bg-white px-6 py-12 lg:py-16">
      <div className="bg-gray-200 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Link href="/">
            <Image
              src="/images/cleanvis-full-logo.png"
              alt="CleanVis Logo"
              width={320}
              height={107}
              className="h-32 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          <div className="text-gray-600 mt-8 text-sm md:mt-0 md:block hidden">
            <p>© {new Date().getFullYear()} CleanVis. Alle Rechte vorbehalten.</p>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs text-gray-900 font-semibold">{section.label}</h3>
                <ul className="text-gray-600 mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="hover:text-green-600 inline-flex items-center transition-all duration-300"
                        onClick={(e) => {
                          if (!link.href.includes("#") || link.href === "#") return
                          e.preventDefault()
                          const [path, hash] = link.href.split("#")
                          if (path && window.location.pathname !== path) {
                            window.location.href = link.href
                          } else if (hash) {
                            const element = document.getElementById(hash)
                            if (element) {
                              const navbarHeight = 100
                              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                              const offsetPosition = elementPosition - navbarHeight
                              window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                            }
                          }
                        }}
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-8 text-center space-y-2">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} CleanVis. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
