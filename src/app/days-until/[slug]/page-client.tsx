'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { holidays } from '@/app/lib/holiday';

interface PageProps {
  params: {
    slug: string;
  };
}

// CountdownTimer component replaces the imported Timer
const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="text-4xl font-bold text-gray-800">{days}</div>
        <div className="text-gray-500 mt-1">days</div>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="text-4xl font-bold text-gray-800">{hours}</div>
        <div className="text-gray-500 mt-1">hours</div>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="text-4xl font-bold text-gray-800">{minutes}</div>
        <div className="text-gray-500 mt-1">minutes</div>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="text-4xl font-bold text-gray-800">{seconds}</div>
        <div className="text-gray-500 mt-1">seconds</div>
      </div>
    </div>
  );
};

const HolidayPageClient: React.FC<PageProps> = ({ params }) => {
  const { slug } =  params
 
  const [timeRemaining, setTimeRemaining] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);
  
  // Check if the holiday exists
  if (!holidays[slug]) {
    notFound();
  }
  
  const holiday = holidays[slug];

  useEffect(() => {
    // Function to calculate days, hours, minutes, seconds difference
    const calculateTimeRemaining = (targetDate: Date) => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { days, hours, minutes, seconds };
    };

    // Initial calculation
    const nextDate = holiday.getNextDate();
    setTimeRemaining(calculateTimeRemaining(nextDate));
    
    // Set up interval to update countdown every second
    const intervalId = setInterval(() => {
      const nextDate = holiday.getNextDate();
      setTimeRemaining(calculateTimeRemaining(nextDate));
    }, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [holiday]);

  // Format date to display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!timeRemaining) {
    return <div className="text-center py-10">Loading countdown...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <Link href="/days-until" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all holidays
      </Link>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
        <div className={`${holiday.color} py-8 px-8 text-white`}>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">{holiday.name}</h1>
              <p className="text-white/80 mt-2">
                {formatDate(holiday.getNextDate())}
              </p>
            </div>
            <div className="flex items-center">
              {holiday.icon}
              <Calendar className="w-12 h-12 ml-3" />
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Countdown to {holiday.name}</h2>
            {/* Using the new CountdownTimer component */}
            <CountdownTimer 
              days={timeRemaining.days}
              hours={timeRemaining.hours}
              minutes={timeRemaining.minutes}
              seconds={timeRemaining.seconds}
            />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About {holiday.name}</h2>
            <p className="text-gray-600">
              {holiday.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Other holidays section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Other Upcoming Holidays</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(holidays)
            .filter(([key]) => key !== slug) // Exclude current holiday
            .map(([key, otherHoliday]) => {
              const nextDate = otherHoliday.getNextDate();
              
              // Calculate time remaining for this holiday
              const now = new Date();
              const difference = nextDate.getTime() - now.getTime();
              const days = Math.floor(difference / (1000 * 60 * 60 * 24));
              const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
              
              return (
                <div key={key} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
                  <div className={`${otherHoliday.color} py-4 px-5 text-white`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">{otherHoliday.name}</h3>
                      {otherHoliday.icon}
                    </div>
                  </div>
                  
                  <div className="bg-white p-5">
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(nextDate)}
                    </p>
                    
                    <div className="flex gap-3 text-center mt-3">
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{days}</div>
                        <div className="text-xs text-gray-500">days</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{hours}</div>
                        <div className="text-xs text-gray-500">hours</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{minutes}</div>
                        <div className="text-xs text-gray-500">mins</div>
                      </div>
                    </div>
                    
                    <Link href={`/days-until/${key}`} className="block">
                      <button 
                        className="mt-3 w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                      >
                        View Countdown
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HolidayPageClient;