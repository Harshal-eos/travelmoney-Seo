
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { toast } from 'sonner';
import { supabase } from "@/app/integration/supabase/supabaseClient";


const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert email into the waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);
      
      if (error) {
        console.error('Error submitting to waitlist:', error);
        if (error.code === '23505') { // Unique violation error code
          toast.error("This email is already on our waitlist!");
        } else {
          toast.error("There was an error joining the waitlist. Please try again.");
        }
        setIsSubmitting(false);
        return;
      }
      
      setIsSuccess(true);
      toast.success("Thanks for joining our waitlist!");
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 animate-fade-up"
      style={{ animationDelay: '900ms' }}
    >
      <Input
        type="email"
        placeholder="Enter your email"
        className="rounded-full h-12 focus-visible:ring-travel-blue"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isSubmitting || isSuccess}
      />
      <Button
        type="submit"
        className={`rounded-full h-12 px-6 transition-spring ${
          isSuccess
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-travel-blue hover:bg-travel-blue-dark'
        }`}
        disabled={isSubmitting || isSuccess}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Joining
          </span>
        ) : isSuccess ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Joined!
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Join Waitlist
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default WaitlistForm;
