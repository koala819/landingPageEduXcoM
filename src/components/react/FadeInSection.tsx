import React, {  useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

// Utilisation d'un import dynamique pour Framer Motion
const FadeInSection = ({
  children,
  delay = 0,
  direction = "up",
  className = ""
}: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Style initial basé sur la direction
  const getInitialStyle = () => {
    if (!isClient) return {}; // Ne pas appliquer de transform pendant le rendu côté serveur

    if (direction === "up") return { opacity: 0, transform: `translateY(20px)` };
    if (direction === "down") return { opacity: 0, transform: `translateY(-20px)` };
    if (direction === "left") return { opacity: 0, transform: `translateX(20px)` };
    if (direction === "right") return { opacity: 0, transform: `translateX(-20px)` };
    return { opacity: 0 };
  };

  // Style de transition
  const transitionStyle = isVisible
    ? {
        opacity: 1,
        transform: 'translate(0, 0)',
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
      }
    : {};

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getInitialStyle(),
        ...transitionStyle
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;