// TermsOfUse.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata() {
  return {
    title: `Terms of Use | TimerCountdown`,
    description: `Terms of Use for TimerCountdown - Free online countdown timers`
  };
}

const TermsOfUse: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | TimerCountdown</title>
        <meta name="description" content="Terms of Use for TimerCountdown - Free online countdown timers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Arial:wght@400;500;700&display=swap" rel="stylesheet" />
        
      
      </Head>
      
     
      <div className="bg-background text-text-primary leading-normal">
        <div className="max-w-screen-lg mx-auto px-5 py-5">
          <Header />
          
          <main>
            <div className="bg-card rounded-xl shadow-md p-8 my-8">
              <h1 className="text-3xl font-bold mb-5 text-text-primary text-center">Terms of Use</h1>
              <div className="my-6 border-b border-gray-200"></div>
              
              <div className="prose max-w-none">
                <p className="mb-4">Using our site and service is acceptance of the following terms and conditions. Please read them carefully.</p>
                
                <h2 className="text-xl font-bold text-primary mt-8 mb-2">Tools</h2>
                <p className="mb-4">In these terms, the word &quot;tools&quot; refers to our timers, countdowns, apps, resources, and other offerings on the TimerCountdown site.</p>
                
                <h2 className="text-xl font-bold text-primary mt-8 mb-2">Usage</h2>
                <p className="mb-4">Our tools are <span className="font-bold">FREE</span> to use for private and commercial use! Yay!!</p>
                <p className="mb-4">No need to contact us to request permission - just use them how you want. If you&apos;re doing something cool with our tools – email us – just because we&apos;d like to know, but you don&apos;t have to :-)</p>
                
                <h2 className="text-xl font-bold text-primary mt-8 mb-2">Privacy Policy</h2>
                <p className="mb-4">You need to read and agree to our <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link> - it explains how your personal data is used by us.</p>
                
                <h2 className="text-xl font-bold text-primary mt-8 mb-2">User Data</h2>
                <p className="mb-4">You need to read and agree to our User Data Terms - it explains how we store non-personal data you upload to the site.</p>
                
                <h2 className="text-xl font-bold text-primary mt-8 mb-2">Browser Requirements</h2>
                <p className="mb-4">We only support the latest versions of the most popular browsers – Chrome, Firefox, Edge, IE11, Safari.</p>
                <p className="mb-4">But... You are free to use any browser you want! A lot of our tools will still work - but we will only offer support for the above browsers.</p>
                
                <h2 className="text-xl font-bold text-primary mt-8 mb-2">What&apos;s Not Allowed</h2>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li>Don&apos;t change or modify our code.</li>
                  <li>Don&apos;t remove or hide the &quot;TimerCountdown&quot; link – it helps us get more visitors :-)</li>
                  <li>Don&apos;t put our tools on similar sites, e.g. stopwatch/timer/resource sites.</li>
                  <li>Don&apos;t sell our tools – they are free for everyone to use! BUT if you are selling a course / book / video – that uses one of our tools – that&apos;s fine. (As it&apos;s not actually the timer you are selling)</li>
                </ol>
                
                <h2 className="text-xl font-bold text-primary mt-8 mb-2">Liability</h2>
                <p className="mb-4">We take no responsibility for any losses or problems – You use our site, services, tools at your own risk. (This includes but is not limited to: loss of profits, inaccuracies, work stoppage, errors, access, loss of data, personal injury or property damage.)</p>
                <p className="mb-4">This includes the accuracy of our timers/tools and Public Holidays / Dates/ Events countdowns / translations of the site / translations of the tools. We&apos;ve tried to make everything as accurate as possible, and if you report a problem – we&apos;ll fix it – but we don&apos;t accept any responsibility for losses caused.</p>
                
                <h2 className="text-xl font-bold text-primary mt-8 mb-2">Changes</h2>
                <p className="mb-4">We may, at any time, change these Terms with or without notice. Any modification will be effective immediately. Your continued use of our site and services constitutes your acceptance of these new Terms.</p>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TermsOfUse;