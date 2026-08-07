import HolidayPageClient from "./page-client";
import Link from 'next/link';
import { holidays } from '@/app/lib/holiday';
import { notFound } from 'next/navigation';

const HolidayPage: React.FC = async () => {
  const holidayList = Object.entries(holidays).map(([slug, h]) => {
    const nextDate = h.getNextDate();
    const daysUntil = Math.floor((nextDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return { slug, name: h.name, emoji: h.emoji, daysUntil };
  }).sort((a, b) => a.daysUntil - b.daysUntil);

  return (
    <main className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "item": { "@id": "https://timercountdown.github.io/", "name": "Home" } },
                  { "@type": "ListItem", "position": 2, "item": { "@id": "https://timercountdown.github.io/days-until", "name": "Days Until" } }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the next holiday?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Find out exactly how many days until each major holiday and special event." }
                  },
                  {
                    "@type": "Question",
                    "name": "Are these countdowns accurate?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes, all countdowns are calculated accurately based on the current date and time." }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I set up a custom countdown?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes, use our Shareable Countdown tool to create and share custom countdowns for any event." }
                  }
                ]
              }
            ]
          })
        }}
      />

      <section className="text-center my-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">📅 Days Until Holidays & Events</h1>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto">
          Track countdowns to major holidays and special occasions. Find out exactly how many days remain.
        </p>
      </section>

      {/* Holiday Grid */}
      <section className="grid md:grid-cols-3 gap-4 my-8">
        {holidayList.map(h => (
          <Link 
            key={h.slug} 
            href={`/days-until/${h.slug}`}
            className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline border border-gray-100"
          >
            <div className="text-4xl mb-2">{h.emoji}</div>
            <h3 className="font-bold text-lg text-green-700 mb-1">{h.name}</h3>
            <div className="text-3xl font-bold text-green-600 my-2">{h.daysUntil}</div>
            <p className="text-sm text-[#555555]">days remaining</p>
          </Link>
        ))}
      </section>

      {/* CTA to Create Custom Countdown */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 md:p-8 my-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Have your own event to countdown to?</h2>
        <p className="text-[#555555] mb-5">Create a custom countdown and share it with friends and family.</p>
        <Link href="/shareable-countdown" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all">
          Create Custom Countdown →
        </Link>
      </section>

      {/* Related Tools */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">More Timer Tools</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/pomodoro-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline border border-gray-100">
            <h3 className="font-bold text-lg mb-1">🍅 Pomodoro Timer</h3>
            <p className="text-sm text-[#555555]">Boost productivity with focus cycles</p>
          </Link>
          <Link href="/study-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline border border-gray-100">
            <h3 className="font-bold text-lg mb-1">📚 Study Timer</h3>
            <p className="text-sm text-[#555555]">Perfect for deep study sessions</p>
          </Link>
          <Link href="/timer/5-minute-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline border border-gray-100">
            <h3 className="font-bold text-lg mb-1">⏱ Minute Timers</h3>
            <p className="text-sm text-[#555555]">Any duration you need</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export async function generateMetadata() {
  return {
    title: 'Days Until Holidays - Countdown to Every Major Holiday',
    description: 'Track countdowns to Christmas, New Year, Easter, Ramadan, and other holidays. Find out exactly how many days remain until your favorite events.',
    keywords: ['days until christmas', 'days until new year', 'holiday countdown', 'days until holidays', 'event countdown 2025'],
    alternates: {
      canonical: '/days-until',
    },
    openGraph: {
      title: 'Days Until Holidays & Events',
      description: 'Countdown to every major holiday. Find out exactly how many days remain.',
      url: 'https://timercountdown.github.io/days-until',
    },
  };
}

export default HolidayPage;
