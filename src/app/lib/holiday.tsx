import React from 'react';

export interface Holiday {
  name: string;
  description: string;
  color: string;
  getNextDate: () => Date;
  icon?: React.ReactNode;
}

// Define holidays with their next occurrence calculation
export const holidays: { [key: string]: Holiday } = {
  newyear: {
    name: "New Year's Day",
    description: "The first day of the year in the Gregorian calendar, celebrated on January 1st. It's a time for new beginnings, resolutions, and celebrations around the world with fireworks, parties, and special traditions.",
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
    description: "A Christian holiday celebrating the resurrection of Jesus Christ. Easter is celebrated on the first Sunday following the full moon after the vernal equinox, typically falling between late March and late April.",
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
    description: "A federal holiday in the United States honoring the American labor movement, held on the first Monday in September. It celebrates the contributions workers have made to the strength, prosperity, and well-being of the country.",
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
    description: "A national holiday celebrating the harvest and blessings of the past year, held on the fourth Thursday in November in the United States. It's traditionally celebrated with family gatherings, feasts featuring turkey, and expressions of gratitude.",
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
    description: "A Christian holiday celebrating the birth of Jesus Christ, widely observed on December 25th. Christmas has also become a secular family holiday celebrated by Christians and non-Christians alike, characterized by gift-giving, decorations, and gatherings.",
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
    description: "A holiday celebrated on October 31st, dedicated to remembering the dead, with activities like trick-or-treating, attending costume parties, carving pumpkins, and visiting haunted attractions. Its roots are in the ancient Celtic festival of Samhain.",
    color: "bg-orange-500",
    getNextDate: () => {
      const today = new Date();
      const thisYearHalloween = new Date(today.getFullYear(), 9, 31); // October 31st
      const nextYearHalloween = new Date(today.getFullYear() + 1, 9, 31); // October 31st next year
      
      return today > thisYearHalloween ? nextYearHalloween : thisYearHalloween;
    },
    icon: <span className="text-4xl">🎃</span>
  },
  valentine: {
    name: "Valentine's Day",
    description: "A holiday celebrated on February 14th, dedicated to love and romance. It's traditionally marked by exchanging cards, flowers, chocolates, and gifts between loved ones as an expression of affection.",
    color: "bg-pink-500",
    getNextDate: () => {
      const today = new Date();
      const thisYearValentine = new Date(today.getFullYear(), 1, 14); // February 14th
      const nextYearValentine = new Date(today.getFullYear() + 1, 1, 14); // February 14th next year
      
      return today > thisYearValentine ? nextYearValentine : thisYearValentine;
    },
    icon: <span className="text-4xl">❤️</span>
  },
  spring: {
    name: "Spring Equinox",
    description: "The spring equinox marks the beginning of spring in the Northern Hemisphere, typically occurring around March 20th. It's the moment when day and night are of approximately equal duration and represents renewal and growth.",
    color: "bg-green-400",
    getNextDate: () => {
      // Approximate calculation for Spring Equinox (varies slightly year to year)
      const today = new Date();
      const year = today.getMonth() > 2 || (today.getMonth() === 2 && today.getDate() > 20) 
        ? today.getFullYear() + 1 
        : today.getFullYear();
      return new Date(year, 2, 20); // March 20th as approximation
    },
    icon: <span className="text-4xl">🌱</span>
  },
  summer: {
    name: "Summer Solstice",
    description: "The summer solstice marks the beginning of summer in the Northern Hemisphere, usually occurring around June 21st. It's the longest day of the year and has been celebrated in various cultures as a time of light and abundance.",
    color: "bg-yellow-500",
    getNextDate: () => {
      const today = new Date();
      const year = today.getMonth() > 5 || (today.getMonth() === 5 && today.getDate() > 21) 
        ? today.getFullYear() + 1 
        : today.getFullYear();
      return new Date(year, 5, 21); // June 21st as approximation
    },
    icon: <span className="text-4xl">☀️</span>
  },
  fall: {
    name: "Fall Equinox",
    description: "The fall equinox marks the beginning of autumn in the Northern Hemisphere, typically occurring around September 22nd. It's when day and night are of approximately equal length and represents the harvest season and preparation for winter.",
    color: "bg-amber-600",
    getNextDate: () => {
      const today = new Date();
      const year = today.getMonth() > 8 || (today.getMonth() === 8 && today.getDate() > 22) 
        ? today.getFullYear() + 1 
        : today.getFullYear();
      return new Date(year, 8, 22); // September 22nd as approximation
    },
    icon: <span className="text-4xl">🍂</span>
  },
  autumn: {
    name: "Autumn",
    description: "Autumn is another term for fall, the season between summer and winter. It's characterized by cooling temperatures and the changing colors of leaves in many regions, creating spectacular natural landscapes.",
    color: "bg-orange-400",
    getNextDate: () => {
      const today = new Date();
      const year = today.getMonth() > 8 || (today.getMonth() === 8 && today.getDate() > 22) 
        ? today.getFullYear() + 1 
        : today.getFullYear();
      return new Date(year, 8, 22); // September 22nd as approximation (same as fall)
    },
    icon: <span className="text-4xl">🍁</span>
  },
  winter: {
    name: "Winter Solstice",
    description: "The winter solstice marks the beginning of winter in the Northern Hemisphere, usually occurring around December 21st. It's the shortest day of the year and has been celebrated in many cultures as a time of rebirth and the return of light.",
    color: "bg-blue-300",
    getNextDate: () => {
      const today = new Date();
      const year = today.getMonth() > 11 || (today.getMonth() === 11 && today.getDate() > 21) 
        ? today.getFullYear() + 1 
        : today.getFullYear();
      return new Date(year, 11, 21); // December 21st as approximation
    },
    icon: <span className="text-4xl">❄️</span>
  },
  ramadan: {
    name: "Ramadan",
    description: "The holy month of Ramadan is the ninth month of the Islamic calendar and is observed by Muslims worldwide as a month of fasting, prayer, reflection, and community. It commemorates the first revelation of the Quran to Muhammad according to Islamic belief.",
    color: "bg-emerald-600",
    getNextDate: () => {
      // Islamic calendar is lunar and shifts about 11 days earlier each year in the Gregorian calendar
      // This is a simplified approximation as actual calculation is complex and depends on moon sighting
      const today = new Date();
      
      // Approximate Ramadan start dates for upcoming years (will need to be updated periodically)
      const ramadanStartDates = {
        2025: new Date(2025, 2, 1), // March 1, 2025
        2026: new Date(2026, 1, 19), // February 19, 2026
        2027: new Date(2027, 1, 8), // February 8, 2027
        2028: new Date(2028, 0, 29), // January 29, 2028
        2029: new Date(2029, 0, 17)  // January 17, 2029
      };
      
      // Find the next Ramadan date
      const currentYear = today.getFullYear();
      let nextRamadan = null;
      
      // Check this year and future years
      for (let year = currentYear; year <= 2029; year++) {
        if (ramadanStartDates[year] && today <= ramadanStartDates[year]) {
          nextRamadan = ramadanStartDates[year];
          break;
        }
      }
      
      // If no date found or past all listed dates, use first available future date
      if (!nextRamadan) {
        // Find the earliest date after today
        const futureYears = Object.keys(ramadanStartDates)
          .filter(year => parseInt(year) > currentYear)
          .sort((a, b) => parseInt(a) - parseInt(b));
        
        if (futureYears.length > 0) {
          nextRamadan = ramadanStartDates[futureYears[0]];
        } else {
          // Fallback if no future dates are defined
          nextRamadan = new Date(currentYear + 1, 2, 1); // Approximate placeholder
        }
      }
      
      return nextRamadan;
    },
    icon: <span className="text-4xl">☪️</span>
  },
  palmSunday: {
    name: "Palm Sunday",
    description: "Palm Sunday is a Christian moveable feast that falls on the Sunday before Easter. It commemorates Jesus's triumphal entry into Jerusalem, when palm branches were placed in his path, before his arrest and crucifixion days later.",
    color: "bg-lime-600",
    getNextDate: () => {
      // Palm Sunday is the Sunday before Easter
      // First calculate Easter date using the existing algorithm
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
      
      // Calculate Palm Sunday (1 week before Easter)
      const currentYearPalmSunday = new Date(currentYearEaster);
      currentYearPalmSunday.setDate(currentYearEaster.getDate() - 7);
      
      const nextYearPalmSunday = new Date(nextYearEaster);
      nextYearPalmSunday.setDate(nextYearEaster.getDate() - 7);
      
      // If today is past this year's Palm Sunday, return next year's
      return today > currentYearPalmSunday ? nextYearPalmSunday : currentYearPalmSunday;
    },
    icon: <span className="text-4xl">🌿</span>
  }
};