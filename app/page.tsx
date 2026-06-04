import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { AITeamSection } from "@/components/ai-team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <div className="py-1 md:py-2">
            <ProblemSolutionSection />
          </div>
          <div className="py-1 md:py-2">
            <FeaturesSection />
          </div>
          <div className="py-1 md:py-2">
            <AITeamSection />
          </div>
          <div className="py-1 md:py-2">
            <TestimonialsSection />
          </div>
          <div className="py-1 md:py-2">
            <ROICalculatorSection />
          </div>
          <div className="py-1 md:py-2">
            <CTASection />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
