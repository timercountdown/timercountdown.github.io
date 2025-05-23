import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
      <head>
        <script type="text/javascript" src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
      </head>
      <GoogleTagManager gtmId="GTM-PVBRHHSS" />
      <body  className="max-w-screen-lg mx-auto px-5 py-5">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
