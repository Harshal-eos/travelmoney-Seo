'use client';

import React from 'react';
import { 
  Banknote, 
  ShoppingBag, 
  Smartphone,
  Percent,
  Clock,
  FileCheck,
  Search,
  ShieldCheck
} from 'lucide-react';
import VatCalculator from './components/calculator/VatCalculator';

const features = [
  {
    icon: <Banknote className="h-12 w-12 text-travel-blue" />,
    title: 'Industry-Best VAT Refunds',
    description: 'Receive up to 100% of your VAT back with our lowest-fee guarantee and fastest refund times.',
    delay: 0
  },
  {
    icon: <Smartphone className="h-12 w-12 text-travel-blue" />,
    title: 'A Seamless Digital Experience',
    description: 'Skip the paperwork. Submit refunds in the app, track refund status in real-time, and receive your refunds instantly.',
    delay: 200
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-travel-blue" />,
    title: 'Shop like a Pro while Traveling',
    description: "Discover merchants and products that you'll love. Shop in-store or online.",
    delay: 400
  }
];

const Features: React.FC =  () => {
  return (
    <div id="features" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-travel-gray-light to-transparent -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-travel-blue/10 text-travel-blue">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Shop Like a Pro While You <span className="text-gradient">Travel in Europe</span>
          </h2>
          <p className="text-muted-foreground">
            Designed specifically for travelers, our app brings simplicity and clarity to your shopping when traveling to Europe. Start saving when shopping.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 max-w-xl">
              <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-travel-blue/10 text-travel-blue">
                Why TravelMoney?
              </span>
              <h2 className="text-3xl font-bold">
                Designed for <span className="text-gradient">Modern Travelers</span>
              </h2>
              <p className="text-muted-foreground">
                TravelMoney transforms tax-free shopping with a seamless digital experience built for modern travelers. Get industry-leading VAT refunds with the lowest fees, fastest processing times, and zero paperwork hassle.
              </p>
              
              <ul className="space-y-3">
                {[
                  { text: "Get 50%+ bigger refunds with industry's best rates - as low as 0%", icon: <Percent className="h-4 w-4 text-travel-blue" /> },
                  { text: "Fastest refund times, including instant refunds", icon: <Clock className="h-4 w-4 text-travel-blue" /> },
                  { text: "No more paper forms, no more hassle - fully digital experience", icon: <FileCheck className="h-4 w-4 text-travel-blue" /> },
                  { text: "Seamless merchant discovery to find the products you'll love", icon: <Search className="h-4 w-4 text-travel-blue" /> },
                  { text: "Bank-level security and privacy", icon: <ShieldCheck className="h-4 w-4 text-travel-blue" /> }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-travel-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md">
              <VatCalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

interface FeatureCardProps {
  feature: Feature
}
const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div
      className="bg-white border border-travel-gray-light rounded-2xl p-6 hover:shadow-md transition-spring group"
      style={{ animationDelay: `${feature.delay ?? 0}ms` }}
    >
      <div className="h-16 w-16 rounded-2xl bg-travel-blue/10 flex items-center justify-center mb-6 group-hover:bg-travel-blue/20 transition-spring">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  )
}

export default Features

