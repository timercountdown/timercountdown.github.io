import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b border-gray-200">
      <Link href="/" className="text-2xl font-bold text-[#3a86ff] no-underline">
        TimerCountdown
      </Link>
      <nav>
        <Link href="/" className="ml-5 text-[#555555] font-medium no-underline hover:text-[#3a86ff]">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;