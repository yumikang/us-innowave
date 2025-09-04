'use client';

import { useEffect, useRef, useState } from 'react';

const slides = [
  { src: '/images/hero-business.jpg', alt: '글로벌 비즈니스 성장' },
  { src: '/images/hero-06.png', alt: '미국 시장 진출' },
  { src: '/images/hero-05.png', alt: '정책자금 컨설팅' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  useEffect(() => {
    // Don't auto-play if user prefers reduced motion
    if (prefersReducedMotion) return;
    
    // Auto-advance slides every 5 seconds
    const advanceSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
    
    timerRef.current = setInterval(advanceSlide, 5000);
    
    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div className="hero-slider" aria-hidden="true">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.src})` }}
          role="img"
          aria-label={slide.alt}
        />
      ))}
    </div>
  );
}