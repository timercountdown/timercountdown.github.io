import { constants } from '@/utils/constants';
import { NextResponse } from 'next/server';

 
export async function GET() {
  const durations = constants.durations;
  const urls = [];
  durations.forEach(duration =>{
    urls.push({
      "url": `${constants.domain}/timer/${duration}-minute-timer`,
      "lastModified": new Date().toISOString(),
      "changeFrequency": 'daily',
      "priority": 1,
    })
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url =>{return `<url>
        <loc>${url.url}</loc>
        <lastmod>${url.lastModified}</lastmod>
        <changefreq>${url.changeFrequency}</changefreq>
        <priority>${url.priority}</priority>
      </url>`})}
    </urlset>`;


    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
}

export const dynamic = "force-static";