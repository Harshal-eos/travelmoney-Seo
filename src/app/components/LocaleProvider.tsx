'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Extract locale from pathname
    const locale = pathname.startsWith('/fr') ? 'fr' : pathname.startsWith('/es') ? 'es' : 'en';
    
    // Set the HTML lang attribute
    document.documentElement.lang = locale;
  }, [pathname]);

  return <>{children}</>;
}
