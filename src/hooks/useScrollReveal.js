import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Watches all [data-scroll-animate] elements inside the given container ref.
 * When an element enters the viewport it gets the class `is-visible`.
 * When an element leaves the viewport, `is-visible` is removed (reverse animation).
 * For staggered children, set data-scroll-stagger on the parent —
 * each direct child gets a CSS variable --stagger-index for delayed entry.
 */
export default function useScrollReveal(containerRef, { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = {}) {
  const observerRef = useRef(null);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        const noReverse =
          target.hasAttribute('data-scroll-no-reverse') ||
          target.hasAttribute('data-scroll-once');

        if (entry.isIntersecting) {
          target.classList.add('is-visible');
          target.setAttribute('data-scroll-state', 'visible');

          // If this element declares stagger, assign --stagger-index to children
          if (target.hasAttribute('data-scroll-stagger')) {
            const children = target.children;
            Array.from(children).forEach((child, i) => {
              child.style.setProperty('--stagger-index', i);
            });
          }

          // If once or no-reverse is declared, unobserve after becoming visible
          if (noReverse && observerRef.current) {
            observerRef.current.unobserve(target);
          }
        } else {
          // Remove visible class when leaving viewport ONLY if not marked no-reverse
          if (!noReverse) {
            target.classList.remove('is-visible');
            target.removeAttribute('data-scroll-state');
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });

    // Observe all elements with [data-scroll-animate]
    const targets = container.querySelectorAll('[data-scroll-animate]');
    targets.forEach((el) => observerRef.current.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [containerRef, threshold, rootMargin]);
}
