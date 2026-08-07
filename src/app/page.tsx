import type { Metadata } from 'next';
import Link from 'next/link';
import { holidays } from './lib/holiday';

export const metadata: Metadata = {
  title: 'Free Online Timers & Countdowns — Pomodoro, Study, Event | TimerCountdown',
  description: 'Free online countdown timers, Pomodoro timers, study timers, and event countdowns. Easy to use, no sign-up required. Start timing in seconds with audio alerts, fullscreen mode, and more.',
  keywords: ['online countdown timer', 'free online timer', 'pomodoro timer', 'study timer', 'focus timer', 'days until', 'event countdown', 'white noise generator', 'visual timer', 'countdown timer to share'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TimerCountdown — Free Online Timers & Countdowns',
    description: 'Free online countdown timers, Pomodoro timers, and event countdowns. Simple, reliable, and completely free.',
    type: 'website',
    url: 'https://timercountdown.github.io/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TimerCountdown — Free Online Timers & Countdowns',
    description: 'Free online countdown timers, Pomodoro timers, and event countdowns.',
  },
};

const now = new Date();

const christmasDays = Math.floor((holidays['christmas'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
const newyearDays = Math.floor((holidays['newyear'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
const ramadanDays = Math.floor((holidays['ramadan'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

const countdowns = [
  { slug: 'christmas', name: 'Christmas', emoji: '🎄', days: christmasDays },
  { slug: 'newyear', name: 'New Year', emoji: '🎊', days: newyearDays },
  { slug: 'ramadan', name: 'Ramadan', emoji: '🌙', days: ramadanDays },
  { slug: 'easter', name: 'Easter', emoji: '🐰', days: Math.floor((holidays['easter'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) },
  { slug: 'thanksgiving', name: 'Thanksgiving', emoji: '🦃', days: Math.floor((holidays['thanksgiving'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) },
  { slug: 'halloween', name: 'Halloween', emoji: '🎃', days: Math.floor((holidays['halloween'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) },
];

const popularTimers = [
  { slug: '5-minute-timer', label: '5 Min' },
  { slug: '10-minute-timer', label: '10 Min' },
  { slug: '15-minute-timer', label: '15 Min' },
  { slug: '25-minute-timer', label: '25 Min' },
  { slug: '30-minute-timer', label: '30 Min' },
  { slug: '45-minute-timer', label: '45 Min' },
  { slug: '60-minute-timer', label: '60 Min' },
  { slug: '90-minute-timer', label: '90 Min' },
  { slug: '120-minute-timer', label: '120 Min' },
  { slug: '90-second-timer', label: '90 Sec' },
  { slug: '35-second-timer', label: '35 Sec' },
  { slug: '120-second-timer', label: '120 Sec' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://timercountdown.github.io/#organization",
                "name": "TimerCountdown",
                "url": "https://timercountdown.github.io/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://timercountdown.github.io/favicon.ico",
                  "width": "256",
                  "height": "256"
                },
                "description": "Free online countdown timers and event countdowns for any purpose."
              },
              {
                "@type": "WebSite",
                "@id": "https://timercountdown.github.io/#website",
                "url": "https://timercountdown.github.io/",
                "name": "TimerCountdown",
                "description": "Free online countdown timers, Pomodoro timers, study timers, and event countdowns.",
                "publisher": {
                  "@id": "https://timercountdown.github.io/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://timercountdown.github.io/timer/{timer-duration}",
                  "query-input": "timer duration"
                }
              },
              {
                "@type": "SoftwareApplication",
                "name": "TimerCountdown",
                "applicationCategory": "WebApplication",
                "operatingSystem": "All",
                "offers": {
                  "@type": "Offer",
                  "category": "free",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "253",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://timercountdown.github.io/#faqpage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is TimerCountdown free to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TimerCountdown is completely free to use with no ads interrupting your focus or workflow."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does TimerCountdown work on mobile devices?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, TimerCountdown is fully responsive and works on all devices including smartphones, tablets, and desktop computers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What types of timers are available?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer minute timers, second timers, hour timers, day timers, Pomodoro timers, study timers, shareable countdowns, and event countdowns for holidays and special occasions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I share a countdown timer with others?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our shareable countdown timer allows you to create a timer and share it via a link. Everyone who opens the link sees the same live countdown in real-time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I use a countdown timer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Simply choose the timer duration you need, click start, and the countdown begins. You can pause, reset, or let it run to completion with an audio alarm."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://timercountdown.github.io/#breadcrumblist",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@id": "https://timercountdown.github.io/",
                      "name": "Home"
                    }
                  }
                ]
              },
              {
                "@type": "HowTo",
                "name": "How to Use TimerCountdown",
                "description": "Learn how to use our free online timers and countdowns in three simple steps.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Choose Your Timer",
                    "text": "Browse our collection of timers by duration or use case — Pomodoro, study, cooking, workouts, or events."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Start the Countdown",
                    "text": "Click the start button to begin your timer. The progress bar and large display show remaining time at a glance."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Get Alerted When Done",
                    "text": "When the timer reaches zero, an audio alarm sounds to notify you. You can also use fullscreen mode for visibility."
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="bg-white text-[#2b2d42] leading-normal">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-10 my-6 md:my-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#2b2d42]">
            Free Online Timers & Countdowns
          </h1>
          <p className="text-lg md:text-xl text-[#555555] mb-6 max-w-2xl mx-auto">
            Simple, reliable countdowns for cooking, studying, workouts, events, and more. No downloads, no sign-up — start in seconds.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <Link href="/timer/5-minute-timer" className="bg-[#3a86ff] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-base">
              ⏱ Start 5-Min Timer
            </Link>
            <Link href="/pomodoro-timer" className="bg-[#ff6b6b] text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 hover:shadow-lg transition-all duration-300 text-base">
              🍅 Pomodoro Timer
            </Link>
            <Link href="/study-timer" className="bg-[#06d6a0] text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 hover:shadow-lg transition-all duration-300 text-base">
              📚 Study Timer
            </Link>
            <Link href="/shareable-countdown" className="bg-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-600 hover:shadow-lg transition-all duration-300 text-base">
              🔗 Share Countdown
            </Link>
          </div>
          <p className="text-sm text-[#777777]">
            ✅ No sign-up required &nbsp;|&nbsp; ✅ Works on all devices &nbsp;|&nbsp; ✅ Free forever
          </p>
        </div>

        {/* Two Main Features */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 my-10">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-center">Minute & Second Timers</h2>
            <div className="h-2 bg-gray-200 rounded-full mb-4">
              <div className="h-full bg-[#3a86ff] rounded-full w-full"></div>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-[#3a86ff] my-4 text-center font-mono">05:00</div>
            <div className="flex justify-center gap-3 mb-4">
              <Link href="/timer/5-minute-timer" className="bg-[#3a86ff] text-white font-bold py-2 px-5 rounded-full hover:shadow-lg transition-all text-sm">Use Full Timer</Link>
            </div>
            <p className="text-[#555555] text-center text-sm mb-4">Perfect for cooking, workouts, studying, and more</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularTimers.slice(0, 6).map(t => (
                <Link key={t.slug} href={`/timer/${t.slug}`} className="text-xs bg-blue-50 text-[#3a86ff] px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">{t.label}</Link>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-center">Days Until Events</h2>
            <div className="text-5xl md:text-6xl font-bold text-green-600 my-4 text-center font-mono">
              {christmasDays}
            </div>
            <div className="text-lg text-center font-semibold text-green-700 mb-4">Days Until Christmas 🎄</div>
            <div className="flex justify-center gap-3 mb-4">
              <Link href="/days-until/christmas" className="bg-green-600 text-white font-bold py-2 px-5 rounded-full hover:shadow-lg transition-all text-sm">View Full Countdown</Link>
            </div>
            <p className="text-[#555555] text-center text-sm mb-4">Track days until holidays and special events</p>
            <div className="flex flex-wrap justify-center gap-2">
              {countdowns.slice(0, 4).map(c => (
                <Link key={c.slug} href={`/days-until/${c.slug}`} className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors">
                  {c.emoji} {c.name}
                </Link>
              ))}
              <Link href="/days-until" className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors">More →</Link>
            </div>
          </div>
        </div>

        {/* Featured Tools */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 md:p-8 my-8">
          <h2 className="text-2xl font-bold text-center mb-6">🔧 Featured Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/pomodoro-timer" className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition-all no-underline block">
              <div className="text-3xl mb-2">🍅</div>
              <h3 className="font-bold text-lg text-[#2b2d42] mb-1">Pomodoro Timer</h3>
              <p className="text-sm text-[#555555]">25/5 work-break cycles with focus music</p>
            </Link>
            <Link href="/study-timer" className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition-all no-underline block">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-bold text-lg text-[#2b2d42] mb-1">Study Timer</h3>
              <p className="text-sm text-[#555555]">Study sessions with Pomodoro + lo-fi beats</p>
            </Link>
            <Link href="/shareable-countdown" className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition-all no-underline block">
              <div className="text-3xl mb-2">🔗</div>
              <h3 className="font-bold text-lg text-[#2b2d42] mb-1">Shareable Countdown</h3>
              <p className="text-sm text-[#555555]">Create & share live countdowns with anyone</p>
            </Link>
          </div>
        </div>

        {/* Why Use TimerCountdown? */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-[#2b2d42] mb-6 text-center">Why Use TimerCountdown?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 shadow border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-[#2b2d42] mb-2">⚡ Easy to Use</h3>
              <p className="text-[#555555] text-sm">No downloads or sign-ups. Start with one click.</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-[#2b2d42] mb-2">🔔 Visual & Audio Alerts</h3>
              <p className="text-[#555555] text-sm">Progress bar + audio notifications when time ends.</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-[#2b2d42] mb-2">🎯 100% Free</h3>
              <p className="text-[#555555] text-sm">No ads, no tracking, no limitations.</p>
            </div>
          </div>
        </div>

        {/* Popular Timers Grid */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-[#2b2d42] mb-6 text-center">Popular Timers</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {popularTimers.slice(0, 9).map(t => (
              <Link key={t.slug} href={`/timer/${t.slug}`} className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline border border-gray-100">
                <h3 className="text-xl font-bold text-[#3a86ff] mb-2">{t.label} Timer</h3>
                <p className="text-sm text-[#555555]">Free online countdown with alarm</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Event Countdowns */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-[#2b2d42] mb-6 text-center">Event Countdowns</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {countdowns.slice(0, 3).map(c => (
              <Link key={c.slug} href={`/days-until/${c.slug}`} className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline border border-gray-100">
                <h3 className="text-xl font-bold text-green-600 mb-2">{c.emoji} {c.name}</h3>
                <div className="text-3xl font-bold text-green-700 my-2">{c.days}</div>
                <p className="text-sm text-[#555555]">Days until {c.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* White Noise CTA */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 my-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-5xl">🔊</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">Boost Productivity with White Noise</h2>
              <p className="text-[#555555] text-sm">Mask office distractions and focus better with our free white noise generator.</p>
            </div>
            <Link href="/white-noise/office" className="bg-[#3a86ff] text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all whitespace-nowrap">
              Try it Free
            </Link>
          </div>
        </div>

        {/* Use Cases */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-[#2b2d42] mb-6 text-center">Perfect For Any Activity</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            <Link href="/timer/5-minute-timer" className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-all no-underline block">
              <h4 className="text-[#3a86ff] font-bold mb-1">🍳 Cooking</h4>
              <p className="text-[#555555] text-xs">Time recipes perfectly</p>
            </Link>
            <Link href="/timer/5-minute-timer" className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-all no-underline block">
              <h4 className="text-[#3a86ff] font-bold mb-1">💪 Workouts</h4>
              <p className="text-[#555555] text-xs">HIIT intervals & rest</p>
            </Link>
            <Link href="/pomodoro-timer" className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-all no-underline block">
              <h4 className="text-[#3a86ff] font-bold mb-1">📚 Studying</h4>
              <p className="text-[#555555] text-xs">Pomodoro technique</p>
            </Link>
            <Link href="/shareable-countdown" className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-all no-underline block">
              <h4 className="text-[#3a86ff] font-bold mb-1">📅 Events</h4>
              <p className="text-[#555555] text-xs">Holidays & weddings</p>
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#3a86ff] rounded-xl p-6 md:p-8 my-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Timing?</h2>
          <p className="mb-5 text-blue-100">Join thousands of users who trust TimerCountdown for their daily timing needs.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/timer/5-minute-timer" className="bg-white text-[#3a86ff] font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all">
              Start Timer Now →
            </Link>
            <Link href="/pomodoro-timer" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
              Try Pomodoro Timer
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
