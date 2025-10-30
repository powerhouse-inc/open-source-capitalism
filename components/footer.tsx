import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative px-4 py-12 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">© 2025 Powerhouse. Building the future of open networks.</div>

          <div className="flex items-center gap-6">
            <Link href="/sno" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
              SNO Explainer
            </Link>
            <Link href="/achra" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
              Achra
            </Link>
            <Link href="/connect" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
              Connect
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
