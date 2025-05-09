// src/app/timer/[duration]/page.tsx
import Timer from '@/components/Timer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { constants } from '@/utils/constants';
import Link from 'next/link';


const metaMap = {
  1:{
    durationEn:'One',
  },
  2:{
    durationEn:'Two',
    ratingValue:"4.9",
    ratingCount:"216"
  },
  3:{
    durationEn:'Three',
  },
  4:{
    durationEn:'Four',
  },
  5:{
    durationEn:'Five',
  },
  10:{
    durationEn:'Ten',
    ratingValue:"4.8",
    ratingCount:"156",
    reviews:[
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "SoftwareApplication",
        "name": "10 ${unit} Timer",
        "applicationCategory": "WebApplication",
        "operatingSystem": "All"
      },
      "author": {
        "@type": "Person",
        "name": "James Wilson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": "2025-02-18",
      "reviewBody": "This 10 ${unit} timer is perfect for my daily Pomodoro breaks. The interface is clean and the alarm is just right - not too jarring but definitely noticeable."
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "SoftwareApplication",
        "name": "10 ${unit} Timer",
        "applicationCategory": "WebApplication",
        "operatingSystem": "All"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Chen"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": "2025-01-30",
      "reviewBody": "I use this 10 ${unit} timer for my HIIT workout intervals. The full screen mode is great for visibility across the room, and the background music helps keep me motivated."
    }],
  },
  15:{
    durationEn:'Fifteen',
    ratingValue:"4.9",
    ratingCount:"184",
    reviews:[
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "15 ${unit} Timer with Music",
          "applicationCategory": "WebApplication",
          "operatingSystem": "All"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "datePublished": "2025-03-15",
        "reviewBody": "I use this 15 ${unit} timer daily for my meditation practice. The background music feature is perfect for helping me focus, and the interface is clean and simple to use."
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": "15 ${unit} Timer with Music",
          "applicationCategory": "WebApplication",
          "operatingSystem": "All"
        },
        "author": {
          "@type": "Person",
          "name": "Emily Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "datePublished": "2025-02-22",
        "reviewBody": "The 15 ${unit} timer is perfect for my HIIT workouts. The audio alerts are clear and the background music keeps me motivated throughout my exercise routine."
      }],
  },
  30:{
    durationEn:'Thirty',
  },
  default:{
    durationEn:'${duration}',
    name:'${duration} ${unit} timer',
    title:'${duration} ${unit} Timer | ${durationEn} ${unit} Timer | ${duration} ${unit}s timer',
    desc:'Free online ${duration} ${unit} timer with alarm. Easy to use countdown timer perfect for cooking, workouts, studying, and presentations.',
    ratingValue:"4.9",
    ratingCount:"192",
    howTo:{
      "@type": "HowTo",
      "name": "How to Use This ${duration} ${unit} Timer",
      "description": "This free online ${duration} ${unit} timer is perfect for timing various activities. Simply press the Start button to begin the countdown from ${duration}. You can pause at any time and reset to start over.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Start the timer",
          "text": "Press the Start button to begin the countdown from ${duration}."
        },
        {
          "@type": "HowToStep",
          "name": "Toggle music option",
          "text": "Enable or disable background music during your countdown using the music toggle."
        },
        {
          "@type": "HowToStep",
          "name": "Pause or reset",
          "text": "You can pause at any time and reset to start over."
        },
        {
          "@type": "HowToStep",
          "name": "Full Screen mode",
          "text": "Use the Full Screen button for a distraction-free view of your timer."
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Web Browser"
        }
      ]
    },
    faq:{
      "@type": "FAQPage",
      "@id": "https://timercountdown.github.io/timer/${duration}-${unit}-timer.html#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is the ${duration} ${unit} timer free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the ${duration} ${unit} timer is completely free to use with no ads interrupting your focus or workflow."
          }
        },
        {
          "@type": "Question",
          "name": "Does the ${duration} ${unit} timer work on mobile devices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the ${duration} ${unit} timer is fully responsive and works on all devices including smartphones, tablets, and desktop computers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I play background music while using the timer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can toggle background music on or off using the music option while your ${duration} ${unit} countdown is running."
          }
        },
        {
          "@type": "Question",
          "name": "Will I get notified when the timer ends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can receive audio notifications and browser notifications when your ${duration} ${unit} timer completes, even if you're in another tab."
          }
        }
      ]
    },
    reviews:[]
  }
}

export async function generateStaticParams() {
  const params = [];
  constants.timeUnits.forEach(unit => {
    constants.durations.forEach(d => {
      params.push({ slug: `${d}-${unit}-timer` });
      
    });
  });
  return params;
}

interface TimerPageProps {
  params: {
    slug: string;
  };
}

// 遍历函数：递归替换对象和数组中的 `${duration}`
function replacePlaceholders(obj, placeholder, value) {
  if (typeof obj === 'object' && obj !== null) {
      // 如果是数组或对象，递归遍历
      for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
              obj[key] = replacePlaceholders(obj[key], placeholder, value);
          }
      }
  } else if (typeof obj === 'string') {
      // 如果是字符串，进行替换
      return obj.replace(new RegExp(`\\\${${placeholder}}`, 'g'), value);
  }
  return obj;
}

function getMetaInfo({duration,unit}){
  const temp = {...metaMap.default,...metaMap[duration]};
  const metaInfo = replacePlaceholders(
      replacePlaceholders(temp,'duration',duration)
  ,'unit',unit)
  
  metaInfo.title = metaInfo?.title.replace(new RegExp(`\\\${durationEn}`, 'g'), 
    metaInfo.durationEn);
    // console.log(metaInfo)
  return metaInfo;
}

