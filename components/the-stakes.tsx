import Link from "next/link"

export function TheStakes() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm p-8 sm:p-10 shadow-[0_0_40px_rgba(6,182,212,0.08)]">
          {/* Subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />

          <div className="relative">
            <p className="text-xs font-medium tracking-wider uppercase text-cyan-400 mb-4">
              This is already happening
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              When OpenAI acqui-hired the OpenClaw robotics team, the open-source community that built the
              project got nothing. Years of contributions — absorbed by a platform, with no mechanism
              to share in the value they created.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              This is the pattern Open-Source Capitalism is designed to break. When contributors can earn
              equity-like stakes in the networks they build, value stays distributed — not extracted.{" "}
              <Link
                href="https://scalablenetworks.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
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
