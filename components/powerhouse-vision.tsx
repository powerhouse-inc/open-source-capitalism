import { Button } from "@/components/ui/button"

export function PowerhouseVision() {
  return (
    <section id="powerhouse-vision" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">The Powerhouse Vision</h2>

        <div className="space-y-6 mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch]">
            Open-Source Capitalism is the economic foundation of the Scalable Network Organization model. Powerhouse
            builds the software and legal systems that make this work, enabling decentralized operations, transparent
            capital flows, and sustainable growth for open networks.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-[85ch]">
            Achra connects builders, investors, and operators so open collaboration can scale like a business without
            losing its openness.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button
            variant="outline"
            className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all bg-transparent"
          >
            Explore SNOs
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all bg-transparent"
          >
            Launch an RGH or OCF
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all bg-transparent"
          >
            Explore on Achra
          </Button>
        </div>
      </div>
    </section>
  )
}