export default async function DynamicTimer({ params }) {
  const { slug } = await params

  const match = slug.match(/^(\d+)-(second|minute|hour|day)-timer$/);
  
  if (!match) {
    notFound();
  }
  
  const count = parseInt(match[1], 10);
  let unit = match[2];
  
  // Set the appropriate timer props based on the unit
  const timerProps = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  switch (unit) {
    case 'second':
      timerProps.seconds = count;
      break;
    case 'minute':
      timerProps.minutes = count;
      break;
    case 'hour':
      timerProps.hours = count;
      break;
    case 'day':
      timerProps.days = count;
      break;
    default:
      notFound();
  }
  
  if (isNaN(count) || count <= 0) {
    notFound();
  }

  const displayTime = `${count} ${unit}`;


  const metaInfo = getMetaInfo({duration:count,unit});
  
  const itemListElement = [];
  let k=0;
  constants.timeUnits.forEach(unit => (
    constants.durations.forEach(d => (
      itemListElement.push({
        "@type": "ListItem",
          "position": k++,
          "url": `https://timercountdown.github.io/timer/${d}-${unit}-timer`,
          "name": `${d} ${unit} Timer`
      })
    ))
  ));

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
        "description": "Free online countdown timers for any purpose. Easy to use timers perfect for cooking, workouts, studying, and presentations."
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
        "@id": `https://timercountdown.github.io/timer/${slug}#webpage`,
        "url": `https://timercountdown.github.io/timer/${slug}`,
        "name": metaInfo.name,
        "isPartOf": {
          "@id": "https://timercountdown.github.io/#website"
        },
        "about": {
          "@id": "https://timercountdown.github.io/#organization"
        },
        "description": metaInfo.desc,
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": metaInfo.name,
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
          "ratingValue": metaInfo.ratingValue,
          "ratingCount": metaInfo.ratingCount,
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://timercountdown.github.io/timer/${slug}#breadcrumblist`,
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
              "@id": `https://timercountdown.github.io/timer/${slug}`,
              "name": metaInfo.name
            }
          }
        ]
      },
      metaInfo.howTo,
      metaInfo.faq,
      ...metaInfo?.reviews,
      {
        "@type": "ItemList",
        "itemListElement": itemListElement
        
      }
    ]
  }

  
  
  return (
    <div className="bg-[#f7f9fc] text-[#2b2d42] leading-normal">
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        
        
        <main>
          <Timer 
           days={timerProps.days}
           hours={timerProps.hours}
           minutes={timerProps.minutes}
           seconds={timerProps.seconds}
          />
          
          <div className="grid md:grid-cols-3 gap-5 my-10">
            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold mb-2">Simple to Use</h3>
              <p className="text-[#555555]">Just press start and the {displayTime} countdown begins immediately. No setup required.</p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold mb-2">Visual Progress</h3>
              <p className="text-[#555555]">Watch the progress bar decrease as time counts down to easily track remaining time.</p>
            </div>
            
            <div className="bg-white rounded-lg p-5 shadow">
              <h3 className="text-xl font-bold mb-2">Audio Alert & Notifications</h3>
              <p className="text-[#555555]">Get notified with sound and browser notifications when your {displayTime} are up, even if you're in another tab.</p>
            </div>
          </div>
          
          <div className="my-10">
            <h2 className="text-2xl font-bold mb-4">How to Use This {displayTime} Timer</h2>
            <p className="mb-5">This free online {displayTime} timer is perfect for timing various activities. Simply press the Start button to begin the countdown from {displayTime}. You can pause at any time and reset to start over.</p>
            
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5 mt-5">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="text-[#3a86ff] font-bold mb-2">Cooking</h4>
                <p className="text-[#555555]">Perfect for timing recipes that need a quick {displayTime} cooking time.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="text-[#3a86ff] font-bold mb-2">Workouts</h4>
                <p className="text-[#555555]">Time your exercise intervals or rest periods during HIIT workouts.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="text-[#3a86ff] font-bold mb-2">Studying</h4>
                <p className="text-[#555555]">Use the Pomodoro technique with {displayTime} sessions or breaks between study periods.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="text-[#3a86ff] font-bold mb-2">Presentations</h4>
                <p className="text-[#555555]">Keep your speeches or meeting contributions concise and on time.</p>
              </div>
            </div>
          </div>
        </main>
        <div className="my-10">
        <h2 className="text-2xl font-bold text-[#2b2d42] mb-4">Related Timers</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {constants.timeUnits.map(unit => (
            constants.durations.map(d => (
              <Link key={d+unit} href={`/timer/${d}-${unit}-timer/`} className="bg-white rounded-lg p-5 shadow no-underline flex flex-col items-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#3a86ff] mb-2">{d} {unit} Timer</h3>
                <p className="text-[#555555] text-center">Need a shorter countdown? Try our {d} {unit} timer for quick tasks.</p>
              </Link>
            ))
          ))}
         
        </div>
      </div>
        
      </div>
    </div>
  );
}

// 为提高SEO效果，添加动态元数据
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const match = slug.match(/^(\d+)-(second|minute|hour|day)-timer$/);
  
  
  const count = parseInt(match[1], 10);
  let unit = match[2];
  
  // 如果不是有效数字，提供默认值
  if (isNaN(count) || count <= 0 ) {
    return {
      title: 'Timer Not Found',
      description: 'The requested timer duration is not available.',
    };
  }

  const metaInfo = getMetaInfo({duration:count,unit});
  
  return {
    title: metaInfo.title,
    description: metaInfo.desc,
    alternates :{
      canonical: `${constants.domain}/timer/${count}-${unit}-timer`,
    }
  };
}