import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="relative px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-8 text-xs font-mono font-medium tracking-wider uppercase bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
          Explainer
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-8 leading-[1.1]">
          Open-Source Capitalism
        </h1>

        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Open-source capitalism merges free-market dynamics with the transparency and collaboration of open-source
            software. It makes open networks financially sustainable so building for the common good becomes profitable
            and scalable.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed text-pretty">
            By aligning markets with the commons, it rewards those who create, maintain, and share.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-medium shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
          >
            Join the community
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all bg-transparent"
          >
            Explore on Achra
          </Button>
        </div>

        <Card className="max-w-3xl mx-auto p-6 bg-card/50 backdrop-blur-sm border-cyan-500/20">
          <div className="text-xs font-mono font-medium tracking-wider uppercase text-cyan-400 mb-4">TL;DR</div>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
              <span>Investable open networks</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
              <span>Profits flow back to contributors</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
              <span>Commercial paths that fund the commons</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
