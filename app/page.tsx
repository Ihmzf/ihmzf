<file>
00001| 'use client';
00002| 
00003| import { useState, useEffect } from 'react';
00004| import { FaEnvelope, FaLinkedin, FaXTwitter } from "react-icons/fa6";
00005| 
00006| export default function Home() {
00007|   const [displayedText, setDisplayedText] = useState('');
00008|   const [showCursor, setShowCursor] = useState(true);
00009|   const fullText = 'Hamza';
00010| 
00011|   useEffect(() => {
00012|     let currentIndex = 0;
00013|     const intervalId = setInterval(() => {
00014|       if (currentIndex <= fullText.length) {
00015|         setDisplayedText(fullText.slice(0, currentIndex));
00016|         currentIndex++;
00017|       } else {
00018|         clearInterval(intervalId);
00019|       }
00020|     }, 120);
00021| 
00022|     return () => clearInterval(intervalId);
00023|   }, []);
00024| 
00025|   const links = [
00026|     { name: 'twitter', href: 'https://x.com/ihmzf', icon: <FaXTwitter /> },
00027|     { name: 'linkedin', href: 'https://www.linkedin.com/in/hamza-faisal-b40427294/', icon: <FaLinkedin /> },
00028|     { name: 'email', href: 'mailto:hamza@asimov.mov', icon: <FaEnvelope /> },
00029|   ];
00030| 
00031|   return (
00032|     <div className="min-h-screen flex flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-20 max-w-4xl mx-auto relative z-10">
00033|       {/* Main Content */}
00034|       <div className="flex-1 flex flex-col justify-center">
00035|         <div className="space-y-6">
00036|           {/* Terminal-style greeting */}
00037|           <div className="text-sm text-muted tracking-widest uppercase">
00038|             <span className="text-accent">$</span> whoami
00039|           </div>
00040| 
00041|           {/* Name with typing animation */}
00042|           <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight glow text-accent">
00043|             {displayedText}
00044|             <span className="cursor-blink text-accent-dim">_</span>
00045|           </h1>
00046| 
00047|           {/* Tagline */}
00048|           <div className="space-y-1 pt-4 border-l-2 border-border pl-4">
00049|             <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
00050|               <span className="text-accent-dim">//</span> I love to read history, mathematics, philosophy, sci-fi + technical books.
00051|             </p>
00052|           </div>
00053| 
00054|           {/* Description */}
00055|           <div className="pt-6 space-y-2">
00056|             <p className="text-sm md:text-base text-muted">
00057|               <span className="text-accent mr-2">{'>'}</span>
00058|               I also code. Mainly in <span className="text-foreground">Python</span> and <span className="text-foreground">TypeScript</span>.
00059|             </p>
00060|             <p className="text-sm md:text-base text-muted">
00061|               <span className="text-accent mr-2">{'>'}</span>
00062|               Learning <span className="text-foreground">Machine Learning</span> currently.
00063|             </p>
00064|           </div>
00065|         </div>
00066|       </div>
00067| 
00068|       {/* Project Section */}
00069|       <div className="mb-12 p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
00070|         <p className="text-xs text-muted uppercase tracking-widest mb-2">current_project</p>
00071|         <p className="text-sm md:text-base text-foreground/80">
00072|           simplifying backend architecture for AI applications
00073|         </p>
00074|         <p className="text-sm md:text-base text-muted flex items-center gap-2 mt-1">
00075|           building{' '}
00076|           <span
00077|             className="text-accent font-medium cursor-pointer hover:underline underline-offset-4"
00078|             onClick={() => window.open('https://asimov.mov', '_blank')}
00079|           >
00080|             Lithio
00081|           </span>
00082|           <span className="text-accent-dim text-xs">[link]</span>
00083|         </p>
00084|       </div>
00085| 
00086|       {/* Footer Links */}
00087|       <nav>
00088|         <div className="text-xs text-muted uppercase tracking-widest mb-4">links</div>
00089|         <ul className="flex flex-wrap gap-6 md:gap-8 text-sm">
00090|           {links.map((link, index) => (
00091|             <li key={index} className="group flex items-center gap-2 text-muted hover:text-accent transition-all duration-200">
00092|               <span className="text-accent-dim group-hover:text-accent">{link.icon}</span>
00093|               <a
00094|                 href={link.href}
00095|                 target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
00096|                 rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
00097|                 className="hover:underline underline-offset-4"
00098|               >
00099|                 {link.name}
00100|               </a>
00101|             </li>
00102|           ))}
00103|         </ul>
00104|       </nav>
00105|     </div>
00106|   );
00107| }

(End of file - total 107 lines)
