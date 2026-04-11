'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optional: Add entrance animations for portfolio items
    const cards = gsap.utils.toArray('.portfolio-card');
    cards.forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 text-white font-body">
      {/* Profile Summary */}
      <section id="profile" className="mb-24">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8 text-cyan-400 uppercase tracking-tighter">
          Operator_Profile
        </h2>
        <div className="glass-panel p-8 border-l-4 border-[#00FFFF]">
          <h3 className="text-2xl font-bold mb-2">Sayan Ray</h3>
          <p className="font-mono text-xs text-[#FF00FF] mb-6 uppercase tracking-widest">Student..ECE..Embedded..VLSI.. // Kolkata, West Bengal, India</p>
          <p className="text-gray-300 leading-relaxed max-w-3xl text-justify">
          <p className="text-gray-300 leading-relaxed max-w-3xl text-justify">
  Hello! I am Sayan Ray, a B.Tech graduate in Electronics and Communication Engineering, currently pursuing my M.Tech in Embedded System and VLSI Design at Maulana Abul Kalam Azad University of Technology, West Bengal.
  <br/><br/>
  I enjoy problem-solving, collaborating in teams, and contributing to projects that push the boundaries of technology. Always eager to learn and grow, I look forward to opportunities where I can make a meaningful impact.
</p>
            <br/><br/>
            I enjoy problem-solving, collaborating in teams, and contributing to projects that push the boundaries of technology. Always eager to learn and grow, I look forward to opportunities where I can apply my skills and make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="mb-32">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-12 text-cyan-400 uppercase tracking-tighter">
          System.Log // Education
        </h2>
        
        <div className="relative border-l border-[#00FFFF]/30 pl-8 ml-4 space-y-12">
          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
            <div className="font-mono text-xs text-[#FF00FF] mb-2 uppercase tracking-widest">Oct 2024 - July 2026</div>
            <h3 className="text-xl font-bold mb-1">Master of Technology - MTech, Embedded system and VLSI design</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Maulana Abul Kalam Azad University of Technology, West Bengal (formerly WBUT)
            </p>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
            <div className="font-mono text-xs text-[#FF00FF] mb-2 uppercase tracking-widest">June 2020 - June 2024</div>
            <h3 className="text-xl font-bold mb-1">B.Tech, Electrical, Electronics and Communications Engineering</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              SWAMI VIVEKANANDA UNIVERSITY
            </p>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
            <div className="font-mono text-xs text-[#FF00FF] mb-2 uppercase tracking-widest">2018 - 2020</div>
            <h3 className="text-xl font-bold mb-1">Diploma, Electronics and Telecommunications</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Aacharya Jagadish Chandra Bose Polytechnic
            </p>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
            <div className="font-mono text-xs text-[#FF00FF] mb-2 uppercase tracking-widest">Feb 2016 - Jan 2018</div>
            <h3 className="text-xl font-bold mb-1">H.S., Vocational. Automobile engineering</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Nimichi Ramnarayan vidyalaya
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="mb-32">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-12 text-cyan-400 uppercase tracking-tighter">
          Core_Modules // Skills & Certs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills Card */}
          <div className="portfolio-card glass-panel p-8 rounded-none cyan-glow-hover flex flex-col h-full">
            <h4 className="font-headline text-2xl font-bold mb-6 text-[#00FFFF]">Technical Skills</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                RTL Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                RTL Coding
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                ESP32 Microcontrollers
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                Embedded Systems & IoT
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                VLSI Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                C/C++ Programming
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                Verilog / VHDL
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                Python Scripting
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                Digital Logic Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                PCB Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                Arduino
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                I2C / SPI / UART
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                MATLAB / Simulink
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FF00FF]"></span>
                Sensor Integration
              </li>
            </ul>
          </div>

          {/* Certifications Card */}
          <div className="portfolio-card glass-panel p-8 rounded-none cyan-glow-hover flex flex-col h-full">
            <h4 className="font-headline text-2xl font-bold mb-6 text-[#00FFFF]">Certifications</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00FFFF]"></span>
                IoT Internship Certificate
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00FFFF]"></span>
                IoT Training Completion Certificate
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00FFFF]"></span>
                MATLAB Certified
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00FFFF]"></span>
                Employability Skill Training
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#00FFFF]"></span>
                ICSE 2023
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="mb-32">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-12 text-cyan-400 uppercase tracking-tighter">
          Deployed_Modules // Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="portfolio-card glass-panel p-6 rounded-none cyan-glow-hover group flex flex-col h-full">
            <div className="h-48 w-full bg-[#0e0e0e] border border-[#201f1f] mb-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-2 left-2 font-mono text-[#00FFFF]/50 text-[10px] tracking-widest">SNN_FPGA_CORE</div>
              
              {/* Animated Visual: Neural Network */}
              <div className="relative w-24 h-24">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#00FFFF] rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#FF00FF] rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00FFFF] rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF00FF] rounded-full animate-pulse shadow-[0_0_15px_#FF00FF]" style={{ animationDelay: '900ms' }}></div>
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  <line x1="50%" y1="0" x2="50%" y2="50%" stroke="#00FFFF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="0" y1="100%" x2="50%" y2="50%" stroke="#FF00FF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="100%" y1="100%" x2="50%" y2="50%" stroke="#00FFFF" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </div>
            </div>
            <h4 className="font-headline text-xl font-bold mb-2 group-hover:text-[#00FFFF] transition-colors">Neuromorphic Computing: SNN on FPGA</h4>
            <p className="font-mono text-[10px] text-[#FF00FF] mb-3 uppercase tracking-widest">Jul 2025 – Present // MAKAUT</p>
            <p className="text-sm text-gray-400 mb-6 flex-grow">
              Designing AI circuit using Spiking Neural Networks (SNN) for English letter recognition and implementing it on Field-Programmable Gate Arrays (FPGA).
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-[10px] text-[#FF00FF]">
              <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">VERILOG</span>
              <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">FPGA</span>
              <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">SNN</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="portfolio-card glass-panel p-6 rounded-none cyan-glow-hover group flex flex-col h-full">
            <div className="h-48 w-full bg-[#0e0e0e] border border-[#201f1f] mb-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-2 left-2 font-mono text-[#00FFFF]/50 text-[10px] tracking-widest">GESTURE_CAR_ESP32</div>
              
              {/* Animated Visual: Wireless Waves */}
              <div className="relative flex items-center justify-center w-24 h-24">
                <div className="absolute w-4 h-4 bg-[#FF00FF] rounded-full"></div>
                <div className="absolute w-12 h-12 border border-[#00FFFF] rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                <div className="absolute w-24 h-24 border border-[#00FFFF] rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
              </div>
            </div>
            <h4 className="font-headline text-xl font-bold mb-2 group-hover:text-[#00FFFF] transition-colors">Wireless Hand Gesture Controlled Car</h4>
            <p className="font-mono text-[10px] text-[#FF00FF] mb-3 uppercase tracking-widest">Jul 2023 – Jun 2024 // SVU</p>
            <p className="text-sm text-gray-400 mb-6 flex-grow">
              A robot car controlled via hand gestures using an accelerometer and ESP32. Gestures are detected and transmitted wirelessly, demonstrating sensor integration and embedded systems.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 font-mono text-[10px] text-[#FF00FF]">
                <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">ESP32</span>
                <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">ARDUINO</span>
                <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">SENSORS</span>
              </div>
              <a href="https://github.com/Sayanray00/Wireless-Hand-Gesture-Controlled-Car-Using-ESP32" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono text-[#00FFFF] hover:text-[#FF00FF] transition-colors">
                <Github size={14} /> View Repository
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="portfolio-card glass-panel p-6 rounded-none cyan-glow-hover group flex flex-col h-full">
            <div className="h-48 w-full bg-[#0e0e0e] border border-[#201f1f] mb-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-2 left-2 font-mono text-[#00FFFF]/50 text-[10px] tracking-widest">IOT_HEALTH_MONITOR</div>
              
              {/* Animated Visual: Heartbeat */}
              <svg viewBox="0 0 100 40" className="w-32 h-12 stroke-[#00FFFF] fill-none" strokeWidth="2">
                <path d="M0 20 L20 20 L30 5 L40 35 L50 20 L100 20" strokeDasharray="150" strokeDashoffset="150">
                  <animate attributeName="stroke-dashoffset" values="150;0" dur="2s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <h4 className="font-headline text-xl font-bold mb-2 group-hover:text-[#00FFFF] transition-colors">Advanced IoT Patient Health Monitor</h4>
            <p className="font-mono text-[10px] text-[#FF00FF] mb-3 uppercase tracking-widest">Web-Server Technology</p>
            <p className="text-sm text-gray-400 mb-6 flex-grow">
              Real-time IoT health monitoring system utilizing measured values of body temperature, pulse rate, and oxygen saturation for critical care patients.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 font-mono text-[10px] text-[#FF00FF]">
                <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">IOT</span>
                <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">WEB-SERVER</span>
                <span className="px-2 py-1 bg-[#FF00FF]/10 border border-[#FF00FF]/20">SENSORS</span>
              </div>
              <a href="https://github.com/Sayanray00/Advanced-IoT-Based-Patient-Health-Monitoring-System-by-Web-Server-Technology" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono text-[#00FFFF] hover:text-[#FF00FF] transition-colors">
                <Github size={14} /> View Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-32 border-t border-[#00FFFF]/20 pt-16">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8 text-cyan-400 uppercase tracking-tighter">
          Establish_Connection // Contact
        </h2>
        <div className="glass-panel p-8 rounded-none border-l-4 border-[#FF00FF] flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to collaborate?</h3>
            <p className="text-gray-400 max-w-xl">
              I am currently open to new opportunities in Embedded Systems, VLSI Design, and IoT. Feel free to reach out for collaborations or inquiries.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full md:w-auto">
            <a href="mailto:raysayan50@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-[#00FFFF]/10 border border-[#00FFFF]/30 hover:bg-[#00FFFF]/20 transition-colors group">
              <Mail className="text-[#00FFFF] w-5 h-5" />
              <span className="font-mono text-sm tracking-widest group-hover:text-[#00FFFF]">raysayan50@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/sayan-ray-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-[#FF00FF]/10 border border-[#FF00FF]/30 hover:bg-[#FF00FF]/20 transition-colors group">
              <Linkedin className="text-[#FF00FF] w-5 h-5" />
              <span className="font-mono text-sm tracking-widest group-hover:text-[#FF00FF]">LinkedIn</span>
            </a>
            <a href="https://github.com/Sayanray00" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-[#00FFFF]/10 border border-[#00FFFF]/30 hover:bg-[#00FFFF]/20 transition-colors group">
              <Github className="text-[#00FFFF] w-5 h-5" />
              <span className="font-mono text-sm tracking-widest group-hover:text-[#00FFFF]">GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
