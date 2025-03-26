type Project = {
  icon: string
  title: string
  description: string
  link: string
  repository: string
  technologies?: string[]
}

type WorkExperience = {
  company: string
  position: string
  description: string
  date: string
  link: string
  id: string
}

type SocialLinks = {
  label: string
  href: string
}

export const FEATURED_PROJECTS: Project[] = [
  {
    icon: "/assets/reactui-icon.png",
    title: "@react-svex",
    description: "✨ A collection of React UI components and icons.",
    link: "https://github.com/marrcoz/react-svex",
    repository: "https://github.com/marrcoz/react-svex",
  },
  {
    icon: "/assets/nestcord-icon.webp",
    title: "Nestcord",
    description: "🚀 A social media built with Next.js, made for a school project",
    link: "https://nestcord.vercel.app/",
    repository: "https://github.com/nestcord",
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Bdr Informática y Comunicaciones, SL",
    position: "IT Technician",
    description:
      "I provided IT consulting, custom software development, technical support, network solutions, and cybersecurity services. My role involved maintaining and securing IT infrastructure and equipment to ensure optimal performance and security.",
    date: "Jan. 2024 — Feb. 2025",
    link: "https://bdrinformatica.com/",
    id: "1",
  },
]

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    label: "GitHub",
    href: "https://github.com/marcfernandezo",
  },
  {
    label: "Twitter",
    href: "https://x.com/marcfernandezo1",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcfernandezo/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/marco.8k/",
  },
]

export const EMAIL = "marc.fernandezo@hotmail.com"

export const URL = "https://marcfernandez.dev"