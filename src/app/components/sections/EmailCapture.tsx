"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";
import TypeformPopup from "./TypeformPopup";

interface EmailCaptureProps {
  lang: string;
}

const EmailCapture: React.FC<EmailCaptureProps> = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleJoinWaitlist = () => {
    setIsPopupOpen(true);

    // Track the event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "waitlist_signup_click", {
        event_category: "engagement",
        event_label: "email_capture",
      });
    }
  };

  return (
    <section
      className="py-12 px-6 md:px-12 relative overflow-hidden"
      aria-labelledby="email-capture-heading"
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 bg-travel-blue/5 -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-travel-blue/10 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-travel-blue-light/10 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 border border-white/20 shadow-xl">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-travel-blue/10 text-travel-blue">
              Join Waitlist
            </span>
            <h2
              id="email-capture-heading"
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              <span className="text-gradient">
                Get 50%+ bigger refunds
              </span>{" "}
              with TravelMoney
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be the first to access our revolutionary VAT refund platform and
              maximize your travel savings.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleJoinWaitlist}
              className="rounded-full h-12 px-8 bg-travel-blue hover:bg-travel-blue-dark focus:ring-travel-blue transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Button>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            By subscribing, you agree to our{" "}
            <Link
              href="/privacy"
              className="text-travel-blue hover:underline focus:outline-none focus:ring-2 focus:ring-travel-blue focus:ring-offset-2 rounded-sm"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="text-travel-blue hover:underline focus:outline-none focus:ring-2 focus:ring-travel-blue focus:ring-offset-2 rounded-sm"
            >
              Terms of Service
            </Link>
            .
          </div>
        </div>
      </div>

      {/* Typeform Popup - Rendered as Portal */}
      {mounted && isPopupOpen && createPortal(
        <TypeformPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />,
        document.body
      )}
    </section>
  );
};

// Type declaration for gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default EmailCapture;
