import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { use } from 'react';

export default function Cookies({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);

  return (
    <>
      <Navbar lang={lang} />
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cookie <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Last updated: July 1, 2023
          </p>
          
          <div className="prose prose-lg max-w-3xl">
            <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to 
              the website owners. Cookies enhance your browsing experience by allowing websites to 
              remember your preferences and understand how you use their services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How we use cookies</h2>
            <p>
              TravelMoney uses cookies for several purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the operation of our app and website. They enable core functionality such as security and user authentication.</li>
              <li><strong>Analytical/performance cookies:</strong> Help us understand how visitors interact with our platforms by collecting and reporting information anonymously.</li>
              <li><strong>Functionality cookies:</strong> Allow us to remember choices you make and provide enhanced, personalized features.</li>
              <li><strong>Targeting cookies:</strong> Record your visit to our app and website, the pages you have visited, and the links you have followed to improve your experience and make our advertising more relevant.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Managing cookies</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to 
              refuse cookies, or to alert you when cookies are being sent. However, if you disable or 
              refuse cookies, please note that some parts of our app or website may not function properly.
            </p>
            <p>
              You can generally modify your browser settings to decline cookies if you prefer. This can be done through your browser&apos;s settings menu. The procedures for managing cookies vary slightly between different browsers:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
              <li>Safari: Preferences → Privacy</li>
              <li>Firefox: Options → Privacy & Security</li>
              <li>Internet Explorer/Edge: Tools → Internet Options → Privacy</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Types of cookies we use</h2>
            <h3 className="text-xl font-medium mt-6 mb-2">Session cookies</h3>
            <p>
              These are temporary cookies that remain in your browser&apos;s cookie file until you leave the website. 
              They enable certain site functionalities like remembering your form inputs when navigating through the app.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-2">Persistent cookies</h3>
            <p>
              These remain in your browser&apos;s cookie file for a longer period (depending on the lifetime of the specific cookie). 
              They help us recognize returning users and remember your preferences for future visits.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-party cookies</h2>
            <p>
              TravelMoney also allows certain third parties to place cookies on your device when you use our app or website. 
              These cookies help us analyze how users navigate through our platforms and help us improve our services.
              We use third-party services such as Google Analytics, which place cookies to help us analyze how users 
              use our app and website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to our cookie policy</h2>
            <p>
              We may update our Cookie Policy from time to time. Any changes will be posted on this page, and if the 
              changes are significant, we will provide a more prominent notice.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> support@travelmoney.app<br />
              <strong>Address:</strong> 14 rue Charles V 75004 Paris, France
            </p>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
