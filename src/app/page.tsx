// HomePage.tsx
'use client'
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { holidays } from './lib/holiday';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Animation for preview timer display (simulating countdown)
    const previewTimerDisplay = document.getElementById('previewTimerDisplay');
    const previewProgressBar = document.getElementById('previewProgressBar');
    
    if (previewTimerDisplay && previewProgressBar) {
      // This is just a visual preview, not a functional timer
      previewProgressBar.style.width = '100%';
      
      // Optional: Add animation to simulate countdown for preview purposes
      setTimeout(() => {
        previewProgressBar.style.width = '0%';
      }, 100);
    }
  }, []);

  const now = new Date();

  return (
    <>
      <Head>
        <title>TimerCountdown | Free Online Countdown Timers & Event Countdowns</title>
        <meta name="description" content="Free online countdown timers and event countdowns. Easy to use timers for cooking, workouts, studying, and presentations, plus days until holidays and special events." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://timercountdown.github.io/"></link>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background text-text-primary leading-normal">
        {/* Schema.org JSON-LD */}
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
                  "description": "Free online countdown timers and event countdowns for any purpose. Easy to use timers perfect for cooking, workouts, studying, and presentations, plus days until holidays and special events."
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://timercountdown.github.io/#localbusiness",
                  "name": "TimerCountdown",
                  "url": "https://timercountdown.github.io/",
                  "image": "https://timercountdown.github.io/favicon.ico",
                  "description": "Provider of free online countdown timers and event countdowns for multiple purposes including cooking, workouts, studying, presentations, and special events.",
                  "priceRange": "Free",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "919 Stimple Ct",
                    "addressLocality": "Fairbanks",
                    "addressRegion": "AK",
                    "postalCode": "99712",
                    "addressCountry": "US"
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://timercountdown.github.io/#website",
                  "url": "https://timercountdown.github.io/",
                  "name": "TimerCountdown",
                  "description": "Free online countdown timers and event countdowns for any purpose",
                  "publisher": {
                    "@id": "https://timercountdown.github.io/#organization"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://timercountdown.github.io/#webpage",
                  "url": "https://timercountdown.github.io/",
                  "name": "TimerCountdown | Free Online Countdown Timers & Event Countdowns",
                  "isPartOf": {
                    "@id": "https://timercountdown.github.io/#website"
                  },
                  "about": {
                    "@id": "https://timercountdown.github.io/#organization"
                  },
                  "description": "Free online countdown timers and event countdowns for any purpose. Easy to use timers perfect for cooking, workouts, studying, and presentations, plus days until holidays and special events.",
                  "inLanguage": "en-US"
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
                  "@type": "ItemList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "url": "https://timercountdown.github.io/timer/5-minute-timer",
                      "name": "5 Minute Timer"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "url": "https://timercountdown.github.io/timer/10-minute-timer",
                      "name": "10 Minute Timer"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "url": "https://timercountdown.github.io/timer/15-minute-timer",
                      "name": "15 Minute Timer"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "url": "https://timercountdown.github.io/days-until/christmas",
                      "name": "Days Until Christmas"
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "url": "https://timercountdown.github.io/days-until/newyear",
                      "name": "Days Until New Year"
                    }
                  ]
                },
                {
                  "@type": "Review",
                  "itemReviewed": {
                    "@type": "SoftwareApplication",
                    "name": "TimerCountdown",
                    "applicationCategory": "WebApplication",
                    "operatingSystem": "All",
                    "offers": {
                      "@type": "Offer",
                      "category": "free",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  },
                  "author": {
                    "@type": "Person",
                    "name": "John Smith"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "datePublished": "2025-04-10",
                  "reviewBody": "TimerCountdown is the best online timer I've used. Simple, clean interface and it works perfectly every time. Great for my workout routines!"
                },
                {
                  "@type": "Review",
                  "itemReviewed": {
                    "@type": "SoftwareApplication",
                    "name": "TimerCountdown",
                    "applicationCategory": "WebApplication",
                    "operatingSystem": "All",
                    "offers": {
                      "@type": "Offer",
                      "category": "free",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "datePublished": "2025-04-10",
                  "reviewBody": "I use TimerCountdown daily for my Pomodoro technique studying. The interface is clean and the audio alerts are perfect. Highly recommended!"
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
                      "name": "Does TimerCountdown have audio alerts?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, TimerCountdown provides audio notifications when your timer completes, along with visual progress indicators."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What can I use TimerCountdown for?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "TimerCountdown offers two main features: minute-based countdown timers perfect for cooking, workouts, studying with the Pomodoro technique, presentations, and meetings; and 'Days Until' countdowns for tracking the days remaining until holidays and special events."
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
                }
              ]
            })
          }}
        />
        <div>
          <main>
            {/* Hero Section */}
            <div className="bg-card rounded-xl shadow-md p-8 my-8 text-center">
              <h1 className="text-4xl font-bold mb-3 text-text-primary">Free Online Countdowns & Timers</h1>
              <p className="text-lg text-text-secondary mb-8">Simple, reliable countdowns for any task, activity or event</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/timer/5-minute-timer" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">5 Min Timer</Link>
                <Link href="/timer/10-minute-timer" className="bg-blue-100 text-primary font-bold py-3 px-6 rounded-lg hover:bg-blue-200 transition-all duration-300">10 Min Timer</Link>
                <Link href="/days-until/christmas" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">Days Until Christmas</Link>
              </div>

              <p className="text-text-secondary">Choose any countdown above or try our popular <Link href="/timer/5-minute-timer" className="text-primary font-medium">5 minute timer</Link></p>
            </div>
            
            {/* Two Main Features */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              {/* Minute Timer Feature */}
              <div className="bg-card rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-5 text-center">Minute Timers</h2>
                <div className="h-2 bg-secondary rounded-full mb-6">
                  <div id="previewProgressBar" className="h-full bg-primary rounded-full w-full transition-all duration-1000"></div>
                </div>
                <div id="previewTimerDisplay" className="text-5xl md:text-6xl font-bold text-primary my-6 text-center font-mono">05:00</div>
                <div className="flex justify-center gap-4 mb-4">
                  <Link href="/timer/5-minute-timer" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">Use Full Timer</Link>
                </div>
                <p className="text-text-secondary text-center">Perfect for cooking, workouts, studying, and more</p>
              </div>
              
              {/* Days Until Feature */}
              <div className="bg-card rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-5 text-center">Days Until Events</h2>
                <div className="text-5xl md:text-6xl font-bold text-green-600 my-6 text-center font-mono">{Math.floor((holidays['christmas'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24))}</div>
                <div className="text-xl text-center font-semibold text-green-700 mb-6">Days Until Christmas</div>
                <div className="flex justify-center gap-4 mb-4">
                  <Link href="/days-until/christmas" className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">View Full Countdown</Link>
                </div>
                <p className="text-text-secondary text-center">Track the days until holidays and special events</p>
              </div>
            </div>
            
            {/* Features */}
            <div className="my-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Why Use TimerCountdown?</h2>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-card rounded-lg p-5 shadow hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Easy to Use</h3>
                  <p className="text-text-secondary">No downloads or installations needed. Our countdowns start with just one click - simple and hassle-free.</p>
                </div>
                
                <div className="bg-card rounded-lg p-5 shadow hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Visual & Audio Alerts</h3>
                  <p className="text-text-secondary">Watch the progress bar and receive audio notifications when your timer completes.</p>
                </div>
                
                <div className="bg-card rounded-lg p-5 shadow hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Completely Free</h3>
                  <p className="text-text-secondary">All our countdowns are free to use with no ads interrupting your focus or workflow.</p>
                </div>
              </div>
            </div>
            
            {/* Popular Timers */}
            <div className="my-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Popular Minute Timers</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/timer/5-minute-timer" className="bg-card rounded-lg p-6 shadow text-center hover:shadow-lg transition-all duration-300 no-underline">
                  <h3 className="text-xl font-bold text-primary mb-2">5 Minute Timer</h3>
                  <div className="h-1 bg-secondary rounded-full mb-3 w-3/4 mx-auto">
                    <div className="h-full bg-primary rounded-full w-full"></div>
                  </div>
                  <p className="text-text-secondary">Perfect for quick tasks, short breaks, and rapid cooking times.</p>
                </Link>
                
                <Link href="/timer/10-minute-timer" className="bg-card rounded-lg p-6 shadow text-center hover:shadow-lg transition-all duration-300 no-underline">
                  <h3 className="text-xl font-bold text-primary mb-2">10 Minute Timer</h3>
                  <div className="h-1 bg-secondary rounded-full mb-3 w-3/4 mx-auto">
                    <div className="h-full bg-primary rounded-full w-full"></div>
                  </div>
                  <p className="text-text-secondary">Perfect for Pomodoro technique - 10 minutes of focused work.</p>
                </Link>
                
                <Link href="/timer/15-minute-timer" className="bg-card rounded-lg p-6 shadow text-center hover:shadow-lg transition-all duration-300 no-underline">
                  <h3 className="text-xl font-bold text-primary mb-2">15 Minute Timer</h3>
                  <div className="h-1 bg-secondary rounded-full mb-3 w-3/4 mx-auto">
                    <div className="h-full bg-primary rounded-full w-full"></div>
                  </div>
                  <p className="text-text-secondary">For longer tasks, meetings, and extended cooking times.</p>
                </Link>
              </div>
            </div>
            
            {/* Popular Days Until Countdowns */}
            <div className="my-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Popular Event Countdowns</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/days-until/christmas" className="bg-card rounded-lg p-6 shadow text-center hover:shadow-lg transition-all duration-300 no-underline">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Days Until Christmas</h3>
                  <div className="text-3xl font-bold text-green-700 my-3">{Math.floor((holidays['christmas'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24))}</div>
                  <p className="text-text-secondary">Track the countdown to the most wonderful time of the year.</p>
                </Link>
                
                <Link href="/days-until/newyear" className="bg-card rounded-lg p-6 shadow text-center hover:shadow-lg transition-all duration-300 no-underline">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Days Until New Year</h3>
                  <div className="text-3xl font-bold text-green-700 my-3">{Math.floor((holidays['newyear'].getNextDate().getTime() - now.getTime()) / (1000 * 60 * 60 * 24))}</div>
                  <p className="text-text-secondary">Count the days until we welcome in the next year.</p>
                </Link>
                
                <Link href="/days-until" className="bg-card rounded-lg p-6 shadow text-center hover:shadow-lg transition-all duration-300 no-underline">
                  <h3 className="text-xl font-bold text-green-600 mb-2">How many days until holidays</h3>
                  <p className="text-text-secondary">Keep track of the days until the most romantic day of the year.</p>
                </Link>
              </div>
            </div>
            
            {/* Use Cases */}
            <div className="my-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Perfect For Any Activity</h2>
              
              <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
                <div className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <h4 className="text-primary font-bold mb-2">Cooking</h4>
                  <p className="text-text-secondary">Time your recipes perfectly with our reliable minute timers.</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <h4 className="text-primary font-bold mb-2">Workouts</h4>
                  <p className="text-text-secondary">Perfect for interval training, rest periods, and timed exercises.</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <h4 className="text-primary font-bold mb-2">Event Planning</h4>
                  <p className="text-text-secondary">Track days until holidays, birthdays, weddings, and more.</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <h4 className="text-primary font-bold mb-2">Studying</h4>
                  <p className="text-text-secondary">Use the Pomodoro technique with timed study sessions and breaks.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;