'use client';

import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import { Calendar } from 'lucide-react';

interface Holiday {
  name: string;
  description: string;
  color: string;
  getNextDate: () => Date;
  icon?: React.ReactNode;
}

const DaysUntil: React.FC = () => {
  const [selectedHoliday, setSelectedHoliday] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<{[key: string]: {days: number, hours: number, minutes: number, seconds: number}}>({}); 
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [nextYear, setNextYear] = useState<number>(new Date().getFullYear() + 1);

  // Define holidays with their next occurrence calculation
  const holidays: { [key: string]: Holiday } = {
    newYear: {
      name: "New Year's Day",
      description: "The first day of the year in the Gregorian calendar, celebrated on January 1st.",
      color: "bg-blue-500",
      getNextDate: () => {
        const today = new Date();
        const nextNewYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
        // If it's still this year before Jan 1, use this year's date
        if (today.getMonth() === 0 && today.getDate() === 1) {
          return today;
        } else if (today < new Date(today.getFullYear(), 0, 1)) {
          return new Date(today.getFullYear(), 0, 1);
        }
        return nextNewYear;
      },
      icon: <span className="text-4xl">🎉</span>
    },
    easter: {
      name: "Easter",
      description: "A Christian holiday celebrating the resurrection of Jesus Christ.",
      color: "bg-purple-500",
      getNextDate: () => {
        // Easter calculation (Meeus/Jones/Butcher algorithm)
        const calculateEaster = (year: number) => {
          const a = year % 19;
          const b = Math.floor(year / 100);
          const c = year % 100;
          const d = Math.floor(b / 4);
          const e = b % 4;
          const f = Math.floor((b + 8) / 25);
          const g = Math.floor((b - f + 1) / 3);
          const h = (19 * a + b - d - g + 15) % 30;
          const i = Math.floor(c / 4);
          const k = c % 4;
          const l = (32 + 2 * e + 2 * i - h - k) % 7;
          const m = Math.floor((a + 11 * h + 22 * l) / 451);
          const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-based month
          const day = ((h + l - 7 * m + 114) % 31) + 1;
          return new Date(year, month, day);
        };

        const today = new Date();
        const currentYearEaster = calculateEaster(today.getFullYear());
        const nextYearEaster = calculateEaster(today.getFullYear() + 1);

        // If today is past this year's Easter, return next year's
        return today > currentYearEaster ? nextYearEaster : currentYearEaster;
      },
      icon: <span className="text-4xl">🐰</span>
    },
    labor: {
      name: "Labor Day",
      description: "A federal holiday honoring the American labor movement, held on the first Monday in September.",
      color: "bg-red-500",
      getNextDate: () => {
        const today = new Date();
        // First Monday in September
        const year = today.getMonth() > 8 ? today.getFullYear() + 1 : today.getFullYear();
        let laborDay = new Date(year, 8, 1); // September 1st
        // Adjust to first Monday
        laborDay.setDate(laborDay.getDate() + (8 - laborDay.getDay()) % 7);
        return laborDay;
      },
      icon: <span className="text-4xl">👷</span>
    },
    thanksgiving: {
      name: "Thanksgiving",
      description: "A national holiday celebrating the harvest and blessings of the past year, held on the fourth Thursday in November.",
      color: "bg-amber-500",
      getNextDate: () => {
        const today = new Date();
        // Fourth Thursday in November
        const year = today.getMonth() > 10 ? today.getFullYear() + 1 : today.getFullYear();
        let thanksgiving = new Date(year, 10, 1); // November 1st
        // Adjust to first Thursday
        thanksgiving.setDate(thanksgiving.getDate() + (4 - thanksgiving.getDay() + 7) % 7);
        // Add 3 weeks to get to fourth Thursday
        thanksgiving.setDate(thanksgiving.getDate() + 21);
        return thanksgiving;
      },
      icon: <span className="text-4xl">🦃</span>
    },
    christmas: {
      name: "Christmas",
      description: "A Christian holiday celebrating the birth of Jesus Christ, widely observed on December 25th.",
      color: "bg-green-600",
      getNextDate: () => {
        const today = new Date();
        const thisYearChristmas = new Date(today.getFullYear(), 11, 25); // December 25th
        const nextYearChristmas = new Date(today.getFullYear() + 1, 11, 25); // December 25th next year
        
        return today > thisYearChristmas ? nextYearChristmas : thisYearChristmas;
      },
      icon: <span className="text-4xl">🎄</span>
    },
    halloween: {
      name: "Halloween",
      description: "A holiday celebrated on October 31st, dedicated to remembering the dead, with activities like trick-or-treating and costume parties.",
      color: "bg-orange-500",
      getNextDate: () => {
        const today = new Date();
        const thisYearHalloween = new Date(today.getFullYear(), 9, 31); // October 31st
        const nextYearHalloween = new Date(today.getFullYear() + 1, 9, 31); // October 31st next year
        
        return today > thisYearHalloween ? nextYearHalloween : thisYearHalloween;
      },
      icon: <span className="text-4xl">🎃</span>
    }
  };

  // Calculate time remaining for all holidays
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
    const initialTimeRemaining: {[key: string]: {days: number, hours: number, minutes: number, seconds: number}} = {};
    
    Object.entries(holidays).forEach(([key, holiday]) => {
      const nextDate = holiday.getNextDate();
      initialTimeRemaining[key] = calculateTimeRemaining(nextDate);
    });
    
    setTimeRemaining(initialTimeRemaining);
    
    // Set default selected holiday (closest upcoming)
    let closestHoliday = Object.entries(holidays)[0][0];
    let shortestTime = Number.MAX_SAFE_INTEGER;
    
    Object.entries(holidays).forEach(([key, holiday]) => {
      const time = holiday.getNextDate().getTime() - new Date().getTime();
      if (time > 0 && time < shortestTime) {
        shortestTime = time;
        closestHoliday = key;
      }
    });
    
    setSelectedHoliday(closestHoliday);

    // Update current and next year
    setCurrentYear(new Date().getFullYear());
    setNextYear(new Date().getFullYear() + 1);

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

  // Format date to display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (!selectedHoliday) return <div className="text-center py-10">Loading holidays...</div>;

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Days Until Major Holidays</h1>
      
      {/* Holiday selection tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(holidays).map(([key, holiday]) => (
          <button
            key={key}
            onClick={() => setSelectedHoliday(key)}
            className={`px-4 py-2 rounded-full font-medium transition-all 
              ${selectedHoliday === key 
                ? `${holiday.color} text-white shadow-lg` 
                : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {holiday.name}
          </button>
        ))}
      </div>
      
      {/* Selected holiday display */}
      {selectedHoliday && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className={`${holidays[selectedHoliday].color} py-6 px-8 text-white`}>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold">{holidays[selectedHoliday].name}</h2>
                <p className="text-white/80 mt-1">
                  {formatDate(holidays[selectedHoliday].getNextDate())}
                </p>
              </div>
              <div className="flex items-center">
                {holidays[selectedHoliday].icon}
                <Calendar className="w-10 h-10 ml-3" />
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-8">
              {holidays[selectedHoliday].description}
            </p>
            
            {/* Timer component using the expanded Timer for the selected holiday */}
            {timeRemaining[selectedHoliday] && (
              <Timer 
                days={timeRemaining[selectedHoliday].days}
                hours={timeRemaining[selectedHoliday].hours}
                minutes={timeRemaining[selectedHoliday].minutes}
                seconds={timeRemaining[selectedHoliday].seconds}
              />
            )}
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
                onClick={() => setSelectedHoliday(key)}
                className={`rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer transition-all
                  ${selectedHoliday === key ? 'ring-4 ring-blue-400' : ''}
                `}
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
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHoliday(key);
                      // Scroll to timer
                      document.querySelector('.bg-white.rounded-xl.shadow-lg')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                      });
                    }}
                    className="mt-3 w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Countdown
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DaysUntil;