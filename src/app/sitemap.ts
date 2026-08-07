import type { MetadataRoute } from 'next';
import { constants } from '@/utils/constants';
import { holidays } from '@/app/lib/holiday';

export const dynamic = 'force-static';

const SITE_URL = 'https://timercountdown.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    '',
    '/pomodoro-timer',
    '/study-timer',
    '/shareable-countdown',
    '/days-until',
    '/white-noise/office',
    '/privacy-policy',
    '/terms-of-use',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  const timerPages = constants.durations.flatMap((duration) =>
    constants.timeUnits.map((unit) => ({
      url: `${SITE_URL}/timer/${duration}-${unit}-timer`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const holidayPages = Object.keys(holidays).map((slug) => ({
    url: `${SITE_URL}/days-until/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...timerPages, ...holidayPages];
}
