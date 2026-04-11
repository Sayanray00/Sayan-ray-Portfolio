'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const RLCBackground = () => {
  // Generate a deterministic array of circuits to avoid hydration mismatch
  const circuits = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    type: ['R', 'L', 'C'][i % 3],
    top: (i * 17) % 100,
    left: (i * 23) % 100,
    scale: 0.5 + ((i * 7) % 15) / 10, // 0.5 to 1.9
    rotation: (i * 90) % 360,
    delay: (i * 0.3) % 4
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {circuits.map((c) => (
        <div 
          key={c.id} 
          className="absolute text-[#1A2B3C]"
          style={{ 
            top: `${c.top}%`, 
            left: `${c.left}%`, 
            transform: `scale(${c.scale}) rotate(${c.rotation}deg)` 
          }}
        >
          <svg width="60" height="20" viewBox="0 0 60 20" className="stroke-current fill-none" strokeWidth="2">
            {c.type === 'R' && (
              <path pathLength="100" className="animate-draw" style={{ animationDelay: `${c.delay}s` }} d="M0,10 L10,10 L15,0 L25,20 L35,0 L45,20 L50,10 L60,10" />
            )}
            {c.type === 'C' && (
              <path pathLength="100" className="animate-draw" style={{ animationDelay: `${c.delay}s` }} d="M0,10 L25,10 M25,0 L25,20 M35,0 L35,20 M35,10 L60,10" />
            )}
            {c.type === 'L' && (
              <path pathLength="100" className="animate-draw" style={{ animationDelay: `${c.delay}s` }} d="M0,10 L10,10 C10,0 20,0 20,10 C20,0 30,0 30,10 C30,0 40,0 40,10 C40,0 50,0 50,10 L60,10" />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default function BootSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Blinking cursor
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'steps(1)'
    });

    // Typing animation
    tl.to(text1Ref.current, {
      text: "> SYSTEM.INITIALIZE()",
      duration: 1,
      delay: 0.5,
      ease: "none",
      onStart: () => { if(text1Ref.current) text1Ref.current.style.opacity = '1'; }
    })
    .to(text2Ref.current, {
      text: "> LOADING SAYAN RAY PROFILE...",
      duration: 1.5,
      ease: "none",
      onStart: () => { if(text2Ref.current) text2Ref.current.style.opacity = '1'; }
    })
    .to(text3Ref.current, {
      text: "> READY. [SCROLL TO ACTIVATE]",
      duration: 1,
      ease: "none",
      onStart: () => { if(text3Ref.current) text3Ref.current.style.opacity = '1'; }
    });

  }, []);

  return (
    <div id="boot" ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center text-[#1A2B3C] font-mono text-lg sm:text-2xl z-10 overflow-hidden boot-sequence-container">
      <div className="absolute inset-0 bg-grid-schematic-light opacity-50"></div>
      <RLCBackground />
      
      {/* Decorative Schematic Lines */}
      <div className="hidden md:block absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-[#1A2B3C] opacity-30"></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-[#1A2B3C] opacity-30"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1A2B3C] opacity-20"></div>
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#1A2B3C] opacity-20"></div>

      <div className="relative z-10 flex flex-col items-start space-y-4 max-w-2xl w-full px-8">
        <div className="flex">
          <span ref={text1Ref} className="opacity-0"></span>
        </div>
        <div className="flex">
          <span ref={text2Ref} className="opacity-0"></span>
        </div>
        <div className="flex text-[#0047AB] font-bold">
          <span ref={text3Ref} className="opacity-0"></span>
          <span ref={cursorRef} className="ml-1">_</span>
        </div>
      </div>
    </div>
  );
}
