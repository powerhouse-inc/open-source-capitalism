import Link from "next/link"

export function TheStakes() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent backdrop-blur-sm shadow-[0_0_60px_rgba(6,182,212,0.1)]">
          {/* Accent left border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-400/0" />

          <div className="p-8 sm:p-10 pl-10 sm:pl-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-5">
              This is already happening
            </p>
            <p className="text-xl sm:text-2xl font-medium text-white leading-snug mb-5 max-w-[52ch]">
              OpenAI&apos;s acquisition of the OpenClaw team isn&apos;t the scandal — it&apos;s the symptom.
            </p>
            <p className="text-base text-white/70 leading-relaxed mb-5 max-w-[70ch]">
              Open source today lacks both sustainable incentives and organizations that can scale
              into real institutions. When the only competitive offer is a Big Tech comp package,
              that&apos;s not a talent problem — it&apos;s a structural one.
            </p>
            <p className="text-base text-white/60 leading-relaxed max-w-[70ch]">
              Open-Source Capitalism provides the missing economic layer: contributor equity, revenue
              sharing, and investable network structures that make staying independent actually viable.{" "}
              <Link
                href="https://scalablenetwork.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/40 hover:decoration-cyan-300 transition-colors"
              >
                Scalable Network Organizations
              </Link>{" "}
              provide the legal and operational structure to make it enforceable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
