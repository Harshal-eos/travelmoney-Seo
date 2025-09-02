
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { createPortal } from 'react-dom';
import TypeformPopup from '../TypeformPopup';


const WaitlistForm = () => {
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
        event_label: "hero_waitlist",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '900ms' }}>
        <Button
          onClick={handleJoinWaitlist}
          className="rounded-full h-12 px-8 bg-travel-blue hover:bg-travel-blue-dark transition-spring"
        >
          <span className="flex items-center gap-2">
            Join Waitlist
            <ArrowRight className="h-4 w-4" />
          </span>
        </Button>
      </div>

      {/* Typeform Popup - Rendered as Portal */}
      {mounted && isPopupOpen && createPortal(
        <TypeformPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />,
        document.body
      )}
    </>
  );
};

export default WaitlistForm;
