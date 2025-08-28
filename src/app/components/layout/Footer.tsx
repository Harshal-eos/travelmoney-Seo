'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, isExternal = false }) => {
  if (isExternal) {
    return (
      <a
        href={href}
        className="text-foreground hover:text-travel-blue transition-all duration-300 ease-in-out text-sm focus:outline-none focus:ring-2 focus:ring-travel-blue focus:ring-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${children} (opens in new tab)`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-foreground hover:text-travel-blue transition-all duration-300 ease-in-out text-sm focus:outline-none focus:ring-2 focus:ring-travel-blue focus:ring-offset-2"
    >
      {children}
    </Link>
  );
};

interface FooterProps {
  lang: string;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: `/${lang}`, label: 'Home' },
    { href: `/${lang}#features`, label: 'Features' },
    { href: `/${lang}/blog`, label: 'Blog' },
    { href: `/${lang}#contact`, label: 'Contact' },
  ];

  const companyLinks = [
    { href: `/${lang}/about`, label: 'About Us' },
    { href: `/${lang}/privacy`, label: 'Privacy Policy' },
    { href: `/${lang}/terms`, label: 'Terms of Service' },
    { href: `/${lang}/cookies`, label: 'Cookie Policy' },
  ];

  return (
    <footer 
      className="relative bg-white/70 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pt-20 pb-10 px-6 md:px-12" 
      id="contact"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="mb-2">
              <Link href={`/${lang}`} aria-label="TravelMoney Home">
                <Image
                  src="/lovable-uploads/e14a4f31-f94d-46d8-aba2-e788bb5692d3.png"
                  alt="TravelMoney Logo"
                  width={107}
                  height={40}
                  className="h-8 w-auto"
                  priority={false}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </Link>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Changing the game of tax-free shopping. Maximum VAT refunds, minimum wait times, zero paperwork. Shop smarter, travel richer with TravelMoney.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <nav 
              className="flex flex-col space-y-3"
              aria-label="Footer navigation"
            >
              {navigationLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Company Links Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
              Company
            </h4>
            <nav 
              className="flex flex-col space-y-3"
              aria-label="Company links"
            >
              {companyLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TravelMoney. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <FooterLink 
              href="https://travelmoney.app" 
              isExternal={true}
            >
              travelmoney.app
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
