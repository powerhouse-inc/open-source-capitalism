import { Button } from "@/components/ui/button"

export function JoinMovement() {
  return (
    <section id="join-the-movement" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">Join the Movement</h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-[85ch] mx-auto">
          This is about reclaiming the commons and realigning incentives. It is not charity. It is a better system for
          innovation, ownership, and growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            Get early access
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all bg-transparent"
          >
            Talk to Powerhouse
          </Button>
        </div>
      </div>
    </section>
  )
}
