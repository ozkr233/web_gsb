'use client';

import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-yellow disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-primary-blue text-neutral-white hover:bg-primary-blue/90',
  secondary: 'border border-primary-blue text-primary-blue hover:bg-primary-blue/10',
  ghost: 'text-neutral-dark hover:text-primary-blue',
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
