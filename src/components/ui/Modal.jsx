'use client';

import { useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  labelledBy = 'modal-title',
}) {
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement;
      document.addEventListener('keydown', handleKeyDown);
      requestAnimationFrame(() => {
        dialogRef.current?.focus();
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocusedRef.current?.focus?.();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-dark/60 px-4 py-6 backdrop-blur"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={cn(
          'relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-neutral-white shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-yellow',
          className,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-white/90 text-neutral-dark shadow-lg transition hover:bg-primary-blue hover:text-neutral-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-yellow"
          aria-label="Cerrar"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="flex flex-col gap-6 p-10">
          {title ? (
            <h2 id={labelledBy} className="text-2xl font-heading font-semibold text-neutral-dark">
              {title}
            </h2>
          ) : null}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
