'use client';

import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-yellow disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-primary-blue text-neutral-white hover:bg-primary-blue/90',
  secondary: 'border border-primary-blue text-primary-blue hover:bg-primary-blue/10',
  accent: 'bg-primary-yellow text-primary-blue hover:bg-primary-yellow/90 shadow-[0_10px_30px_rgba(244,208,63,0.35)] ring-1 ring-primary-blue/20',
  ghost: 'text-neutral-dark hover:text-primary-blue',
  white: 'bg-neutral-white text-primary-blue hover:bg-neutral-light shadow-lg hover:shadow-xl hover:-translate-y-1',
};

const Button = forwardRef(function Button(
  { asChild = false, children, className, href, icon: Icon, variant = 'primary', ...props },
  ref,
) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link ref={ref} href={href} className={classes} {...props}>
        {Icon ? <Icon className="text-base" aria-hidden /> : null}
        <span>{children}</span>
      </Link>
    );
  }

  const Component = asChild ? 'span' : 'button';

  return (
    <Component ref={ref} className={classes} {...props}>
      {Icon ? <Icon className="text-base" aria-hidden /> : null}
      <span>{children}</span>
    </Component>
  );
});

export default Button;
