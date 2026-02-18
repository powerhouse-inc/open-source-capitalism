import Link from "next/link"

export function Header() {
  return (
    <>
      {/* Powerhouse logo - top left */}
      <header className="fixed top-0 left-0 z-50 p-6 sm:p-8 overflow-hidden">
        <Link
          href="https://www.powerhouse.io"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity hover:opacity-80"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/powerhouse-logo.svg"
            alt="Powerhouse"
            className="h-5 w-auto sm:h-6 max-w-[160px] sm:max-w-[180px]"
          />
        </Link>
      </header>

      {/* OSC logo - top right */}
      <div className="fixed top-0 right-0 z-50 p-6 sm:p-8 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/osc-logo.svg"
          alt="Open Source Capitalism"
          className="h-5 w-auto sm:h-6 max-w-[200px] sm:max-w-[250px]"
        />
      </div>
    </>
  )
}
