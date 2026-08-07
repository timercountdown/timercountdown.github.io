import type { Metadata } from 'next';
import Link from 'next/link';
import PomodoroTimer from '@/components/PomodoroTimer';

export const metadata: Metadata = {
  title: 'Pomodoro Timer Online - Free 25/5 Focus Timer | TimerCountdown',
  description: 'Free online Pomodoro timer with 25-minute work and 5-minute break cycles. Boost productivity with our clean, simple focus timer. Customizable intervals and notifications.',
  keywords: ['pomodoro timer', 'online pomodoro timer', 'focus timer', '25 minute timer', 'productivity timer', 'pomodoro technique online'],
  alternates: {
    canonical: '/pomodoro-timer',
  },
  openGraph: {
    title: 'Pomodoro Timer Online - Free Focus Timer',
    description: 'Free online Pomodoro timer with 25/5 work-break cycles. Boost your productivity.',
    url: 'https://timercountdown.github.io/pomodoro-timer',
  },
};

export default function PomodoroTimerPage() {
  return (
    <main className="py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-[#777777] mb-4">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#3a86ff]">Home</Link></li>
          <li>/</li>
          <li className="text-[#3a86ff]">Pomodoro Timer</li>
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
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": { "@id": "https://timercountdown.github.io/", "name": "Home" }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": { "@id": "https://timercountdown.github.io/pomodoro-timer", "name": "Pomodoro Timer" }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is a Pomodoro timer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A Pomodoro timer is a productivity tool that uses the Pomodoro Technique: 25 minutes of focused work followed by a 5-minute break. After 4 cycles, you take a longer 15-30 minute break."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does the online Pomodoro timer work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Simply click start to begin a 25-minute work session. When it ends, the timer automatically switches to a 5-minute break. After 4 work cycles, you get a long break."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I customize the Pomodoro intervals?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, you can customize work duration, short break, and long break durations. The default is 25/5/15 but you can set any intervals that work for you."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="text-center my-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">🍅 Pomodoro Timer Online</h1>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto mb-6">
          Boost your productivity with the classic 25/5 Pomodoro technique. Free, simple, and customizable. No sign-up required.
        </p>
      </section>

      {/* Timer */}
      <section className="bg-white rounded-xl shadow-lg p-6 md:p-10 my-6 border border-gray-100">
        <PomodoroTimer />
      </section>

      {/* How It Works */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">How the Pomodoro Technique Works</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-5 text-center">
            <div className="text-3xl mb-2">1️⃣</div>
            <h3 className="font-bold mb-1">Pick a Task</h3>
            <p className="text-sm text-[#555555]">Choose one task you want to focus on</p>
          </div>
          <div className="bg-green-50 rounded-lg p-5 text-center">
            <div className="text-3xl mb-2">2️⃣</div>
            <h3 className="font-bold mb-1">Work 25 min</h3>
            <p className="text-sm text-[#555555]">Focus deeply with zero distractions</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-5 text-center">
            <div className="text-3xl mb-2">3️⃣</div>
            <h3 className="font-bold mb-1">Short Break</h3>
            <p className="text-sm text-[#555555]">Take a 5-minute break to recharge</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-5 text-center">
            <div className="text-3xl mb-2">4️⃣</div>
            <h3 className="font-bold mb-1">Long Break</h3>
            <p className="text-sm text-[#555555]">After 4 cycles, take 15-30 min off</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="my-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Use a Pomodoro Timer?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold text-lg mb-2">🎯 Better Focus</h3>
            <p className="text-sm text-[#555555]">Train your brain to concentrate for 25 minutes at a time.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold text-lg mb-2">⚡ More Productive</h3>
            <p className="text-sm text-[#555555]">Get more done by working with your attention span, not against it.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold text-lg mb-2">💆 Reduced Fatigue</h3>
            <p className="text-sm text-[#555555]">Regular breaks prevent burnout and maintain high performance.</p>
          </div>
        </div>
      </section>

      {/* Related Timers */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore More Timers</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/study-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">📚 Study Timer</h3>
            <p className="text-sm text-[#555555]">Pomodoro + lo-fi beats for learning</p>
          </Link>
          <Link href="/timer/25-minute-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">⏱ 25 Min Timer</h3>
            <p className="text-sm text-[#555555]">Simple standalone 25-minute countdown</p>
          </Link>
          <Link href="/shareable-countdown" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">🔗 Share Timer</h3>
            <p className="text-sm text-[#555555]">Create & share countdowns with others</p>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#ff6b6b] rounded-xl p-8 text-center text-white my-8">
        <h2 className="text-2xl font-bold mb-3">Ready to boost your productivity?</h2>
        <p className="mb-5 text-red-100">Start your first Pomodoro session now. It only takes 25 minutes.</p>
        <Link href="/timer/25-minute-timer" className="inline-block bg-white text-[#ff6b6b] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all">
          Start a 25-Min Timer →
        </Link>
      </section>
    </main>
  );
}
