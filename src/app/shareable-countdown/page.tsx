import type { Metadata } from 'next';
import Link from 'next/link';
import ShareableCountdownClient from '@/components/ShareableCountdown';

export const metadata: Metadata = {
  title: 'Shareable Countdown Timer - Share Event Countdowns with Friends | TimerCountdown',
  description: 'Create a shareable countdown timer for any event and share the link with friends, family, or colleagues. Everyone sees the same live countdown in real-time.',
  keywords: ['shareable countdown', 'countdown timer to share', 'share event countdown', 'group countdown', 'shared timer', 'countdown link'],
  alternates: {
    canonical: '/shareable-countdown',
  },
  openGraph: {
    title: 'Shareable Countdown Timer - Share with Anyone',
    description: 'Create and share live countdowns for events with friends and family.',
    url: 'https://timercountdown.github.io/shareable-countdown',
  },
};

export default function ShareableCountdownPage() {
  return (
    <main className="py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-[#777777] mb-4">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#3a86ff]">Home</Link></li>
          <li>/</li>
          <li className="text-[#3a86ff]">Shareable Countdown</li>
        </ol>
      </nav>

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
                  { "@type": "ListItem", "position": 2, "item": { "@id": "https://timercountdown.github.io/shareable-countdown", "name": "Shareable Countdown" } }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does the shareable countdown work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Create a countdown for any date or event, then share the unique link with anyone. Everyone who opens the link sees the same live countdown in real-time, updating automatically."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I customize the countdown?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can set a custom event name, target date/time, and choose from various styles. The shared page shows your chosen configuration."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the shareable countdown free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, creating and sharing countdowns is completely free. No registration or sign-up is required."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Hero */}
      <section className="text-center my-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">🔗 Shareable Countdown Timer</h1>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto mb-6">
          Create a countdown for any event and share it with friends, family, or colleagues. Everyone sees the same live timer in real-time.
        </p>
      </section>

      {/* Main Tool */}
      <section className="bg-white rounded-xl shadow-lg p-6 md:p-10 my-6 border border-gray-100">
        <ShareableCountdownClient />
      </section>

      {/* Use Cases */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Perfect For Every Occasion</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-5 shadow text-center border border-gray-100">
            <div className="text-3xl mb-2">🎂</div>
            <h3 className="font-bold mb-1">Birthdays</h3>
            <p className="text-sm text-[#555555]">Count down to someone's special day</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow text-center border border-gray-100">
            <div className="text-3xl mb-2">💍</div>
            <h3 className="font-bold mb-1">Weddings</h3>
            <p className="text-sm text-[#555555]">Share the wedding countdown with guests</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow text-center border border-gray-100">
            <div className="text-3xl mb-2">🎄</div>
            <h3 className="font-bold mb-1">Holidays</h3>
            <p className="text-sm text-[#555555]">Build excitement for festive dates</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow text-center border border-gray-100">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-bold mb-1">Graduation</h3>
            <p className="text-sm text-[#555555]">Share milestones with classmates</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="my-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl text-[#3a86ff]">1</div>
            <h3 className="font-bold mb-2">Create Your Countdown</h3>
            <p className="text-sm text-[#555555]">Enter an event name and target date</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl text-[#3a86ff]">2</div>
            <h3 className="font-bold mb-2">Copy the Link</h3>
            <p className="text-sm text-[#555555]">Get your unique shareable link</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-xl text-[#3a86ff]">3</div>
            <h3 className="font-bold mb-2">Share Anywhere</h3>
            <p className="text-sm text-[#555555]">Send via text, email, or social media</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold mb-2">⚡ Real-time Updates</h3>
            <p className="text-sm text-[#555555]">The countdown updates live as time passes for everyone viewing.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold mb-2">📱 Mobile Friendly</h3>
            <p className="text-sm text-[#555555]">Looks great on any device — phone, tablet, or desktop.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold mb-2">🎨 Customizable</h3>
            <p className="text-sm text-[#555555]">Choose colors, styles, and event names to match your occasion.</p>
          </div>
        </div>
      </section>

      {/* Related Countdowns */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Countdowns</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/days-until/christmas" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">🎄 Christmas</h3>
            <p className="text-sm text-[#555555]">Days until Christmas</p>
          </Link>
          <Link href="/days-until/newyear" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">🎊 New Year</h3>
            <p className="text-sm text-[#555555]">Days until New Year's</p>
          </Link>
          <Link href="/days-until" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">📅 All Events</h3>
            <p className="text-sm text-[#555555]">Browse all countdowns</p>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-center text-white my-8">
        <h2 className="text-2xl font-bold mb-3">Start sharing your countdown today!</h2>
        <p className="mb-5 text-purple-100">Create a beautiful countdown and share it with anyone. It's free and takes seconds.</p>
        <a
          href="#countdown-config"
          className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all"
        >
          Create Your Countdown →
        </a>
      </section>
    </main>
  );
}
