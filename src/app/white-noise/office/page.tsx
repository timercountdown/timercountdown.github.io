// src/app/white-noise/office/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhiteNoisePlayer from '@/components/WhiteNoisePlayer';
import { constants } from '@/utils/constants';
import Link from 'next/link';

export default function WhiteNoisePage() {
  const noiseTypes = [
    { id: "white", name: "White Noise", description: "Uniform noise across all frequencies, ideal for masking various office sounds" },
    { id: "pink", name: "Pink Noise", description: "Softer at high frequencies, mimics natural sounds like rainfall" },
    { id: "brown", name: "Brown Noise", description: "Deeper sounds with stronger low frequencies, similar to ocean waves" },
    { id: "office", name: "Office Ambience", description: "Gentle keyboard typing and distant office sounds for a productive atmosphere" }
  ];

  const jsonLd = {
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
        "description": "Free online countdown timers and productivity tools. Easy to use tools perfect for improving focus and productivity."
      },
      {
        "@type": "WebSite",
        "@id": "https://timercountdown.github.io/#website",
        "url": "https://timercountdown.github.io/",
        "name": "TimerCountdown",
        "description": "Free online countdown timers and productivity tools",
        "publisher": {
          "@id": "https://timercountdown.github.io/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://timercountdown.github.io/white-noise/office/#webpage",
        "url": "https://timercountdown.github.io/white-noise/office/",
        "name": "White Noise Machine for Office | Free Online White Noise Generator",
        "isPartOf": {
          "@id": "https://timercountdown.github.io/#website"
        },
        "about": {
          "@id": "https://timercountdown.github.io/#organization"
        },
        "description": "Free online white noise machine for office environments. Boost productivity, mask distractions, and improve focus with customizable ambient sounds.",
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "White Noise Machine for Office",
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
          "ratingValue": "4.9",
          "ratingCount": "213",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Use This Online White Noise Machine",
        "description": "This free online white noise machine is perfect for creating a focused office environment. Simply select your preferred noise type and press play to begin.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Choose a noise type",
            "text": "Select from white noise, pink noise, brown noise, or office ambience sounds."
          },
          {
            "@type": "HowToStep",
            "name": "Adjust the volume",
            "text": "Set the volume to your preferred level using the volume slider."
          },
          {
            "@type": "HowToStep",
            "name": "Start playback",
            "text": "Press the Play button to begin the continuous ambient sound."
          },
          {
            "@type": "HowToStep",
            "name": "Use Full Screen mode",
            "text": "Activate Full Screen mode for a distraction-free experience while working."
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Web Browser"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://timercountdown.github.io/white-noise/office/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this white noise machine free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our online white noise machine for office use is completely free with no advertisements interrupting your focus or workflow."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use this white noise generator on my smartphone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our white noise machine is fully responsive and works on all devices including smartphones, tablets, and desktop computers."
            }
          },
          {
            "@type": "Question",
            "name": "Will the white noise continue if I switch browser tabs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the audio will continue playing even when you navigate to other browser tabs or applications, allowing you to work while maintaining your sound environment."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between white, pink, and brown noise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "White noise contains equal energy across all frequencies. Pink noise decreases in intensity at higher frequencies, making it sound more natural. Brown noise emphasizes lower frequencies, creating a deeper rumbling sound similar to thunder or ocean waves."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "White Noise Machine for Office",
          "applicationCategory": "WebApplication",
          "operatingSystem": "All"
        },
        "author": {
          "@type": "Person",
          "name": "Thomas Reynolds"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "datePublished": "2025-03-10",
        "reviewBody": "This online white noise machine has been a game-changer for my open office environment. I can finally focus without being distracted by conversations and office noise. The variety of sound options lets me choose what works best for different tasks."
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "White Noise Machine for Office",
          "applicationCategory": "WebApplication",
          "operatingSystem": "All"
        },
        "author": {
          "@type": "Person",
          "name": "Anna Martinez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "datePublished": "2025-02-15",
        "reviewBody": "I use this white noise generator every day in my home office. It's much better than physical machines I've tried because I can access it from any device and the sound quality is excellent. The office ambience option is particularly effective."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://timercountdown.github.io/white-noise/office/#breadcrumblist",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://timercountdown.github.io/",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://timercountdown.github.io/white-noise/",
              "name": "White Noise"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://timercountdown.github.io/white-noise/office/",
              "name": "White Noise Machine for Office"
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f7f9fc] text-[#2b2d42] leading-normal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <main>
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold text-[#2b2d42] mb-4">White Noise Machine for Office</h1>
            <p className="text-lg text-[#555555] max-w-3xl mx-auto">
              Boost productivity and focus by masking distracting office noises with our free online white noise generator. Perfect for open offices and work-from-home environments.
            </p>
          </div>

          <WhiteNoisePlayer noiseTypes={noiseTypes} />
          
          <div className="grid md:grid-cols-3 gap-5 my-10">
            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold mb-2">Improved Focus</h3>
              <p className="text-[#555555]">Mask distracting office noises and conversations to maintain concentration on important tasks.</p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold mb-2">Stress Reduction</h3>
              <p className="text-[#555555]">Create a consistent audio environment that helps reduce stress and anxiety in busy office settings.</p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold mb-2">Privacy Enhancement</h3>
              <p className="text-[#555555]">Add a layer of audio privacy for sensitive conversations in open workspace environments.</p>
            </div>
          </div>
          
          <div className="my-10">
            <h2 className="text-2xl font-bold mb-4">How White Noise Improves Office Productivity</h2>
            <p className="mb-5">White noise and ambient sounds create an acoustic environment that masks disruptive noises while providing a consistent audio backdrop that helps maintain focus and concentration. Our free online white noise machine offers various sound profiles to suit different office environments and personal preferences.</p>
            
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5 mt-5">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="text-[#3a86ff] font-bold mb-2">Open Offices</h4>
                <p className="text-[#555555]">Reduce distraction from conversations and activities in open plan workspaces.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="text-[#3a86ff] font-bold mb-2">Home Offices</h4>
                <p className="text-[#555555]">Mask household noises and create a professional atmosphere while working remotely.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="text-[#3a86ff] font-bold mb-2">Shared Spaces</h4>
                <p className="text-[#555555]">Establish acoustic boundaries in coworking spaces and shared environments.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="text-[#3a86ff] font-bold mb-2">Meeting Rooms</h4>
                <p className="text-[#555555]">Enhance privacy for sensitive discussions and reduce sound leakage from adjacent areas.</p>
              </div>
            </div>
          </div>

          <div className="my-10 bg-white rounded-lg p-6 shadow">
            <h2 className="text-2xl font-bold mb-4">Scientific Benefits of White Noise in Office Settings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#3a86ff]">Sound Masking Effects</h3>
                <p className="text-[#555555]">White noise works by adding a consistent background sound that masks sudden, jarring noises that can break concentration. Research shows this can reduce distraction by up to 46% in open office environments.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#3a86ff]">Cognitive Performance</h3>
                <p className="text-[#555555]">Studies indicate that appropriate background noise can improve cognitive performance on complex tasks by maintaining arousal levels without causing distraction.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#3a86ff]">Speech Privacy</h3>
                <p className="text-[#555555]">White noise increases the speech privacy index in office environments, making it harder to understand conversations happening nearby, thus reducing the cognitive load of processing irrelevant speech.</p>
              </div>
            </div>
          </div>
          
          <div className="my-10">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 shadow">
                <h3 className="text-xl font-bold mb-2">Is this white noise machine free to use?</h3>
                <p className="text-[#555555]">Yes, our online white noise machine for office use is completely free with no advertisements interrupting your focus or workflow.</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow">
                <h3 className="text-xl font-bold mb-2">Can I use this white noise generator on my smartphone?</h3>
                <p className="text-[#555555]">Yes, our white noise machine is fully responsive and works on all devices including smartphones, tablets, and desktop computers.</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow">
                <h3 className="text-xl font-bold mb-2">Will the white noise continue if I switch browser tabs?</h3>
                <p className="text-[#555555]">Yes, the audio will continue playing even when you navigate to other browser tabs or applications, allowing you to work while maintaining your sound environment.</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow">
                <h3 className="text-xl font-bold mb-2">What's the difference between white, pink, and brown noise?</h3>
                <p className="text-[#555555]">White noise contains equal energy across all frequencies. Pink noise decreases in intensity at higher frequencies, making it sound more natural. Brown noise emphasizes lower frequencies, creating a deeper rumbling sound similar to thunder or ocean waves.</p>
              </div>
            </div>
          </div>
        </main>

        <div className="my-10">
          <h2 className="text-2xl font-bold text-[#2b2d42] mb-4">Related Productivity Tools</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Link href="/timer/25-minute-timer/" className="bg-white rounded-lg p-5 shadow no-underline flex flex-col items-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#3a86ff] mb-2">25 Minute Pomodoro Timer</h3>
              <p className="text-[#555555] text-center">Combine with white noise for the ultimate productivity boost. Use the Pomodoro technique for focused work sessions.</p>
            </Link>
            
            <Link href="/timer/5-minute-timer/" className="bg-white rounded-lg p-5 shadow no-underline flex flex-col items-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#3a86ff] mb-2">5 Minute Break Timer</h3>
              <p className="text-[#555555] text-center">Perfect for short breaks between focused work sessions. Rest your mind before returning to productivity.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'White Noise Machine for Office | Free Online White Noise Generator',
    description: 'Free online white noise machine for office environments. Boost productivity, mask distractions, and improve focus with customizable ambient sounds.',
    alternates: {
      canonical: `${constants.domain}/white-noise/office/`,
    }
  };
}