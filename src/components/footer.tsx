import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 border-border/40 mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4 md:px-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by Md Asif Jawed. The source code is available on{" "}
          <Link
            href="https://github.com/yourusername/portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-foreground"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
