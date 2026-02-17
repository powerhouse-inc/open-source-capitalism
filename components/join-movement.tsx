export function JoinMovement() {
  return (
    <section id="join-the-movement" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 leading-tight">Join the Movement</h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Open-source capitalism is a living framework. Follow Powerhouse to stay in the loop as we ship the tools and structures that make it real.
        </p>

        {/* Paragraph.com newsletter embed */}
        <div className="flex justify-center">
          <iframe
            src="https://paragraph.com/@powerhouse/embed?minimal=true"
            width="480"
            height="45"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "transparent", borderRadius: "8px" }}
            scrolling="no"
          />
        </div>
      </div>
    </section>
  )
}
