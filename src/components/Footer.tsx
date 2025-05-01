import { constants } from '@/utils/constants';
import Link from 'next/link';
import TrustBox from './TrustBox';

const Footer = () => {
  const durations = constants.durations;

  return (
    <footer className="text-center py-5 border-t border-gray-200 text-[#777777] mt-10">
      <div className="my-10">
        <h2 className="text-2xl font-bold text-[#2b2d42] mb-4">Related Timers</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {durations.map(duration =>(
            <Link key={duration} href={`/timer/${duration}-minute-timer/`} className="bg-white rounded-lg p-5 shadow no-underline flex flex-col items-center hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-[#3a86ff] mb-2">{duration} Minute Timer</h3>
            <p className="text-[#555555] text-center">Need a shorter countdown? Try our {duration} minute timer for quick tasks.</p>
          </Link>
          ))}
         
        </div>
      </div>
      
      <p>&copy; 2025 TimerCountdown. All rights reserved. 
        <Link href="/privacy-policy/" className="text-[#3a86ff] no-underline ml-1">Privacy Policy</Link> | 
        <Link href="/terms-of-use/" className="text-[#3a86ff] no-underline ml-1">Terms of Use</Link>
      </p>
    </footer>
  );
};

export default Footer;