import HolidayPageClient from "./page-client";




const HolidayPage: React.FC = async () => {
 

    return <HolidayPageClient />
}

export async function generateMetadata() {
  return {
    title: `How many days until holiday`,
    description: `Countdown to holiday`,
  }
}

export default HolidayPage;