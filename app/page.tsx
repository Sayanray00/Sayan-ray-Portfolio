'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BootSequence from '@/components/BootSequence';
import NetworkCanvas from '@/components/NetworkCanvas';
import Portfolio from '@/components/Portfolio';
import Navigation from '@/components/Navigation';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const darkBgRef = useRef<HTMLDivElement>(null);
  const [isCanvasActive, setIsCanvasActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background transition
      gsap.to(darkBgRef.current, {
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          onEnter: () => setIsCanvasActive(true),
          onLeaveBack: () => setIsCanvasActive(false),
        },
        y: '0%',
        ease: 'none',
      });

      // Schematic lines pulse before transition
      gsap.to('.boot-sequence-container', {
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
        filter: 'hue-rotate(180deg) brightness(1.5)',
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative w-full min-h-screen overflow-x-hidden bg-[#F0EAD6]">
      <Navigation />
      
      {/* Dark Background Wipe */}
      <div 
        ref={darkBgRef} 
        className="fixed inset-0 w-full h-full bg-[#0A0A0A] z-0 translate-y-full"
        style={{ willChange: 'transform' }}
      >
        {isCanvasActive && <NetworkCanvas />}
      </div>

      {/* Hero Section */}
      <BootSequence />

      {/* Portfolio Section */}
      <div className="portfolio-section relative z-10 w-full min-h-screen pt-24">
        <Portfolio />
      </div>
    </main>
  );
}
