// PrivacyPolicy.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateMetadata() {
  return {
    title: `Privacy Policy | TimerCountdown`,
    description: `Privacy Policy for TimerCountdown - Learn how we protect your privacy and use cookies.`
  };
}

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | TimerCountdown</title>
        <meta name="description" content="Privacy Policy for TimerCountdown - Learn how we protect your privacy and use cookies." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
        
      
      </Head>
      
     

      <div className="bg-background text-text-primary leading-normal">
        <div className="max-w-screen-lg mx-auto px-5 py-5">
          <Header />
          
          <main className="my-8">
            <div className="bg-card rounded-xl shadow-md p-8">
              <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
              
              <p className="mb-6 italic">If you have any questions about our privacy policy, please feel free to contact us by email.</p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Analytics Cookies</h2>
                  <p className="mb-3">We use Google Analytics to help us improve the site. Nothing specifically about YOU – just combined data from everyone. For example; <em>Everyone likes the Duck Race, we&apos;ll make another Race Timer!</em></p>
                  <p className="mb-3">We offer a cookie to our <strong>Premium Users</strong>; you can <strong>OPTIONALLY</strong> set a cookie to remember you. This means you don&apos;t have to log in each time you visit the site. When you log in – the option is a: &quot;Remember me&quot; check box.</p>
                  <p>You can find out more about cookies here: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/technologies/cookies</a></p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Advertising Cookies</h2>
                  <p className="mb-3">We use Google AdSense for our advertising, which requires cookies to work.</p>
                  <p className="mb-3"><strong>Non-EU Visitors</strong> – cookies are used to show you personalised adverts based on the sites you&apos;ve visited and your interests.</p>
                  <p className="mb-3"><strong>EU Visitors</strong> – only non-personalised adverts will be shown – and only cookies needed to make the service work are used – not related to your privacy.</p>
                  <p>You can change your Google AdSense advert preferences here: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a></p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Other Privacy Information</h2>
                  <p className="mb-3">We use a secure 256bit SSL certificate and use Cloudflare for speed and security!</p>
                  <p className="mb-3"><strong>Regular site users:</strong> Apart from the cookies mentioned above, we don&apos;t ask for – or store any personal information about you.</p>
                  <p className="mb-3"><strong>Premium site users:</strong> Apart from the cookies mentioned above, we store the data you submit (your settings, options, lists) in a secure database. Only the data you want is stored. This can be reviewed, edited, deleted by you at any time.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">User Data</h2>
                  <p>You need to read and agree to our User Data Terms - it explains how we store non-personal data you upload to the site.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Contacting Us</h2>
                  <p>If you contact us – we do not share your email address or details with anyone.</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Changes to Privacy Policy</h2>
                  <p>We may, at any time, change this Privacy Policy with or without notice. Any modification will be effective immediately. Your continued use of our site and services constitutes your acceptance of the changes.</p>
                </section>
              </div>
              
              <div className="mt-10 p-4 bg-blue-50 rounded-lg">
                <p className="text-center"><strong>Last Updated:</strong> April 11, 2025</p>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;