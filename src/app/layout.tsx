import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";


export const metadata: Metadata = {
  title: 'Timer Countdown | Free Online Countdown Timers',
  description: 'Free online countdown timers for any purpose. Easy to use timers perfect for cooking, workouts, studying, and presentations.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PVBRHHSS" />
      <body>
        {children}
      </body>
    </html>
  );
}
