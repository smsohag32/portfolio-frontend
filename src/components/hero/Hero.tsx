"use client";

import Image from "next/image";
import React, { useRef, useLayoutEffect, useState } from "react";
import profile from "@/assets/photo/sohag3.jpg";
import line from "@/assets/bg/line.svg";
import {
   Terminal,
   ChevronRight,
   Github,
   Linkedin,
   Mail,
   Code,
   Sparkles,
   ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { contactsData } from "@/data/contacts";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Magnetic from "@/components/ui/Magnetic";

const stats = [
   { id: 1, label: "Projects Completed", value: 30, suffix: "+" },
   { id: 2, label: "Years Experience", value: 3, decimals: 0, suffix: "+" },
];

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
   return (
      <Magnetic strength={0.35}>
         <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur-md transition-all hover:bg-slate-900 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-900">
            {icon}
         </a>
      </Magnetic>
   );
}

const Hero = () => {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const imageRef = useRef<HTMLDivElement | null>(null);
   const floatingBadge1 = useRef<HTMLDivElement | null>(null);
   const floatingBadge2 = useRef<HTMLDivElement | null>(null);
   const [mounted, setMounted] = useState(false);
   const router = useRouter();

   useLayoutEffect(() => {
      setMounted(true);
      const ctx = gsap.context(() => {
         const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

         // Initial state setup to prevent flash of unstyled content
         gsap.set(".gsap-hero-elem", { opacity: 0, y: 35 });
         gsap.set(imageRef.current, { opacity: 0, scale: 0.92, y: 30 });
         gsap.set([floatingBadge1.current, floatingBadge2.current], { opacity: 0, scale: 0.8 });

         // Staggered reveal sequence on load
         tl.to(".gsap-hero-badge", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
         })
            .to(
               ".gsap-hero-title",
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.9,
                  stagger: 0.12,
               },
               "-=0.5"
            )
            .to(
               ".gsap-hero-bio",
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
               },
               "-=0.6"
            )
            .to(
               ".gsap-hero-stat",
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0.1,
               },
               "-=0.5"
            )
            .to(
               ".gsap-hero-cta",
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: "power3.out",
               },
               "-=0.5"
            )
            .to(
               imageRef.current,
               {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 1.1,
                  ease: "power3.out",
               },
               "-=0.9"
            )
            .to(
               [floatingBadge1.current, floatingBadge2.current],
               {
                  opacity: 1,
                  scale: 1,
                  duration: 0.7,
                  stagger: 0.15,
                  ease: "back.out(2)",
               },
               "-=0.6"
            );

         // Continuous subtle floating micro-animation for badges
         if (floatingBadge1.current) {
            gsap.to(floatingBadge1.current, {
               y: -12,
               duration: 3,
               repeat: -1,
               yoyo: true,
               ease: "sine.inOut",
            });
         }

         if (floatingBadge2.current) {
            gsap.to(floatingBadge2.current, {
               y: 12,
               duration: 3.6,
               repeat: -1,
               yoyo: true,
               ease: "sine.inOut",
               delay: 0.5,
            });
         }
      }, containerRef);

      return () => ctx.revert();
   }, []);

   return (
      <div
         ref={containerRef}
         className="relative min-h-[92vh] flex items-center justify-center overflow-hidden lg:bg-gradient-to-b lg:from-slate-50/70 lg:via-white lg:to-slate-50/30 dark:lg:from-slate-950 dark:lg:via-slate-900 dark:lg:to-slate-950">
         {/* Background Glows */}
         <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />
            <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
         </div>

         <div className="main-container relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-14 lg:py-24">
            {/* Left Content */}
            <div className="w-full lg:w-3/5 space-y-7">
               {/* Available Badge */}
               <div className="gsap-hero-elem gsap-hero-badge inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-xs backdrop-blur-md dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                  <span className="relative flex h-2 w-2">
                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                     <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for new opportunities
               </div>

               {/* Headings */}
               <div className="space-y-3">
                  <p className="gsap-hero-elem gsap-hero-title font-outfit text-base lg:text-lg text-slate-500 dark:text-slate-400 font-medium">
                     Hello world, I am
                  </p>
                  <h1 className="gsap-hero-elem gsap-hero-title text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                     Sohag Sheik
                  </h1>
                  <div className="gsap-hero-elem gsap-hero-title flex items-center gap-3 pt-1">
                     <div className="p-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl shadow-md">
                        <Terminal className="w-6 h-6" />
                     </div>
                     <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                        Full Stack Engineer
                     </h2>
                  </div>
               </div>

               {/* Bio */}
               <p className="gsap-hero-elem gsap-hero-bio text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-outfit">
                  I architect high-performance, accessible, and delightful digital experiences.
                  Specializing in React, Next.js, TypeScript, and modern cloud ecosystems to turn
                  complex problems into elegant software solutions.
               </p>

               {/* Stats Row */}
               <div className="gsap-hero-elem gsap-hero-stat grid grid-cols-2 gap-6 pt-2 max-w-md">
                  {stats.map((stat) => (
                     <div
                        key={stat.id}
                        className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-xs backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
                        <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                           {mounted ? (
                              <CountUp
                                 end={stat.value}
                                 duration={2.5}
                                 decimals={stat.decimals || 0}
                                 suffix={stat.suffix}
                              />
                           ) : (
                              `${stat.value}${stat.suffix}`
                           )}
                        </div>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                           {stat.label}
                        </p>
                     </div>
                  ))}
               </div>

               {/* CTA Buttons with Magnetic Hover */}
               <div className="gsap-hero-elem gsap-hero-cta flex flex-wrap items-center gap-4 pt-3">
                  <Magnetic strength={0.3}>
                     <Button
                        onClick={() => router.push("/portfolio")}
                        className="h-12 px-8 bg-slate-900 text-white hover:bg-blue-600 rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-slate-900/10 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400">
                        Explore Projects
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                     </Button>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                     <Button
                        variant="outline"
                        onClick={() => window.open(contactsData?.linkedin, "_blank")}
                        className="h-12 px-8 rounded-full border-slate-300 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center gap-2 dark:border-slate-700 dark:hover:bg-slate-800">
                        Get In Touch
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                     </Button>
                  </Magnetic>
               </div>
            </div>

            {/* Right Visual Side */}
            <div className="w-full lg:w-2/5 relative flex justify-center mt-6 lg:mt-0">
               <div
                  ref={imageRef}
                  className="relative z-20 w-full max-w-[340px] lg:max-w-sm">
                  {/* Glassmorphic Profile Card */}
                  <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/80 dark:border-slate-800/80 p-3 rounded-[2.5rem] shadow-2xl overflow-hidden group">
                     <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800/50">
                        <Image
                           src={profile}
                           alt="Sohag Sheik"
                           className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                           priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                        {/* Social Links on Image Bottom */}
                        <div className="absolute bottom-5 left-0 right-0 flex justify-center translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                           <div className="flex gap-3">
                              <SocialLink
                                 href={contactsData?.github}
                                 icon={<Github size={18} />}
                              />
                              <SocialLink
                                 href={contactsData?.linkedin}
                                 icon={<Linkedin size={18} />}
                              />
                              <SocialLink
                                 href="mailto:sohagsheik32@gmail.com"
                                 icon={<Mail size={18} />}
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Floating Micro-Badges */}
                  <div
                     ref={floatingBadge1}
                     className="absolute -left-6 lg:-left-12 top-1/4 bg-white/95 dark:bg-slate-800/95 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 backdrop-blur-md z-30">
                     <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
                        <Code size={18} />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                           Full Stack
                        </p>
                        <p className="text-[10px] font-medium text-slate-500">Next.js & Node</p>
                     </div>
                  </div>

                  <div
                     ref={floatingBadge2}
                     className="absolute -right-6 lg:-right-10 bottom-1/4 bg-white/95 dark:bg-slate-800/95 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 backdrop-blur-md z-30">
                     <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                        <Sparkles size={18} />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                           3+ Years
                        </p>
                        <p className="text-[10px] font-medium text-slate-500">Experience</p>
                     </div>
                  </div>

                  {/* Glow Behind Profile */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full -z-10 pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full -z-10 pointer-events-none" />
               </div>
            </div>
         </div>

         {/* Bottom Line Pattern */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none opacity-30">
            <Image
               src={line}
               alt=""
               className="w-full h-auto"
            />
         </div>
      </div>
   );
};

export default Hero;
