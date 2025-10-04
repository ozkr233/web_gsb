
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navigation';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const wrapperClasses = isScrolled
    ? 'bg-primary-blue/95 text-neutral-white shadow-lg backdrop-blur'
    : 'bg-neutral-white/95 text-primary-blue shadow-sm';

  const titleClasses = isScrolled ? 'text-neutral-white' : 'text-primary-blue';
  const subtitleClasses = isScrolled ? 'text-primary-yellow' : 'text-primary-blue/70';
  const scheme = isScrolled ? 'dark' : 'light';

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-300 ${wrapperClasses}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 transition-colors md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="rounded-full bg-neutral-white p-1 shadow-md">
              <Image
                src="/images/Logo.png"
                alt="Logo Gimnasio Simón Bolívar"
                width={100}
                height={100}
                className="object-contain p-3"
                priority
              />
            </span>
            <span className={`hidden flex-col leading-tight lg:flex ${titleClasses}`}>
              <span className="font-heading text-lg font-semibold tracking-tight">Gimnasio Simón Bolívar</span>
              <span className={`text-xs uppercase tracking-[0.35em] ${subtitleClasses}`}>
                Amor · Sabiduría · Paz
              </span>
            </span>
          </Link>
        </div>
        <Navigation scheme={scheme} />
        <Navigation orientation="vertical" className="lg:hidden" scheme="light" />
      </div>
    </header>
  );
}

export default Header;
