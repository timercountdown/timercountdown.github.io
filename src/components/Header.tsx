'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="flex justify-between items-center py-3 px-4">
        <Link href="/" className="text-xl font-bold text-[#3a86ff] no-underline flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-[#3a86ff] text-white flex items-center justify-center text-sm font-bold">⏱</span>
          TimerCountdown
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          <Link href="/" className="text-[#555555] font-medium no-underline hover:text-[#3a86ff] transition-colors">
            Home
          </Link>
          <Link href="/timer/5-minute-timer" className="text-[#555555] font-medium no-underline hover:text-[#3a86ff] transition-colors">
            Timers
          </Link>
          <Link href="/pomodoro-timer" className="text-[#555555] font-medium no-underline hover:text-[#3a86ff] transition-colors">
            Pomodoro
          </Link>
          <Link href="/study-timer" className="text-[#555555] font-medium no-underline hover:text-[#3a86ff] transition-colors">
            Study Timer
          </Link>
          <Link href="/days-until" className="text-[#555555] font-medium no-underline hover:text-[#3a86ff] transition-colors">
            Countdowns
          </Link>
          <Link href="/white-noise/office" className="text-[#555555] font-medium no-underline hover:text-[#3a86ff] transition-colors">
            White Noise
          </Link>
          <Link href="/shareable-countdown" className="text-[#3a86ff] font-medium no-underline hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1 rounded-full text-sm">
            Share Timer
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white py-3 px-4 space-y-2">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-[#555555] font-medium no-underline hover:text-[#3a86ff] py-2">
            🏠 Home
          </Link>
          <Link href="/timer/5-minute-timer" onClick={() => setMobileOpen(false)} className="block text-[#555555] font-medium no-underline hover:text-[#3a86ff] py-2">
            ⏱ Timers
          </Link>
          <Link href="/pomodoro-timer" onClick={() => setMobileOpen(false)} className="block text-[#555555] font-medium no-underline hover:text-[#3a86ff] py-2">
            🍅 Pomodoro Timer
          </Link>
          <Link href="/study-timer" onClick={() => setMobileOpen(false)} className="block text-[#555555] font-medium no-underline hover:text-[#3a86ff] py-2">
            📚 Study Timer
          </Link>
          <Link href="/days-until" onClick={() => setMobileOpen(false)} className="block text-[#555555] font-medium no-underline hover:text-[#3a86ff] py-2">
            📅 Countdowns
          </Link>
          <Link href="/white-noise/office" onClick={() => setMobileOpen(false)} className="block text-[#555555] font-medium no-underline hover:text-[#3a86ff] py-2">
            🔊 White Noise
          </Link>
          <Link href="/shareable-countdown" onClick={() => setMobileOpen(false)} className="block text-[#3a86ff] font-medium no-underline bg-blue-50 px-3 py-2 rounded-lg text-center">
            🔗 Share Timer
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
