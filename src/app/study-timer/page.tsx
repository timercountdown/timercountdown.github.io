import type { Metadata } from 'next';
import Link from 'next/link';
import StudyTimer from '@/components/StudyTimer';

export const metadata: Metadata = {
  title: 'Study Timer Online - Free Focus Timer for Students | TimerCountdown',
  description: 'Free online study timer with Pomodoro cycles, lo-fi beats, and focus mode. Perfect for exams, homework, and deep study sessions. Boost learning productivity today.',
  keywords: ['study timer', 'focus timer for study', 'online study timer', 'pomodoro study timer', 'student timer', 'exam timer'],
  alternates: {
    canonical: '/study-timer',
  },
  openGraph: {
    title: 'Study Timer Online - Free Focus Timer for Students',
    description: 'Free study timer with Pomodoro cycles and lo-fi beats. Boost your learning productivity.',
    url: 'https://timercountdown.github.io/study-timer',
  },
};

export default function StudyTimerPage() {
  return (
    <main className="py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-[#777777] mb-4">
        <ol className="flex gap-2">
          <li><Link href="/" className="hover:text-[#3a86ff]">Home</Link></li>
          <li>/</li>
          <li className="text-[#3a86ff]">Study Timer</li>
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
                  { "@type": "ListItem", "position": 2, "item": { "@id": "https://timercountdown.github.io/study-timer", "name": "Study Timer" } }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does the study timer work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our study timer uses the Pomodoro technique: 25 minutes of focused study followed by a 5-minute break. You can customize the intervals and add lo-fi background music to stay focused."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the study timer free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the study timer is 100% free with no sign-up required. Open it and start studying immediately."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use the study timer for exams?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. The study timer is perfect for exam preparation, helping you maintain consistent focus sessions and track your study progress."
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
        <h1 className="text-3xl md:text-4xl font-bold mb-3">📚 Study Timer Online</h1>
        <p className="text-lg text-[#555555] max-w-2xl mx-auto mb-6">
          The perfect focus timer for students. Pomodoro cycles, lo-fi beats, and distraction-free studying. Boost your learning today.
        </p>
      </section>

      {/* Timer */}
      <section className="bg-white rounded-xl shadow-lg p-6 md:p-10 my-6 border border-gray-100">
        <StudyTimer />
      </section>

      {/* Features for Students */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Built for Students</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🎯 Focus Mode</h3>
            <p className="text-sm text-[#555555]">Stay concentrated with timed Pomodoro sessions designed for deep learning.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🎵 Background Music</h3>
            <p className="text-sm text-[#555555]">Optional lo-fi beats to help you relax and concentrate while studying.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow border border-gray-100">
            <h3 className="font-bold text-lg mb-2">📊 Track Progress</h3>
            <p className="text-sm text-[#555555]">Visual progress indicators help you see how much study time remains.</p>
          </div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="my-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Study Tips for Better Learning</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-1">✋ Active Recall</h3>
            <p className="text-sm text-[#555555]">Test yourself frequently. Active recall is one of the most effective learning techniques.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-1">🔁 Spaced Repetition</h3>
            <p className="text-sm text-[#555555]">Review material at increasing intervals to move information from short-term to long-term memory.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-1">🎯 Single-Tasking</h3>
            <p className="text-sm text-[#555555]">Focus on one subject at a time. Multitasking reduces learning efficiency by up to 40%.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow">
            <h3 className="font-bold mb-1">💤 Sleep & Breaks</h3>
            <p className="text-sm text-[#555555]">Regular breaks and adequate sleep are essential for memory consolidation and focus.</p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">More Productivity Tools</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/pomodoro-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">🍅 Pomodoro Timer</h3>
            <p className="text-sm text-[#555555]">Classic 25/5 focus cycles</p>
          </Link>
          <Link href="/white-noise/office" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">🔊 White Noise</h3>
            <p className="text-sm text-[#555555]">Mask distractions for deeper focus</p>
          </Link>
          <Link href="/timer/90-minute-timer" className="bg-white rounded-lg p-5 shadow text-center hover:shadow-lg transition-all no-underline">
            <h3 className="font-bold text-lg mb-1">⏱ Custom Timers</h3>
            <p className="text-sm text-[#555555]">Any duration you need</p>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#06d6a0] rounded-xl p-8 text-center text-white my-8">
        <h2 className="text-2xl font-bold mb-3">Ready to ace your next study session?</h2>
        <p className="mb-5 text-green-900">Start a 25-minute focus session right now.</p>
        <Link href="/timer/25-minute-timer" className="inline-block bg-white text-[#06d6a0] font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all">
          Start Focus Timer →
        </Link>
      </section>
    </main>
  );
}
