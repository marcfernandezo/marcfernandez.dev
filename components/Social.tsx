import { SOCIAL_LINKS } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export default function Social() {
  return (
    <div className="mt-3 flex gap-2">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-zinc-200/90 dark:bg-zinc-900/90
                    px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 "
        >
          {link.label}
          <ArrowUpRight size={12} className="ml-1" />
        </a>
      ))}
    </div>
  )
}
