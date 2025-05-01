import HolidayPageClient from "./page-client";
import { holidays } from '@/app/lib/holiday';




const HolidayPage: React.FC = async ({ params }) => {
    const xparams = await params

    return <HolidayPageClient params={xparams} />
}

export async function generateStaticParams() {
  
    return Object.keys(holidays).map(d =>{return {slug:`${d}`}});
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Check if the holiday exists
  if (!holidays[slug]) {
    return {
      title: 'Holiday Not Found',
      description: 'The requested holiday countdown was not found.',
    };
  }
  
  const holiday = holidays[slug];
  const nextDate = holiday.getNextDate();
  
  // Format date for display
  const formattedDate = nextDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Calculate days until
  const now = new Date();
  const difference = nextDate.getTime() - now.getTime();
  const daysUntil = Math.floor(difference / (1000 * 60 * 60 * 24));
  
  return {
    title: `How many days until ${holiday.name} (${formattedDate})`,
    description: `Countdown to ${holiday.name}. Find out exactly how many days, hours, minutes, and seconds until ${holiday.name} on ${formattedDate}.`,
    keywords: [`${holiday.name} countdown`, `days until ${holiday.name}`, `${holiday.name} ${nextDate.getFullYear()}`, 'holiday countdown', 'event countdown'],
    openGraph: {
      title: `How many days until ${holiday.name}`,
      description: `Countdown to ${holiday.name} on ${formattedDate}. Track the exact days, hours, minutes and seconds remaining.`,
      type: 'website',
    },
  };
}

export default HolidayPage;