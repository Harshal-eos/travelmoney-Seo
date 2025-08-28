"use client";

import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Button } from "../../components/ui/button";
import { Store, CheckCircle, Globe } from "lucide-react";
import Image from "next/image";
import MerchantApplicationForm from "../../merchant-form/MerchantApplicationForm";

interface MerchantsContentProps {
  lang: string;
}

export default function MerchantsContent({ lang }: MerchantsContentProps) {
  const [formOpen, setFormOpen] = useState(false);

  const openApplicationForm = () => {
    setFormOpen(true);
  };

  return (
    <>
      <Navbar lang={lang} />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Join TravelMoney as a{" "}
                <span className="text-gradient">Merchant Partner</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Unlock the €70B+ tax-free shopping market without a physical
                store. TravelMoney connects your digital business to
                high-spending global tourists who were previously unreachable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-travel-blue hover:bg-travel-blue-dark text-white font-medium rounded-full transition-spring"
                  onClick={openApplicationForm}
                >
                  Become a Partner
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-travel-blue text-travel-blue hover:bg-travel-blue/10 transition-spring"
                  onClick={openApplicationForm}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div
                className="w-[400px] aspect-[9/19.5] animate-fade-up"
                style={{ animationDelay: "1200ms" }}
              >
                <Image
                  src="/lovable-uploads/1d4a3652-6df9-4c16-9f3e-0ca628f191b5.png"
                  alt="TravelMoney Merchant App"
                  width={340}
                  height={740}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-travel-steel/5 py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Benefits for Merchants
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our seamless VAT refund platform creates a frictionless shopping
                experience that converts browsers into loyal customers. While
                traditional operators ignore online retailers, we&apos;re
                building the future of tax-free shopping—with you at the center.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-travel-blue/10 p-3 rounded-full w-fit mb-4">
                  <Store className="h-6 w-6 text-travel-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Attract More Tourists
                </h3>
                <p className="text-muted-foreground">
                  Get featured in our app to attract tourists looking for VAT
                  refund-ready stores in Paris.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-travel-blue/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-travel-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Simplified Process
                </h3>
                <p className="text-muted-foreground">
                  Our digital solution means less paperwork for you and a
                  smoother experience for your customers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-travel-blue/10 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-travel-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Multilingual Support
                </h3>
                <p className="text-muted-foreground">
                  Break language barriers with our app that supports multiple
                  languages for a better customer experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-6 md:px-12 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partner with TravelMoney in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-travel-indigo/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-travel-indigo">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
              <p className="text-muted-foreground">
                Complete our simple merchant registration form and verify your
                business details.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-travel-indigo/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-travel-indigo">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integration</h3>
              <p className="text-muted-foreground">
                Our team will help you integrate TravelMoney into your existing
                checkout process.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-travel-indigo/20 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-2xl text-travel-indigo">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Processing</h3>
              <p className="text-muted-foreground">
                Begin offering simplified VAT refunds to your non-EU customers
                right away.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-travel-indigo/10 py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to simplify VAT refunds?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our growing network of merchant partners in Paris and provide
              your customers with a seamless VAT refund experience.
            </p>
            <Button
              size="lg"
              className="bg-travel-blue hover:bg-travel-blue-dark text-white font-medium rounded-full px-8 transition-spring"
              onClick={openApplicationForm}
            >
              Become a Partner Today
            </Button>
          </div>
        </section>
      </main>

      <MerchantApplicationForm open={formOpen} onOpenChange={setFormOpen} />

      <Footer lang={lang} />
    </>
  );
}
