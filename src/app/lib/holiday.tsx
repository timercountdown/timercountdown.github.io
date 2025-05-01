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
  }
};