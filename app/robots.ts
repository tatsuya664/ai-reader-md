import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: '[https://urltomd-tool.vercel.app/sitemap.xml](https://urltomd-tool.vercel.app/sitemap.xml)', 
  }
}