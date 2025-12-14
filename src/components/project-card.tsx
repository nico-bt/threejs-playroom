import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function ProjectCard({ title, description, image, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="card block overflow-hidden rounded-lg border border-border bg-card hover:border-foreground/20"
    >
      <article className="flex flex-col gap-6 sm:flex-row">
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-muted sm:aspect-4/3 sm:w-72">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover border-none"
          />
        </div>

        <div className="flex flex-1 items-start justify-between gap-4 p-5 md:p-6 md:pl-0">
          <div className="flex-1">
            <h2 className="mb-2 text-xl font-medium text-foreground">{title}</h2>
            <p className="text-base text-muted-foreground whitespace-pre-line li">{description}</p>
          </div>

          <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        </div>
      </article>
    </Link>
  )
}
