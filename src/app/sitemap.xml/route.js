import { constants } from '@/utils/constants';
import { NextResponse } from 'next/server';
import { holidays } from '../lib/holiday';

 
export async function GET() {
  const urls = [];
  constants.timeUnits.forEach(unit => (
    constants.durations.forEach(d => (
      urls.push({
        "url": `${constants.domain}/timer/${d}-${unit}-timer`,
        "lastModified": new Date().toISOString(),
        "changeFrequency": 'daily',
        "priority": 1,
      })
    ))
  ));
  

  Object.keys(holidays).forEach(holiday =>{
    urls.push({
      "url": `${constants.domain}/days-until/${holiday}`,
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
      </url>`}).join('')}
    </urlset>`;


    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
}

export const dynamic = "force-static";