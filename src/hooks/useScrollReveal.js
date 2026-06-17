import { useEffect, useRef } from 'react';

export default function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null);
  const hasRevealed = useRef(false);

  // Garantiza que la clase no se pierda cuando React re-renderiza el componente (ej. al cambiar de tema)
  useEffect(() => {
    if (hasRevealed.current && ref.current) {
      ref.current.classList.add('reveal-visible');
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasRevealed.current = true;
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
}
