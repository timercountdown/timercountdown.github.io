import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: 'Free Online Timer, Countdown & Pomodoro | TimerCountdown',
  description: 'Free online countdown timers, Pomodoro timers, study timers, event countdowns, and white noise generators. Easy to use, no sign-up required. Start timing in seconds.',
  keywords: ['online countdown timer', 'free online timer', 'pomodoro timer', 'study timer', 'event countdown', 'white noise generator'],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
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
  alternates: {
    canonical: 'https://timercountdown.github.io/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
      </head>
      <GoogleTagManager gtmId="GTM-PVBRHHSS" />
      <body className="max-w-screen-lg mx-auto px-4 md:px-5 py-0 bg-white text-[#2b2d42]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
