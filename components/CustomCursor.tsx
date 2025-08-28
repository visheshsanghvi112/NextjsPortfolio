"use client";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

type CursorMode = 'off' | 'minimal' | 'enhanced';

export default function CustomCursor({
  mode = 'minimal',
  enableSelector = '.cursor-target',
  routesAllowlist,
}: {
  mode?: CursorMode;
  enableSelector?: string;
  routesAllowlist?: string[];
}) {
  const pathname = usePathname();
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'click'>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [hoveringTarget, setHoveringTarget] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const tx = useSpring(x, { stiffness: 350, damping: 24 });
  const ty = useSpring(y, { stiffness: 24, damping: 18 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch, small screens, reduced motion, or not in allowlist (if provided)
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tooSmall = window.innerWidth < 640;
    const allowedByRoute = routesAllowlist
      ? !!routesAllowlist.find((r) => pathname?.startsWith(r))
      : true;
    if (isTouch || prefersReduced || tooSmall || mode === 'off' || !allowedByRoute) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }

    const onMove = (e: MouseEvent) => {
      const run = () => {
        // subtract half size to center the cursor
        x.set(e.clientX - 12);
        y.set(e.clientY - 12);
        rafId.current = null;
      };
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(run);
      }
    };

    window.addEventListener('mousemove', onMove as EventListener, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove as EventListener);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [pathname, x, y, mode, routesAllowlist]);

  useEffect(() => {
    if (!enabled) return;
    const handleMouseEnter = () => {
      setCursorVariant('hover');
      setHoveringTarget(true);
    };
    const handleMouseLeave = () => {
      setCursorVariant('default');
      setHoveringTarget(false);
    };

    const hoverElements = document.querySelectorAll(enableSelector);

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [enabled, enableSelector]);

  // Click ripple effect (only react when hovering a target)
  useEffect(() => {
    if (!enabled) return;
    const handleMouseDown = () => {
      if (!hoveringTarget) return;
      setCursorVariant('click');
      setIsClicking(true);
    };
    const handleMouseUp = () => {
      if (!hoveringTarget) return;
      setCursorVariant('default');
      setIsClicking(false);
    };
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [enabled, hoveringTarget]);

  const variants = {
    default: {
      scale: 1,
      opacity: 0.8,
      boxShadow: '0 0 0px 0px transparent',
      filter: 'none',
    },
    hover: {
      scale: 1.2,
      opacity: 0.95,
      boxShadow: mode === 'enhanced' ? '0 0 10px 4px #a855f74d' : '0 0 0px 0px transparent',
      filter: 'none',
    },
    click: {
      scale: 1.5,
      opacity: 0.7,
      boxShadow: mode === 'enhanced' ? '0 0 12px 6px #ff8c424d' : '0 0 0px 0px transparent',
      filter: 'none',
    },
  } as const;

  return (
    <>
      {!enabled ? null : (
        <>
          {/* Main cursor */}
          <motion.div
            className="fixed top-0 left-0 w-6 h-6 bg-white/70 dark:bg-white/70 rounded-full pointer-events-none z-50 will-change-transform"
            style={{ x: tx, y: ty }}
            variants={variants}
            animate={cursorVariant}
            transition={{ type: 'spring', stiffness: 350, damping: 24 }}
          />

          {/* Spotlight (enhanced mode only, when hovering targets) */}
          {mode === 'enhanced' && hoveringTarget && (
            <motion.div
              className="fixed top-0 left-0 w-28 h-28 rounded-full pointer-events-none z-40 mix-blend-screen"
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.35, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="w-full h-full rounded-full"
                   style={{
                     background: 'radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(255,110,199,0.25) 45%, rgba(0,0,0,0) 70%)',
                     backdropFilter: 'blur(4px)'
                   }}
              />
            </motion.div>
          )}

          {/* Click ripple (enhanced mode only on targets) */}
          {mode === 'enhanced' && hoveringTarget && isClicking && (
            <motion.div
              className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-45 border border-white/40"
              style={{ x, y }}
              initial={{ scale: 0.2, opacity: 0.4 }}
              animate={{ scale: 2.0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          )}
        </>
      )}
    </>
  );
}
