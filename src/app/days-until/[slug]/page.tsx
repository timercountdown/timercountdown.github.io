import HolidayPageClient from "./page-client";
import { holidays } from '@/app/lib/holiday';
import Link from 'next/link';

export default async function HolidayPage({ params }){
    const xparams = await params

    return <HolidayPageClient params={xparams} />
}

export async function generateStaticParams() {
    return Object.keys(holidays).map(d =>{return {slug:`${d}`}});
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  if (!holidays[slug]) {
    return {
      title: 'Holiday Not Found',
      description: 'The requested holiday countdown was not found.',
    };
  }
  
  const holiday = holidays[slug];
  const nextDate = holiday.getNextDate();
  
  const formattedDate = nextDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const now = new Date();
  const difference = nextDate.getTime() - now.getTime();
  const daysUntil = Math.floor(difference / (1000 * 60 * 60 * 24));
  
  return {
    title: `How Many Days Until ${holiday.name}? (${formattedDate})`,
    description: `Countdown to ${holiday.name}. Find out exactly how many days, hours, minutes, and seconds until ${holiday.name} on ${formattedDate}. Live countdown timer.`,
    keywords: [`${holiday.name} countdown`, `days until ${holiday.name}`, `${holiday.name} ${nextDate.getFullYear()}`, 'holiday countdown', 'event countdown', 'days until holidays'],
    alternates: {
      canonical: `/days-until/${slug}`,
    },
    openGraph: {
      title: `How Many Days Until ${holiday.name}?`,
      description: `Countdown to ${holiday.name} on ${formattedDate}. Live countdown with days, hours, minutes and seconds.`,
      type: 'website',
    },
  };
}
