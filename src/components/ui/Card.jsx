import Image from 'next/image';
import Link from 'next/link';
import { cn, formatDate } from '@/lib/utils';

function Card({
  className,
  ctaLabel = 'Ver m\u00e1s',
  date,
  description,
  eyebrow,
  href,
  image,
  imageAlt,
  orientation = 'vertical',
  title,
  children,
}) {
  const Wrapper = href ? Link : 'div';

  return (
    <Wrapper
      href={href}
      className={cn(
        'news-card relative flex flex-col overflow-hidden bg-neutral-white',
        orientation === 'horizontal' ? 'md:flex-row' : 'md:flex-col',
        className,
      )}
    >
      {image ? (
        <div
          className={cn(
            'relative h-52 w-full overflow-hidden md:h-56',
            orientation === 'horizontal' ? 'md:w-2/5' : '',
          )}
        >
          <Image
            className="h-full w-full object-cover"
            src={image}
            alt={imageAlt || title || ''}
            fill
            sizes={
              orientation === 'horizontal'
                ? '(min-width: 1024px) 40vw, 100vw'
                : '(min-width: 1024px) 33vw, 100vw'
            }
            priority={false}
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-3">
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-blue/70">
              {eyebrow}
            </span>
          ) : null}
          {title ? (
            <h3 className="text-xl font-heading font-semibold text-neutral-dark">
              {title}
            </h3>
          ) : null}
          {date ? (
            <p className="text-sm font-medium text-primary-blue/80">
              {formatDate(date)}
            </p>
          ) : null}
          {description ? (
            <p className="text-sm text-neutral-dark/80">{description}</p>
          ) : null}
        </div>
        {children}
        {href ? (
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-blue">
            {ctaLabel}
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M3.333 8H12.666M12.666 8L8.666 4M12.666 8L8.666 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : null}
      </div>
    </Wrapper>
  );
}

export default Card;
