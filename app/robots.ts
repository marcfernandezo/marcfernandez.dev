import type { MetadataRoute } from 'next'
import { URL } from '@/lib/data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}