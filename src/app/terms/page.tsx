
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Terms = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of <span className="text-gradient">Conditions</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Last updated: July 1, 2023
          </p>
          
          <div className="prose prose-lg max-w-3xl">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information about us, how to contact us</h2>
            <p><strong>Who we are:</strong> Travel Money SAS with registered office at 14 rue Charles V 75004 Paris, France.</p>
            
            <p><strong>How to contact us:</strong> You can contact us through the chat function in the Travel Money app, by emailing us at support@travelmoney.app or by writing to us at 14 rue Charles V 75004 Paris, France. We may record all communications for quality and training purposes.</p>
            
            <p><strong>How we may contact you:</strong> If we need to contact you, we may do so via your registered account, by telephone or by writing to you at the email address or home address you provided to us. When we use the words &quot;writing&ldquo; or &quot;written&ldquo; in these Terms, this includes emails and notifications.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our service</h2>
            <p>We provide a service which allows you to obtain a refund of the value added tax (VAT) that you have paid for purchases eligible under these terms and conditions by uploading invoices through the mobile application (the &quot;App&quot;), website or another channel (the &quot;Service&quot;).</p>
            
            <p>When you have an account with Travel Money, you become a partner of the VAT refund program we offer. This Agreement applies as a Framework Contract to your account and any Services involving your account.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
