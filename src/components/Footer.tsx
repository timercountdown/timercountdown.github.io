import { constants } from '@/utils/constants';
import Link from 'next/link';
import TrustBox from './TrustBox';

const Footer = () => {

  return (
    <footer className="text-center py-5 border-t border-gray-200 text-[#777777] mt-10">
      
      
      <p>&copy; 2025 TimerCountdown. All rights reserved. 
        <Link href="/privacy-policy/" className="text-[#3a86ff] no-underline ml-1">Privacy Policy</Link> | 
        <Link href="/terms-of-use/" className="text-[#3a86ff] no-underline ml-1">Terms of Use</Link>
      </p>
    </footer>
  );
};

export default Footer;