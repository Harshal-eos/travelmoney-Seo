// 'use client';

// import React, { useState } from 'react';
// import { ArrowRight, Check } from 'lucide-react';
// import Link from 'next/link';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { toast } from 'sonner';
// import { supabase } from '@/integrations/supabase/client';

// const EmailCapture: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [isSuccess, setIsSuccess] = useState<boolean>(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Insert email into the waitlist table
//       const { error } = await supabase
//         .from('waitlist')
//         .insert([{ email }]);
      
//       if (error) {
//         console.error('Error submitting to waitlist:', error);
//         if (error.code === '23505') { // Unique violation error code
//           toast.error("This email is already on our waitlist!");
//         } else {
//           toast.error("There was an error joining the waitlist. Please try again.");
//         }
//         setIsSubmitting(false);
//         return;
//       }
      
//       setIsSuccess(true);
//       toast.success("Thanks for joining our waitlist!");
      
//       // Reset form after 2 seconds
//       setTimeout(() => {
//         setIsSuccess(false);
//         setEmail('');
//         setIsSubmitting(false);
//       }, 2000);
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error("Something went wrong. Please try again.");
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-12 px-6 md:px-12 relative overflow-hidden">
//       <div className="absolute inset-0 bg-travel-blue/5 -z-10" />
      
//       {/* Decorative elements */}
//       <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-travel-blue/10 blur-3xl -z-10" />
//       <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-travel-blue-light/10 blur-3xl -z-10" />
      
//       <div className="container mx-auto">
//         <div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 border border-white/20">
//           <div className="text-center mb-12 space-y-4">
//             <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-travel-blue/10 text-travel-blue">
//               Join Waitlist
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold">
//               <span className="text-gradient">Get 50%+ bigger refunds</span> with TravelMoney
//             </h2>
//           </div>
          
//           <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//             <Input
//               type="email"
//               placeholder="Enter your email"
//               className="rounded-full h-12 focus-visible:ring-travel-blue"
//               value={email}
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//               required
//               disabled={isSubmitting || isSuccess}
//             />
//             <Button
//               type="submit"
//               className={`rounded-full h-12 px-6 transition-spring ${
//                 isSuccess
//                   ? 'bg-green-500 hover:bg-green-600'
//                   : 'bg-travel-blue hover:bg-travel-blue-dark'
//               }`}
//               disabled={isSubmitting || isSuccess}
//             >
//               {isSubmitting ? (
//                 <span className="flex items-center gap-2">
//                   <svg 
//                     className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
//                     xmlns="http://www.w3.org/2000/svg" 
//                     fill="none" 
//                     viewBox="0 0 24 24"
//                   >
//                     <circle 
//                       className="opacity-25" 
//                       cx="12" 
//                       cy="12" 
//                       r="10" 
//                       stroke="currentColor" 
//                       strokeWidth="4"
//                     />
//                     <path 
//                       className="opacity-75" 
//                       fill="currentColor" 
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     />
//                   </svg>
//                   Processing
//                 </span>
//               ) : isSuccess ? (
//                 <span className="flex items-center gap-2">
//                   <Check className="h-4 w-4" />
//                   Subscribed!
//                 </span>
//               ) : (
//                 <span className="flex items-center gap-2">
//                   Join Waitlist
//                   <ArrowRight className="h-4 w-4" />
//                 </span>
//               )}
//             </Button>
//           </form>
          
//           <div className="mt-8 text-center text-sm text-muted-foreground">
//             By subscribing, you agree to our{' '}
//             <Link href="/privacy" className="text-travel-blue hover:underline">
//               Privacy Policy
//             </Link>{' '}
//             and{' '}
//             <Link href="/terms" className="text-travel-blue hover:underline">
//               Terms of Service
//             </Link>.
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EmailCapture;
