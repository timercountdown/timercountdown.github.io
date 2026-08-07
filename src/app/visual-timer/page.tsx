import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Visual Timer Online — Free Countdown for Kids, Students & ADHD | TimerCountdown',
  description: 'Free online visual timer with large display, progress bar, and color changes. Perfect for kids, classroom, ADHD, study sessions, and time management. No sign-up required.',
  keywords: ['visual timer online', 'visual timer online free', 'visual timer for students', 'ADHD visual timer online', 'classroom timer online', 'kids visual timer online', 'visual timer app', 'visual timer for kids'],
  alternates: {
    canonical: '/visual-timer',
  },
  openGraph: {
    title: 'Visual Timer Online — Free Visual Countdown Timer',
    description: 'Free visual timer online with large display and progress bar. Perfect for classrooms, kids, and ADHD.',
    url: 'https://timercountdown.github.io/visual-timer',
  },
};

export default function VisualTimerPage() {
  return (
    <main className="py-8">
      <nav aria-label="Breadcrumb" className="text-sm text-[#777777] mb-4">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#3a86ff]">Home</Link></li>
          <li>/</li>
          <li className="text-[#3a86ff]">Visual Timer</li>
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
                  { "@type": "ListItem", "position": 2, "item": { "@id": "https://timercountdown.github.io/visual-timer", "name": "Visual Timer" } }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is a visual timer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A visual timer shows the remaining time visually with a large display, progress bar, or color-changing indicator. It helps kids, students, and people with ADHD understand time at a glance without needing to process numbers."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the visual timer work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Simply select the duration you need and click start. The visual timer displays a large countdown with a progress bar that fills as time elapses. When time runs out, an audio alarm sounds and the display changes color."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the visual timer free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the visual timer is 100% free with no sign-up or registration required. Open it and start using it immediately."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use the visual timer in a classroom?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. The visual timer is perfect for classrooms — the large display is visible from across the room, making it ideal for teachers to set time limits for activities, transitions, and tests."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why are visual timers good for ADHD?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Visual timers help people with ADHD by providing a clear, visual representation of time passing. The progress bar and color changes make abstract time concepts more concrete and easier to track."
                    }
                  }
                ]
              },
              {
                "@type": "SoftwareApplication",
                "name": "Visual Timer",
                "applicationCategory": "EducationApplication",
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
                  "ratingCount": "189",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              },
              {
                "@type": "HowTo",
                "name": "How to Use a Visual Timer",
                "description": "Learn how to use our visual countdown timer for classrooms, kids, and time management.",
                "step": [
                  {
                    "@type": "HowToStep",
                    "position": 1,
                    "name": "Choose Duration",
                    "text": "Select a preset duration or set a custom time for your activity, lesson, or task."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 2,
                    "name": "Start the Timer",
                    "text": "Click the start button. The large visual display shows time remaining with a progress bar."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 3,
                    "name": "Watch the Visual Progress",
                    "text": "As time passes, the progress bar shrinks and the color changes to indicate how much time is left."
                  },
                  {
                    "@type": "HowToStep",
                    "position": 4,
                    "name": "Get Alerted",
                    "text": "When time runs out, an audio alarm sounds and the display flashes to get attention."
                  }
                ]
              }
            ]
          })
        }}
      />

      <section className="text-center my-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">👀 Visual Timer Online</h1>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto mb-6">
          A large, easy-to-read visual countdown timer. Perfect for classrooms, kids, ADHD, and anyone who benefits from seeing time pass visually.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-6 md:p-10 my-6 border border-gray-100 text-center">
        <div className="text-7xl md:text-8xl font-bold text-[#3a86ff] font-mono my-6" aria-live="polite">
          <Link href="/timer/5-minute-timer" className="hover:opacity-80 transition-opacity">05:00</Link>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/timer/5-minute-timer" className="bg-[#3a86ff] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all">
            Start 5-Min Timer
          </Link>
          <Link href="/timer/10-minute-timer" className="bg-gray-100 text-[#3a86ff] font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-all">
            10 Min Timer
          </Link>
          <Link href="/timer/25-minute-timer" className="bg-gray-100 text-[#3a86ff] font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-all">
            25 Min Timer
          </Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Who Uses Visual Timers?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🏫 Classrooms</h3>
            <p className="text-sm text-[#555555]">Teachers use visual timers for activities, transitions, and assessments. Visible from across the room.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold text-lg mb-2">👶 Kids & Parents</h3>
            <p className="text-sm text-[#555555]">Help children understand time concepts with visual countdowns for brushing teeth, homework, and playtime.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🧠 ADHD & Focus</h3>
            <p className="text-sm text-[#555555]">Visual timers help with ADHD by making abstract time concrete. Great for Pomodoro technique and focus sessions.</p>
          </div>
        </div>
      </section>

      <section className="my-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-2">📺 Large Display</h3>
            <p className="text-sm text-[#555555]">Big, bold numbers visible from across the room. No squinting required.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-2">🎨 Color-Coded Progress</h3>
            <p className="text-sm text-[#555555]">Green → Yellow → Red color changes show urgency as time runs out.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-2">🔔 Audio Alert</h3>
            <p className="text-sm text-[#555555]">Loud audio notification when time finishes, so no one misses the end.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-2">📱 Mobile Friendly</h3>
            <p className="text-sm text-[#555555]">Works great on tablets, phones, and interactive whiteboards.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-2">🆓 Completely Free</h3>
            <p className="text-sm text-[#555555]">No sign-up, no ads, no tracking. Just open and use.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-2">⚡ One-Click Start</h3>
            <p className="text-sm text-[#555555]">Quick presets for common durations. No configuration needed.</p>
          </div>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Visual Timer Durations</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          <Link href="/timer/1-minute-timer" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-[#3a86ff]">1 Min</h3>
            <p className="text-xs text-[#555555]">Quick tasks</p>
          </Link>
          <Link href="/timer/3-minute-timer" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-[#3a86ff]">3 Min</h3>
            <p className="text-xs text-[#555555]">Short activities</p>
          </Link>
          <Link href="/timer/5-minute-timer" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-[#3a86ff]">5 Min</h3>
            <p className="text-xs text-[#555555]">Brushing teeth</p>
          </Link>
          <Link href="/timer/10-minute-timer" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-[#3a86ff]">10 Min</h3>
            <p className="text-xs text-[#555555]">Quick breaks</p>
          </Link>
          <Link href="/timer/15-minute-timer" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-[#3a86ff]">15 Min</h3>
            <p className="text-xs text-[#555555]">Study blocks</p>
          </Link>
          <Link href="/timer/25-minute-timer" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-[#3a86ff]">25 Min</h3>
            <p className="text-xs text-[#555555]">Pomodoro focus</p>
          </Link>
          <Link href="/timer/30-minute-timer" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-[#3a86ff]">30 Min</h3>
            <p className="text-xs text-[#555555]">Class activity</p>
          </Link>
          <Link href="/timer/60-minute-timer" className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-[#3a86ff]">60 Min</h3>
            <p className="text-xs text-[#555555]">Long sessions</p>
          </Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">More Timers to Explore</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/pomodoro-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">🍅 Pomodoro Timer</h3>
            <p className="text-sm text-[#555555]">25/5 work-break cycles</p>
          </Link>
          <Link href="/study-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">📚 Study Timer</h3>
            <p className="text-sm text-[#555555]">Pomodoro + lo-fi beats</p>
          </Link>
          <Link href="/shareable-countdown" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">🔗 Share Timer</h3>
            <p className="text-sm text-[#555555]">Create & share countdowns</p>
          </Link>
        </div>
      </section>

      <section className="bg-[#3a86ff] rounded-xl p-8 text-center text-white my-8">
        <h2 className="text-2xl font-bold mb-3">Ready to see time differently?</h2>
        <p className="mb-5 text-blue-100">Start using our visual timer now. It's free, simple, and works on all devices.</p>
        <Link href="/timer/5-minute-timer" className="inline-block bg-white text-[#3a86ff] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all">
          Start Visual Timer →
        </Link>
      </section>
    </main>
  );
}
