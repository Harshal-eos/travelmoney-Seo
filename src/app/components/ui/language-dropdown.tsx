'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageDropdownProps {
  currentLang: string;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
];

export function LanguageDropdown({ currentLang }: LanguageDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (langCode: string) => {
    // Extract the path without the language prefix
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
    const newPath = `/${langCode}${pathWithoutLang}`;
    router.push(newPath);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 px-3 bg-white border-gray-200 hover:bg-gray-50 rounded-lg shadow-sm flex items-center gap-2"
        >
          <Globe className="h-4 w-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-700 uppercase">
            {currentLanguage?.code}
          </span>
          <div className="w-px h-4 bg-gray-300 mx-1" />
          <ChevronDown className="h-3 w-3 text-gray-700" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 mt-1">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer flex items-center gap-2 px-3 py-2 ${currentLang === language.code
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <span className="text-sm">{language.flag}</span>
            <span className="text-sm font-medium">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
