import React from 'react';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import { CardContent ,Card } from '@/app/components/ui/card';
import { Building, Globe, Target, Users, ShoppingBag, Wallet, Award } from 'lucide-react';
import { use } from 'react';

export default function About({
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
            About <span className="text-gradient">TravelMoney</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mb-12">
            TravelMoney is revolutionizing the VAT refund experience for non-EU tourists visiting France.
          </p>
          
          <div className="space-y-12 max-w-4xl">
            <section className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-3">
                <Users className="text-travel-blue" /> Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                Our mission at TravelMoney is simple: to make VAT refund processing effortless and rewarding for international tourists visiting France. We&apos;re dedicated to transforming a traditionally complex, paper-heavy process into a seamless digital experience that puts more money back in travelers&apos; pockets, faster.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-3">
                <Building className="text-travel-blue" /> Who We Are
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded by a team of travel enthusiasts with backgrounds in fintech and tourism, TravelMoney was born from our own frustrations with the traditional VAT refund process. We combine expertise in international finance, digital technology, and customer experience to deliver a revolutionary approach to tax-free shopping in France.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <ShoppingBag className="text-travel-blue" /> What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Award size={20} className="text-travel-blue" />
                      Industry-Leading Refund Rates
                    </h3>
                    <p className="text-muted-foreground">
                      We provide the highest VAT refund rates in the industry, with fees as low as 0% for eligible purchases. Our transparent pricing means more of your money comes back to you.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Wallet size={20} className="text-travel-blue" />
                      Fast, Secure Processing
                    </h3>
                    <p className="text-muted-foreground">
                      Receive your refunds in as little as 7 days, with instant options available for premium users. Our secure digital wallet gives you flexibility in how you receive and use your refunds.
                    </p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Globe size={20} className="text-travel-blue" />
                      100% Digital Experience
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Say goodbye to paperwork and long lines. Our fully digital platform handles everything from receipt scanning to customs validation, with real-time tracking so you always know where your refund stands.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-3">
                <Target className="text-travel-blue" /> Our Vision
              </h2>
              <p className="text-lg text-muted-foreground">
                We envision a world where international travelers can enjoy the full benefits of tax-free shopping without the associated hassle. By continually innovating and expanding our services, we aim to become the global standard for VAT refund processing, starting with our focus on delivering an exceptional experience in France.
              </p>
            </section>
            
            <section className="bg-travel-gray-light p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Ready to maximize your shopping savings?</h2>
              <p className="mb-6">Download the TravelMoney app today and transform your shopping experience in France.</p>
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-travel-blue hover:bg-travel-blue-dark text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-spring"
              >
                Download on iOS
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
