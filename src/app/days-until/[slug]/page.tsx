import HolidayPageClient from "./page-client";
import { holidays } from '@/app/lib/holiday';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const HOLIDAY_EMOJI: Record<string, string> = {
  newyear: '🎉', easter: '🐰', memorialday: '👷', thanksgiving: '🦃',
  christmas: '🎄', halloween: '🎃', valentines: '❤️', spring: '🌱',
  summer: '☀️', fall: '🍂', winter: '❄️', wintersolstice: '❄️',
  ramadan: '☪️', holi: '🌿', labor: '💪', palmsunday: '🌴'
};

export default async function HolidayPage({ params }) {
  const xparams = await params;
  const holiday = holidays[xparams.slug];

  if (!holiday) {
    notFound();
  }

  const nextDate = holiday.getNextDate();
  const formattedDate = nextDate.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  const daysUntil = Math.floor((nextDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://timercountdown.github.io/",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://timercountdown.github.io/days-until",
              "name": "Days Until"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": `https://timercountdown.github.io/days-until/${xparams.slug}`,
              "name": holiday.name
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How many days until ${holiday.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `There are currently ${daysUntil} days remaining until ${holiday.name} on ${formattedDate}.`
            }
          },
          {
            "@type": "Question",
            "name": `When is ${holiday.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${holiday.name} is celebrated on ${formattedDate}.`
            }
          },
          {
            "@type": "Question",
            "name": `What is the significance of ${holiday.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": holiday.description
            }
          },
          {
            "@type": "Question",
            "name": "Can I create a custom countdown for this event?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, use our Shareable Countdown tool to create and share a personalized countdown for any event."
            }
          }
        ]
      },
      {
        "@type": "Event",
        "name": holiday.name,
        "startDate": formattedDate,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "description": holiday.description,
        "url": `https://timercountdown.github.io/days-until/${xparams.slug}`
      }
    ]
  };

  const relatedTimers = [
    { href: '/pomodoro-timer', label: 'Pomodoro Timer', emoji: '🍅' },
    { href: '/study-timer', label: 'Study Timer', emoji: '📚' },
    { href: '/shareable-countdown', label: 'Shareable Countdown', emoji: '🔗' },
    { href: '/timer/5-minute-timer', label: '5 Min Timer', emoji: '⏱' },
  ];

  return (
    <main className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <nav aria-label="Breadcrumb" className="text-sm text-[#777777] mb-4">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-[#3a86ff]">Home</Link></li>
            <li>/</li>
            <li><Link href="/days-until" className="hover:text-[#3a86ff]">Days Until</Link></li>
            <li>/</li>
            <li className="text-[#3a86ff]">{holiday.name}</li>
          </ol>
        </nav>

        <HolidayPageClient params={xparams} />

        <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Boost Your Productivity</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {relatedTimers.map(rt => (
              <Link key={rt.href} href={rt.href} className="bg-white rounded-lg p-5 shadow no-underline block text-center hover:shadow-lg transition-all">
                <div className="text-3xl mb-2">{rt.emoji}</div>
                <h3 className="font-bold text-lg text-[#2b2d42] mb-1">{rt.label}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Want your own countdown?</h2>
          <p className="text-[#555555] mb-5">Create a custom countdown and share it with friends and family.</p>
          <Link href="/shareable-countdown" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all">
            Create Custom Countdown →
          </Link>
        </section>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(holidays).map(d => ({ slug: `${d}` }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (!holidays[slug]) {
    return {
      title: 'Holiday Not Found',
      description: 'The requested holiday countdown was not found.',
    };
  }

  const holiday = holidays[slug];
  const nextDate = holiday.getNextDate();
  const formattedDate = nextDate.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const now = new Date();
  const daysUntil = Math.floor((nextDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  return {
    title: `How Many Days Until ${holiday.name}? (${daysUntil} Days Left) | TimerCountdown`,
    description: `Countdown to ${holiday.name} on ${formattedDate}. Find out exactly how many days, hours, minutes, and seconds remain. Live countdown timer with real-time updates.`,
    keywords: [
      `how many days until ${holiday.name.toLowerCase()}`,
      `${holiday.name.toLowerCase()} countdown`,
      `days until ${holiday.name.toLowerCase()}`,
      `${holiday.name.toLowerCase()} ${nextDate.getFullYear()}`,
      'holiday countdown',
      'event countdown'
    ],
    alternates: {
      canonical: `/days-until/${slug}`,
    },
    openGraph: {
      title: `How Many Days Until ${holiday.name}? (${daysUntil} Days Left)`,
      description: `Live countdown to ${holiday.name} on ${formattedDate}. Real-time updates.`,
      type: 'article',
      url: `https://timercountdown.github.io/days-until/${slug}`,
    },
  };
}
