"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { supabase } from "@/app/integration/supabase/supabaseClient";
interface EmailCaptureState {
  email: string;
  isSubmitting: boolean;
  isSuccess: boolean;
}

const EmailCapture: React.FC = () => {
  const [state, setState] = useState<EmailCaptureState>({
    email: "",
    isSubmitting: false,
    isSuccess: false,
  });

  const updateState = (updates: Partial<EmailCaptureState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!validateEmail(state.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    updateState({ isSubmitting: true });
  
    try {
      const { error } = await supabase.from("waitlist").insert([
        {
          email: state.email.toLowerCase().trim(),
          created_at: new Date().toISOString(),
        },
      ]);
  
      if (error) {
        console.error("Error submitting to waitlist:", error);
  
        if (typeof error === 'object' && error !== null && 'code' in error && error.code === "23505") {
          toast.error("This email is already on our waitlist!");
        } else {
          toast.error(
            "There was an error joining the waitlist. Please try again."
          );
        }
  
        updateState({ isSubmitting: false });
        return;
      }
  
      updateState({ isSuccess: true });
      toast.success("Thanks for joining our waitlist! We'll be in touch soon.");
  
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "waitlist_signup", {
          event_category: "engagement",
          event_label: "email_capture",
        });
      }
  
      setTimeout(() => {
        updateState({
          isSuccess: false,
          email: "",
          isSubmitting: false,
        });
      }, 3000);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Something went wrong. Please try again.");
      updateState({ isSubmitting: false });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ email: e.target.value });
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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            noValidate
          >
            <div className="flex-1">
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <Input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                className="rounded-full h-12 focus-visible:ring-travel-blue transition-all duration-200"
                value={state.email}
                onChange={handleEmailChange}
                required
                disabled={state.isSubmitting || state.isSuccess}
                aria-describedby="email-error"
                autoComplete="email"
                maxLength={254}
              />
            </div>

            <Button
              type="submit"
              className={`rounded-full h-12 px-6 min-w-[140px] transition-all duration-300 ${
                state.isSuccess
                  ? "bg-green-500 hover:bg-green-600 focus:ring-green-500"
                  : "bg-travel-blue hover:bg-travel-blue-dark focus:ring-travel-blue"
              }`}
              disabled={
                state.isSubmitting || state.isSuccess || !state.email.trim()
              }
              aria-describedby={
                state.isSubmitting ? "loading-description" : undefined
              }
            >
              {state.isSubmitting ? (
                <span className="flex items-center gap-2">
                  <LoadingSpinner />
                  <span id="loading-description">Processing</span>
                </span>
              ) : state.isSuccess ? (
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Subscribed!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Join Waitlist
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              )}
            </Button>
          </form>

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
    </section>
  );
};

// Loading spinner component
const LoadingSpinner: React.FC = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Type declaration for gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default EmailCapture;
