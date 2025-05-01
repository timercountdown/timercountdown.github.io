// app/days-until/page.tsx - Main index page
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Calendar } from 'lucide-react';
import { holidays } from '../lib/holiday';

const DaysUntilIndex: React.FC = () => {
  const router = useRouter();
  const [timeRemaining, setTimeRemaining] = React.useState<{[key: string]: {days: number, hours: number, minutes: number, seconds: number}}>({}); 

  // Calculate time remaining for all holidays
  React.useEffect(() => {
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
    const initialTimeRemaining: {[key: string]: {days: number, hours: number, minutes: number, seconds: number}} = {};
    
    Object.entries(holidays).forEach(([key, holiday]) => {
      const nextDate = holiday.getNextDate();
      initialTimeRemaining[key] = calculateTimeRemaining(nextDate);
    });
    
    setTimeRemaining(initialTimeRemaining);

    // Update countdown every second
    const intervalId = setInterval(() => {
      const updatedTimeRemaining: {[key: string]: {days: number, hours: number, minutes: number, seconds: number}} = {};
      
      Object.entries(holidays).forEach(([key, holiday]) => {
        const nextDate = holiday.getNextDate();
        updatedTimeRemaining[key] = calculateTimeRemaining(nextDate);
      });
      
      setTimeRemaining(updatedTimeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Find the closest upcoming holiday
  const findClosestHoliday = () => {
    let closestHoliday = Object.entries(holidays)[0][0];
    let shortestTime = Number.MAX_SAFE_INTEGER;
    
    Object.entries(holidays).forEach(([key, holiday]) => {
      const time = holiday.getNextDate().getTime() - new Date().getTime();
      if (time > 0 && time < shortestTime) {
        shortestTime = time;
        closestHoliday = key;
      }
    });
    
    return closestHoliday;
  };

  // Format date to display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Days Until Major Holidays</h1>
      
      {/* Featured closest holiday */}
      {Object.keys(timeRemaining).length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Coming Up Soon</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {(() => {
              const closestKey = findClosestHoliday();
              const holiday = holidays[closestKey];
              return (
                <>
                  <div className={`${holiday.color} py-6 px-8 text-white`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-3xl font-bold">{holiday.name}</h2>
                        <p className="text-white/80 mt-1">
                          {formatDate(holiday.getNextDate())}
                        </p>
                      </div>
                      <div className="flex items-center">
                        {holiday.icon}
                        <Calendar className="w-10 h-10 ml-3" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      {holiday.description}
                    </p>
                    <Link href={`/days-until/${closestKey}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
                        View Full Countdown
                      </button>
                    </Link>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
      
      {/* Holiday cards grid */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">All Upcoming Holidays</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(holidays).map(([key, holiday]) => {
            const nextDate = holiday.getNextDate();
            const upcoming = timeRemaining[key];
            
            return (
              <div 
                key={key}
                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
              >
                <div className={`${holiday.color} py-4 px-5 text-white`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{holiday.name}</h3>
                    {holiday.icon}
                  </div>
                </div>
                
                <div className="bg-white p-5">
                  <p className="text-sm text-gray-500 mb-2">
                    {formatDate(nextDate)}
                  </p>
                  
                  {upcoming && (
                    <div className="flex gap-3 text-center mt-3">
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{upcoming.days}</div>
                        <div className="text-xs text-gray-500">days</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{upcoming.hours}</div>
                        <div className="text-xs text-gray-500">hours</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{upcoming.minutes}</div>
                        <div className="text-xs text-gray-500">mins</div>
                      </div>
                    </div>
                  )}
                  
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



export default DaysUntilIndex;