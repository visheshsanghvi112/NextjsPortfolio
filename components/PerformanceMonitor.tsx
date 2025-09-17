"use client";
import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor scroll performance
    let lastScrollTime = 0;
    let scrollCount = 0;
    
    const handleScroll = () => {
      const now = performance.now();
      scrollCount++;
      
      if (now - lastScrollTime > 1000) {
        const fps = scrollCount;
        if (fps < 30 && process.env.NODE_ENV === 'development') {
          console.warn(`⚠️ Scroll performance warning: ${fps} FPS`);
        }
        scrollCount = 0;
        lastScrollTime = now;
      }
    };

    // Monitor frame drops
    let lastFrameTime = performance.now();
    let frameCount = 0;
    
    const checkFrameRate = () => {
      const now = performance.now();
      frameCount++;
      
      if (now - lastFrameTime > 1000) {
        const fps = frameCount;
        if (fps < 50 && process.env.NODE_ENV === 'development') {
          console.warn(`⚠️ Frame rate warning: ${fps} FPS`);
        }
        frameCount = 0;
        lastFrameTime = now;
      }
      
      requestAnimationFrame(checkFrameRate);
    };

    // Start monitoring only in development
    if (process.env.NODE_ENV === 'development') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      requestAnimationFrame(checkFrameRate);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return null;
}