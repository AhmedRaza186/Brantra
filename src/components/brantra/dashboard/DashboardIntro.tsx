'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { BRAND } from '../../../config/brand';

export function DashboardIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Refs for idempotent cleanup
  const cleanupDone = useRef(false);
  const exitStarted = useRef(false);
  const readinessTimer = useRef<NodeJS.Timeout | null>(null);
  const safetyTimer = useRef<NodeJS.Timeout | null>(null);
  const originalOverflow = useRef<string>('');

  // 1. completeIntro: Final cleanup and unmount
  const completeIntro = useCallback(() => {
    if (cleanupDone.current) return;
    cleanupDone.current = true;

    // Pause video
    if (videoRef.current) {
      videoRef.current.pause();
    }

    // Clear timers
    if (readinessTimer.current) clearTimeout(readinessTimer.current);
    if (safetyTimer.current) clearTimeout(safetyTimer.current);

    // Restore scroll
    document.body.style.overflow = originalOverflow.current;

    // Mark as seen
    try {
      sessionStorage.setItem(BRAND.introSessionKey, 'true');
    } catch {
      // Ignore
    }

    // Unmount
    setIsVisible(false);
  }, []);

  // 2. beginExit: Starts the visual fade
  const beginExit = useCallback(() => {
    if (exitStarted.current || cleanupDone.current) return;
    exitStarted.current = true;
    setIsFadingOut(true);
    
    // Complete after the CSS fade duration (150ms)
    setTimeout(() => {
      completeIntro();
    }, 150);
  }, [completeIntro]);

  useEffect(() => {
    // We defer the start to avoid synchronous setState inside effect warning
    const initTimer = setTimeout(() => {
      let shouldPlay = false;
      const introMode = typeof window !== 'undefined' ? new URLSearchParams(globalThis.location.search).get('intro') : null;
      const forceReplay = introMode === '1';
      const skipReplay = introMode === '0';
      
      try {
        const hasSeen = sessionStorage.getItem(BRAND.introSessionKey);
        if (!hasSeen || forceReplay) {
          shouldPlay = true;
        }
      } catch {
        shouldPlay = true;
      }

      if (skipReplay) shouldPlay = false;

      // Check reduced motion (unless explicitly forced)
      const prefersReducedMotion = typeof window !== 'undefined' && globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion && !forceReplay) {
        shouldPlay = false;
      }

      if (!shouldPlay) {
        // Cleanly skip
        try {
          sessionStorage.setItem(BRAND.introSessionKey, 'true');
        } catch {
          // ignore
        }
        return;
      }

      // Lock scroll
      originalOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(initTimer);
  }, []); // Only run once on mount

  // Watch for isVisible to start the video
  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) return;

    // Adjust playback rate (1.4x)
    video.defaultPlaybackRate = 1.4;
    video.playbackRate = 1.4;

    // Reset currentTime to 0 in case the browser remembered the media state from a previous refresh
    video.currentTime = 0;

    const startPlayback = () => {
      if (cleanupDone.current) return;
      if (readinessTimer.current) clearTimeout(readinessTimer.current);

      video.play().then(() => {
        // Playback started successfully
        // Set a safety timeout based on actual duration at 1.4x + 1.5s margin
        const duration = video.duration || 4.083;
        const effectiveDuration = duration / 1.4;
        safetyTimer.current = setTimeout(() => {
          beginExit();
        }, (effectiveDuration + 1.5) * 1000);
      }).catch(() => {
        // Autoplay rejected or failed
        beginExit();
      });
    };

    // Readiness checking
    if (video.readyState >= 3) {
      // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
      startPlayback();
    } else {
      // Wait for canplay
      video.addEventListener('canplay', startPlayback, { once: true });
      
      // Readiness timeout: if it doesn't become playable in 5s, skip
      readinessTimer.current = setTimeout(() => {
        video.removeEventListener('canplay', startPlayback);
        beginExit();
      }, 5000);
    }

    // Keyboard handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        if (e.key === ' ') e.preventDefault(); // Prevent scroll on spacebar
        beginExit();
      }
    };
    globalThis.addEventListener('keydown', handleKeyDown);

    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown);
      if (!cleanupDone.current) {
        completeIntro();
      }
    };
  }, [isVisible, beginExit, completeIntro]);

  // Video event handlers
  const handleTimeUpdate = () => {
    if (!videoRef.current || cleanupDone.current || exitStarted.current) return;
    
    // The video is 4.083s. We fade out starting around 3.90s.
    if (videoRef.current.currentTime >= 3.90) {
      beginExit();
    }
  };

  const handleEnded = () => {
    // If timeupdate missed it somehow, call completeIntro (no fade, just immediate cleanup)
    completeIntro();
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#F6F2F1] flex items-center justify-center transition-opacity duration-150 ease-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-label="Dashboard intro animation"
      role="dialog"
      aria-modal="true"
    >
      <video
        ref={videoRef}
        src={BRAND.introVideoPath}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={beginExit}
        onAbort={beginExit}
        aria-hidden="true"
      />
      
      <button type="button"
        onClick={beginExit}
        className="absolute top-6 right-6 px-4 py-2 rounded-md bg-ink/10 hover:bg-ink/20 text-ink/80 text-[13px] font-semibold transition-colors focus-visible outline-none focus:ring-2 focus:ring-ink/40"
        aria-label="Skip intro animation"
      >
        Skip
      </button>
    </div>
  );
}
