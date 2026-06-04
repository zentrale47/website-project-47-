import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Sparkles, Home, Building2, Trees, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-white">
      <GlassmorphismNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Unsere Leistungen</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professionelle Reinigung für <span className="text-green-600">jeden Bedarf</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Von der Büroreinigung bis zur Gartenpflege – CleanVis bietet maßgeschneiderte Lösungen für Privat- und
            Geschäftskunden in München.
          </p>
        </div>
      </section>

      {/* Büroreinigung Section */}
      <section id="buero" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                <Building2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Büroreinigung</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Saubere Büros für produktive Teams</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Professionelle Büroreinigung für Unternehmen jeder Größe. Wir sorgen für eine hygienische und einladende
                Arbeitsumgebung, damit sich Ihre Mitarbeiter wohlfühlen und produktiv arbeiten können.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Tägliche oder wöchentliche Reinigung nach Ihrem Zeitplan</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Desinfektion von Arbeitsflächen und Sanitäranlagen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Müllentsorgung und Recycling-Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Flexible Reinigungszeiten außerhalb der Geschäftszeiten</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Leistungsumfang</h3>
              <ul className="space-y-3">
                <li>✓ Staubsaugen und Wischen aller Böden</li>
                <li>✓ Reinigung von Schreibtischen und Oberflächen</li>
                <li>✓ Küchen- und Pausenraumreinigung</li>
                <li>✓ Sanitärreinigung und -desinfektion</li>
                <li>✓ Fensterreinigung (auf Anfrage)</li>
                <li>✓ Teppichreinigung (auf Anfrage)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hausreinigung Section */}
      <section id="haus" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Leistungsumfang</h3>
              <ul className="space-y-3">
                <li>✓ Grundreinigung aller Räume</li>
                <li>✓ Küchen- und Badreinigung</li>
                <li>✓ Staubwischen und Bodenpflege</li>
                <li>✓ Fensterreinigung innen und außen</li>
                <li>✓ Airbnb-Zwischenreinigung</li>
                <li>✓ Umzugsreinigung</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                <Home className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Hausreinigung</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ihr Zuhause in besten Händen</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Gründliche Hausreinigung für Privathaushalte und Airbnb-Unterkünfte. Von der regelmäßigen Pflege bis zur
                Grundreinigung – wir sorgen dafür, dass Sie sich in Ihrem Zuhause rundum wohlfühlen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Schnelle Zwischenreinigung für Airbnb zwischen Gästen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Regelmäßige Reinigung nach Ihrem Wunschrhythmus</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Umweltfreundliche Reinigungsmittel</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Vertrauenswürdiges und geschultes Personal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gartenpflege Section */}
      <section id="garten" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                <Trees className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Gartenpflege</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ihr Garten in voller Pracht</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Professionelle Gartenreinigung und -pflege für gepflegte Außenbereiche. Wir kümmern uns um Terrassen,
                Wege, Rasenflächen und sorgen dafür, dass Ihr Garten das ganze Jahr über einladend aussieht.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Terrassen- und Wegesäuberung</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Laubentfernung und Unkrautbekämpfung</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Hochdruckreinigung von Steinplatten</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Saisonale Gartenpflege</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Leistungsumfang</h3>
              <ul className="space-y-3">
                <li>✓ Rasenpflege und Mähen</li>
                <li>✓ Heckenschnitt und Formschnitt</li>
                <li>✓ Unkrautentfernung</li>
                <li>✓ Laubbeseitigung</li>
                <li>✓ Terrassen- und Wegesäuberung</li>
                <li>✓ Hochdruckreinigung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fensterreinigung Section */}
      <section id="fenster" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Leistungsumfang</h3>
              <ul className="space-y-3">
                <li>✓ Fensterreinigung innen und außen</li>
                <li>✓ Rahmen- und Fensterbankreinigung</li>
                <li>✓ Streifenfreier Glanz</li>
                <li>✓ Auch für schwer erreichbare Fenster</li>
                <li>✓ Regelmäßige Wartungsverträge</li>
                <li>✓ Gewerbliche Glasfassaden</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                <Droplets className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Fensterreinigung</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kristallklare Aussichten</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Professionelle Fensterreinigung für Privat- und Geschäftskunden. Streifenfreier Glanz für alle
                Fenstergrößen und -arten. Wir sorgen für klare Sicht und mehr Licht in Ihren Räumen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Professionelle Reinigung ohne Streifen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Auch für schwer zugängliche Fenster</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Umweltfreundliche Reinigungsmittel</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Flexible Terminvereinbarung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Bereit für professionelle Reinigung?</h2>
          <p className="text-xl text-green-50 mb-8 leading-relaxed">
            Kontaktieren Sie uns für ein unverbindliches Angebot oder buchen Sie direkt einen Termin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/angebot">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
                Angebot anfordern
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-full bg-transparent"
              >
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
