'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/app/lib/utils';
import { useIsMobile } from '@/app/hooks/use-mobile';
import Image from "next/image"

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToWaitlist = (): void => {
    const waitlistSection = document.querySelector('section:has(.glass)');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled ? 'glass' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/lovable-uploads/e14a4f31-f94d-46d8-aba2-e788bb5692d3.png"
            alt="TravelMoney Logo"
            className="h-8 md:h-10"
            width={107}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Shoppers</NavLink>
            <NavLink href="/merchants">Merchants</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/extension">Extension</NavLink>
            <Button
              className="bg-travel-blue hover:bg-travel-blue-dark text-white font-medium rounded-full px-6 transition-spring"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </Button>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            'fixed inset-0 top-[72px] bg-background glass-dark z-40 transition-spring overflow-hidden',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 p-8">
            <MobileNavLink href="/shoppers" onClick={() => setIsMenuOpen(false)}>Shoppers</MobileNavLink>
            <MobileNavLink href="/merchants" onClick={() => setIsMenuOpen(false)}>Merchants</MobileNavLink>
            <MobileNavLink href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</MobileNavLink>
            <MobileNavLink href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/extension" onClick={() => setIsMenuOpen(false)}>Extension</MobileNavLink>
            <Button
              className="bg-travel-blue hover:bg-travel-blue-dark text-white font-medium rounded-full px-8 py-3 w-full max-w-xs transition-spring"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-foreground hover:text-travel-blue transition-spring text-sm font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-white text-2xl font-medium w-full text-center py-3"
  >
    {children}
  </Link>
);

export default Navbar;
