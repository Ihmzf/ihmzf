'use client';

import { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Terminal';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 120);

    return () => clearInterval(intervalId);
  }, []);

  const links = [
    { name: 'twitter', href: 'https://x.com/ihmzf', icon: <FaXTwitter /> },
    { name: 'linkedin', href: 'https://www.linkedin.com/in/hamza-faisal-b40427294/', icon: <FaLinkedin /> },
    { name: 'email', href: 'mailto:hamza@asimov.mov', icon: <FaEnvelope /> },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-20 max-w-4xl mx-auto relative z-10">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-6">
          {/* Terminal-style greeting */}
          <div className="text-sm text-muted tracking-widest uppercase">
            <span className="text-accent">$</span> whoami
          </div>

          {/* Name with typing animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight glow text-accent">
            {displayedText}
            <span className="cursor-blink text-accent-dim">_</span>
          </h1>

          {/* Tagline */}
          <div className="space-y-1 pt-4 border-l-2 border-border pl-4">
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
              <span className="text-accent-dim">//</span> I love to read history, mathematics, philosophy, sci-fi + technical books.
            </p>
          </div>

          {/* Description */}
          <div className="pt-6 space-y-2">
            <p className="text-sm md:text-base text-muted">
              <span className="text-accent mr-2">{'>'}</span>
              I also code. Mainly in <span className="text-foreground">Python</span> and <span className="text-foreground">TypeScript</span>.
            </p>
            <p className="text-sm md:text-base text-muted">
              <span className="text-accent mr-2">{'>'}</span>
              Learning <span className="text-foreground">Machine Learning</span> currently.
            </p>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="mb-12 p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
        <p className="text-xs text-muted uppercase tracking-widest mb-2">current_project</p>
        <p className="text-sm md:text-base text-foreground/80">
          simplifying backend architecture for AI applications
        </p>
        <p className="text-sm md:text-base text-muted flex items-center gap-2 mt-1">
          building{' '}
          <span
            className="text-accent font-medium cursor-pointer hover:underline underline-offset-4"
            onClick={() => window.open('https://asimov.mov', '_blank')}
          >
            Asimov
          </span>
          <span className="text-accent-dim text-xs">[link]</span>
        </p>
      </div>

      {/* Footer Links */}
      <nav>
        <div className="text-xs text-muted uppercase tracking-widest mb-4">links</div>
        <ul className="flex flex-wrap gap-6 md:gap-8 text-sm">
          {links.map((link, index) => (
            <li key={index} className="group flex items-center gap-2 text-muted hover:text-accent transition-all duration-200">
              <span className="text-accent-dim group-hover:text-accent">{link.icon}</span>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="hover:underline underline-offset-4"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}