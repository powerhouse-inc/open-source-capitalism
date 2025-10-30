import { Card } from "@/components/ui/card"

export function HowItWorks() {
  const flows = [
    "Builders contribute code and receive POWt that represent future network revenue",
    "Investors fund OCFs that deploy capital to development",
    "Businesses monetize software through RGHs and return revenue shares",
    "DAOs oversee governance, brand, and treasury",
  ]

  return (
    <section id="how-it-works" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 leading-tight">How It Works</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {flows.map((flow, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-mono text-cyan-400">{index + 1}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{flow}</p>
              </div>
            ))}
          </div>

          <Card className="p-8 bg-card/30 backdrop-blur-sm border-cyan-500/10">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-sm font-mono text-cyan-400">
                  DAO
                </div>
                <div className="text-cyan-500/50">→</div>
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-sm font-mono text-purple-400">
                  Operational Hub
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-sm font-mono text-cyan-400">
                  OCF
                </div>
                <div className="text-cyan-500/50">↔</div>
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-sm font-mono text-purple-400">
                  RGH
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-sm font-mono text-cyan-400">
                  IP Entity
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center leading-relaxed pt-4 border-t border-border/50">
                Capital and contributions circulate through OCF, RGH, and Operational Hubs while DAO and IP entities
                keep direction and rights aligned.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
