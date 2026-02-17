import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JoinMovement() {
  return (
    <section id="join-the-movement" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">Join the Movement</h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Open-source capitalism is a living framework. Follow Powerhouse to stay in the loop as we ship the tools and structures that make it real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://scalablenetwork.org" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all bg-transparent"
            >
              Explore Scalable Network Organizations
            </Button>
          </Link>
          <Link href="https://achra.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all bg-transparent"
            >
              Explore Achra
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
