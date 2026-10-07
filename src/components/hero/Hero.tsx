"use client";
import Image from "next/image";
import React from "react";
import profile from "@/assets/photo/sohag.png";
import line from "@/assets/bg/line.svg";
import { motion } from "framer-motion";
import {
   Terminal,
   ChevronRight,
   Github,
   Linkedin,
   Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { contactsData } from "@/data/contacts";
import { useRouter } from "next/navigation";

const stats = [
   { id: 1, label: "Projects", value: 20, suffix: "+" },
   { id: 2, label: "Years of Experience", value: 1.5, decimals: 1, suffix: "+" },
];

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
   return (
      <motion.a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}>
         {icon}
      </motion.a>
   );
}

const Hero = () => {
   const [isHovered, setIsHovered] = useState(false);
   const [mounted, setMounted] = useState(false);
   const router = useRouter();

   useEffect(() => {
      setMounted(true);
   }, []);

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      },
   };

   const itemVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
      },
   };

   if (!mounted) return null;

   return (
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden lg:bg-gradient-to-b lg:from-slate-50 lg:to-white">
         {/* Background Elements */}
         <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
         </div>

         <div className="main-container relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-24">
            {/* Left Content */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               className="w-full lg:w-3/5 space-y-8"
            >
               <motion.div variants={itemVariants} className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-medium text-sm border border-blue-100 uppercase tracking-wider">
                     Available for work
                  </span>
                  <p className="font-outfit text-slate-500 font-medium tracking-tight">
                     Hey, I am
                  </p>
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                     Sohag Sheik
                  </h1>
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-slate-900 rounded-lg">
                        <Terminal className="w-6 h-6 text-white" />
                     </div>
                     <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-500">
                        Full Stack Engineer
                     </h2>
                  </div>
               </motion.div>

               <motion.p
                  variants={itemVariants}
                  className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-outfit"
               >
                  I build high-performance, accessible, and beautiful web experiences.
                  Specializing in React, Next.js, and modern web ecosystems to turn
                  ambitious designs into reality.
               </motion.p>

               <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 pt-4">
                  {stats.map((stat) => (
                     <div key={stat.id} className="space-y-1">
                        <div className="text-3xl font-bold text-slate-900">
                           <CountUp
                              end={stat.value}
                              duration={2.5}
                              decimals={stat.decimals || 0}
                              suffix={stat.suffix}
                           />
                        </div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                           {stat.label}
                        </p>
                     </div>
                  ))}
               </motion.div>

               <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
                  <Button
                     onClick={() => router.push("/portfolio")}
                     className="h-12 px-8 bg-slate-900 text-white hover:bg-slate-800 rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-slate-200"
                  >
                     View Projects
                     <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                     variant="outline"
                     onClick={() => window.open(contactsData?.linkedin, "_blank")}
                     className="h-12 px-8 rounded-full border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                     Get in touch
                  </Button>
               </motion.div>
            </motion.div>

            {/* Right Content - Visuals */}
            <motion.div
               variants={itemVariants}
               initial="hidden"
               animate="visible"
               className="w-full lg:w-2/5 relative"
            >
               <div className="relative z-20">
                  {/* Glassmorphism Code Card */}
                  <motion.div
                     whileHover={{ y: -5 }}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                     className="relative bg-white/40 backdrop-blur-3xl border border-white/30 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group min-h-[400px] flex flex-col justify-center"
                  >
                     <div className="flex gap-2 mb-8">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                     </div>

                     <pre className="font-mono text-[13px] lg:text-sm leading-relaxed">
                        <code className="space-y-2">
                           <div className="flex items-start gap-2">
                              <span className="text-blue-500 italic">const</span>
                              <span className="text-emerald-600 font-semibold">sohag</span>
                              <span className="text-slate-400">=</span>
                              <span className="text-slate-400">{"{"}</span>
                           </div>
                           <div className="pl-6 group-hover:pl-8 transition-all">
                              <span className="text-slate-500">frontend:</span>
                              <span className="text-slate-400">[</span>
                              <span className="text-amber-600">&apos;React&apos;</span>,
                              <span className="text-amber-600">&apos;Next.js&apos;</span>,
                              <span className="text-amber-600">&apos;Tailwind&apos;</span>
                              <span className="text-slate-400">]</span>,
                           </div>
                           <div className="pl-6 group-hover:pl-8 transition-all">
                              <span className="text-slate-500">backend:</span>
                              <span className="text-slate-400">[</span>
                              <span className="text-amber-600">&apos;Node.js&apos;</span>,
                              <span className="text-amber-600">&apos;Express&apos;</span>,
                              <span className="text-amber-600">&apos;Mongoose&apos;</span>
                              <span className="text-slate-400">]</span>,
                           </div>
                           <div className="pl-6 group-hover:pl-8 transition-all">
                              <span className="text-slate-500">database:</span>
                              <span className="text-slate-400">[</span>
                              <span className="text-amber-600">&apos;MongoDB&apos;</span>,
                              <span className="text-amber-600">&apos;MySQL&apos;</span>,
                              <span className="text-amber-600">&apos;Postgres&apos;</span>
                              <span className="text-slate-400">]</span>,
                           </div>
                           <div className="pl-6 group-hover:pl-8 transition-all">
                              <span className="text-slate-500">tools:</span>
                              <span className="text-slate-400">[</span>
                              <span className="text-amber-600">&apos;Docker&apos;</span>,
                              <span className="text-amber-600">&apos;AWS&apos;</span>,
                              <span className="text-amber-600">&apos;Git&apos;</span>
                              <span className="text-slate-400">]</span>,
                           </div>
                           <div className="pl-6 group-hover:pl-8 transition-all">
                              <span className="text-slate-500">creative:</span>
                              <span className="text-violet-600 font-semibold">true</span>
                           </div>
                           <div className="pl-0 text-slate-400">{"}"};</div>
                        </code>
                     </pre>

                     {/* Professional Profile Hover Overlay */}
                     <motion.div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                     >
                        <motion.div
                           className="relative w-48 h-48 lg:w-56 lg:h-56 mb-6 px-2"
                           initial={{ scale: 0.9, opacity: 0 }}
                           animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                           <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" />
                           <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                              <Image
                                 src={profile}
                                 alt="Sohag"
                                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                              />
                           </div>
                        </motion.div>

                        <motion.div
                           initial={{ y: 20, opacity: 0 }}
                           animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                           transition={{ duration: 0.5, delay: 0.1 }}
                        >
                           <h3 className="text-white font-bold text-3xl mb-1 tracking-tight">Sohag Sheik</h3>
                           <p className="text-emerald-400 font-semibold text-sm mb-8 uppercase tracking-[0.3em]">Full Stack Engineer</p>

                           <div className="flex gap-5 justify-center">
                              <SocialLink href={contactsData?.github} icon={<Github size={22} />} />
                              <SocialLink href={contactsData?.linkedin} icon={<Linkedin size={22} />} />
                              <SocialLink href="mailto:sohagsheik32@gmail.com" icon={<Mail size={22} />} />
                           </div>
                        </motion.div>

                        <motion.div
                           className="absolute bottom-8 left-8 right-8 border-t border-white/10 pt-4"
                           initial={{ opacity: 0 }}
                           animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                           transition={{ duration: 0.5, delay: 0.3 }}
                        >
                           <p className="text-slate-300 text-xs font-medium italic opacity-80 uppercase tracking-widest">&quot;Crafting Digital Excellence&quot;</p>
                        </motion.div>
                     </motion.div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full z-0" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full z-0" />
               </div>
            </motion.div>
         </div>

         {/* Bottom Line Pattern */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none opacity-40">
            <Image src={line} alt="" className="w-full h-auto" />
         </div>
      </div>
   );
};

export default Hero;
