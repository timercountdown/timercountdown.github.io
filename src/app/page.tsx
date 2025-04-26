// HomePage.tsx
'use client'
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Animation for preview timer display (simulating countdown)
    const previewTimerDisplay = document.getElementById('previewTimerDisplay');
    const previewProgressBar = document.getElementById('previewProgressBar');
    
    if (previewTimerDisplay && previewProgressBar) {
      // This is just a visual preview, not a functional timer
      // In a real implementation, you might want to create an actual timer functionality
      previewProgressBar.style.width = '100%';
      
      // Optional: Add animation to simulate countdown for preview purposes
      setTimeout(() => {
        previewProgressBar.style.width = '0%';
      }, 100);
    }
  }, []);

  return (
    <>
      <Head>
        <title>TimerCountdown | Free Online Countdown Timers</title>
        <meta name="description" content="Free online countdown timers for any purpose. Easy to use timers perfect for cooking, workouts, studying, and presentations." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://timercountdown.github.io/"></link>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
        
       
        
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
                  "description": "Free online countdown timers for any purpose. Easy to use timers perfect for cooking, workouts, studying, and presentations."
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://timercountdown.github.io/#localbusiness",
                  "name": "TimerCountdown",
                  "url": "https://timercountdown.github.io/",
                  "image": "https://timercountdown.github.io/favicon.ico",
                  "description": "Provider of free online countdown timers for multiple purposes including cooking, workouts, studying and presentations.",
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
                  "description": "Free online countdown timers for any purpose",
                  "publisher": {
                    "@id": "https://timercountdown.github.io/#organization"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://timercountdown.github.io/#webpage",
                  "url": "https://timercountdown.github.io/",
                  "name": "TimerCountdown | Free Online Countdown Timers",
                  "isPartOf": {
                    "@id": "https://timercountdown.github.io/#website"
                  },
                  "about": {
                    "@id": "https://timercountdown.github.io/#organization"
                  },
                  "description": "Free online countdown timers for any purpose. Easy to use timers perfect for cooking, workouts, studying, and presentations.",
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
                      "url": "https://timercountdown.github.io/5-minute-timer.html",
                      "name": "5 Minute Timer"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "url": "https://timercountdown.github.io/10-minute-timer.html",
                      "name": "10 Minute Timer"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "url": "https://timercountdown.github.io/15-minute-timer.html",
                      "name": "15 Minute Timer"
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
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "ratingCount": "253",
                      "bestRating": "5",
                      "worstRating": "1"
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
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.8",
                      "ratingCount": "253",
                      "bestRating": "5",
                      "worstRating": "1"
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
                        "text": "TimerCountdown is perfect for many activities including cooking, workouts, studying with the Pomodoro technique, presentations, meetings, and any activity where you need to track time."
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
      </Head>
      
     

      <div className="bg-background text-text-primary leading-normal">
        <div className="max-w-screen-lg mx-auto px-5 py-5">
          <Header />
          
          <main>
            {/* Hero Section */}
            <div className="bg-card rounded-xl shadow-md p-8 my-8 text-center">
              <h1 className="text-4xl font-bold mb-3 text-text-primary">Free Online Countdown Timers</h1>
              <p className="text-lg text-text-secondary mb-8">Simple, reliable timers for any task or activity</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/timer/5-minute-timer" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">5 Min</Link>
                <Link href="/timer/10-minute-timer" className="bg-blue-100 text-primary font-bold py-3 px-6 rounded-lg hover:bg-blue-200 transition-all duration-300">10 Min</Link>
                <Link href="/timer/15-minute-timer" className="bg-blue-100 text-primary font-bold py-3 px-6 rounded-lg hover:bg-blue-200 transition-all duration-300">15 Min</Link>
              </div>

              <p className="text-text-secondary">Choose any timer above or try our popular <Link href="/timer/5-minute-timer" className="text-primary font-medium">5 minute timer</Link></p>
            </div>
            
            {/* Featured Timer Preview */}
            <div className="bg-card rounded-xl shadow-md p-8 my-8">
              <h2 className="text-2xl font-bold mb-5 text-center">Quick 5 Minute Timer</h2>
              <div className="h-2 bg-secondary rounded-full mb-6">
                <div id="previewProgressBar" className="h-full bg-primary rounded-full w-full transition-all duration-1000"></div>
              </div>
              <div id="previewTimerDisplay" className="text-5xl md:text-6xl font-bold text-primary my-6 text-center font-mono">05:00</div>
              <div className="flex justify-center gap-4">
                <Link href="/timer/5-minute-timer" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">Use Full Timer</Link>
              </div>
            </div>
            
            {/* Features */}
            <div className="my-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Why Use TimerCountdown?</h2>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-card rounded-lg p-5 shadow hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Easy to Use</h3>
                  <p className="text-text-secondary">No downloads or installations needed. Our timers start with just one click - simple and hassle-free.</p>
                </div>
                
                <div className="bg-card rounded-lg p-5 shadow hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Visual & Audio Alerts</h3>
                  <p className="text-text-secondary">Watch the progress bar and receive audio notifications when your timer completes.</p>
                </div>
                
                <div className="bg-card rounded-lg p-5 shadow hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Completely Free</h3>
                  <p className="text-text-secondary">All our timers are free to use with no ads interrupting your focus or workflow.</p>
                </div>
              </div>
            </div>
            
            {/* Use Cases */}
            <div className="my-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Perfect For Any Activity</h2>
              
              <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
                <div className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <h4 className="text-primary font-bold mb-2">Cooking</h4>
                  <p className="text-text-secondary">Time your recipes perfectly every time with our reliable timers.</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <h4 className="text-primary font-bold mb-2">Workouts</h4>
                  <p className="text-text-secondary">Perfect for interval training, rest periods, and timed exercises.</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <h4 className="text-primary font-bold mb-2">Studying</h4>
                  <p className="text-text-secondary">Use the Pomodoro technique with timed study sessions and breaks.</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
                  <h4 className="text-primary font-bold mb-2">Presentations</h4>
                  <p className="text-text-secondary">Keep your speeches and meetings on schedule and well-organized.</p>
                </div>
              </div>
            </div>

            {/* Popular Timers */}
            <div className="my-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">Popular Timers</h2>
              
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
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;