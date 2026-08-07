import { constants } from '@/utils/constants';
import Link from 'next/link';

const Footer = () => {
  const popularTimers = [1, 3, 5, 10, 15, 20, 25, 30, 45, 60, 90, 120];
  const holidays = [
    { name: 'Christmas', slug: 'christmas' },
    { name: 'New Year', slug: 'newyear' },
    { name: 'Ramadan', slug: 'ramadan' },
    { name: 'Easter', slug: 'easter' },
    { name: 'Thanksgiving', slug: 'thanksgiving' },
    { name: 'Halloween', slug: 'halloween' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-10 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-[#3a86ff] mb-3">TimerCountdown</h3>
            <p className="text-[#777777] text-sm mb-3">
              Free online countdown timers, Pomodoro timers, event countdowns, and white noise generators. Easy to use, no sign-up required.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/timercountdown" target="_blank" rel="noopener noreferrer" className="text-[#777777] hover:text-[#3a86ff]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold text-text-primary mb-3">Online Timers</h4>
            <ul className="space-y-2 text-sm">
              {popularTimers.map(n => (
                <li key={`${n}-min`}>
                  <Link href={`/timer/${n}-minute-timer`} className="text-[#777777] hover:text-[#3a86ff] no-underline">
                    {n} Minute Timer
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/timer/90-second-timer" className="text-[#777777] hover:text-[#3a86ff] no-underline">
                  90 Second Timer
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold text-text-primary mb-3">Productivity Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pomodoro-timer" className="text-[#777777] hover:text-[#3a86ff] no-underline">🍅 Pomodoro Timer</Link></li>
              <li><Link href="/study-timer" className="text-[#777777] hover:text-[#3a86ff] no-underline">📚 Study Timer</Link></li>
              <li><Link href="/shareable-countdown" className="text-[#777777] hover:text-[#3a86ff] no-underline">🔗 Shareable Countdown</Link></li>
              <li><Link href="/white-noise/office" className="text-[#777777] hover:text-[#3a86ff] no-underline">🔊 White Noise Generator</Link></li>
              <li><Link href="/visual-timer" className="text-[#777777] hover:text-[#3a86ff] no-underline">👀 Visual Timer</Link></li>
              <li><Link href="/days-until" className="text-[#777777] hover:text-[#3a86ff] no-underline">📅 Event Countdowns</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold text-text-primary mb-3">Popular Countdowns</h4>
            <ul className="space-y-2 text-sm">
              {holidays.map(h => (
                <li key={h.slug}>
                  <Link href={`/days-until/${h.slug}`} className="text-[#777777] hover:text-[#3a86ff] no-underline">
                    Days Until {h.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-[#777777] text-sm">
          <p>&copy; 2025 TimerCountdown. All rights reserved. 
            <Link href="/privacy-policy" className="text-[#3a86ff] no-underline hover:underline ml-2">Privacy Policy</Link> | 
            <Link href="/terms-of-use" className="text-[#3a86ff] no-underline hover:underline ml-2">Terms of Use</Link> |
            <Link href="/sitemap.xml" className="text-[#3a86ff] no-underline hover:underline ml-2">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
