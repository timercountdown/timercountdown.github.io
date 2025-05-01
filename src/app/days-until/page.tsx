import HolidayPageClient from "./page-client";


interface PageProps {
    params: {
      slug: string;
    };
  }

const HolidayPage: React.FC<PageProps> = async ({ params }) => {
 

    return <HolidayPageClient />
}

export async function generateMetadata({ params }) {
  return {
    title: `How many days until holiday`,
    description: `Countdown to holiday`,
  }
}

export default HolidayPage;