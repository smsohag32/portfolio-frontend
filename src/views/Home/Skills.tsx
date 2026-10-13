"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { Globe, Server, PenTool, Layers, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

const skillCategories = [
   {
      id: "frontend",
      name: "Frontend Engineering",
      icon: <Globe className="w-6 h-6" />,
      description: "Modern UI architecture, responsive design systems & dynamic client state",
      skills: [
         { name: "React.js", level: "Expert", color: "from-cyan-500 to-blue-500" },
         { name: "Next.js", level: "Expert", color: "from-slate-700 to-slate-900" },
         { name: "TypeScript", level: "Advanced", color: "from-blue-600 to-indigo-600" },
         { name: "JavaScript (ES6+)", level: "Expert", color: "from-amber-400 to-amber-600" },
         { name: "Tailwind CSS", level: "Expert", color: "from-teal-400 to-cyan-600" },
         { name: "Redux / RTK Query", level: "Advanced", color: "from-purple-500 to-violet-700" },
         { name: "TanStack Query", level: "Advanced", color: "from-rose-500 to-red-600" },
         { name: "HTML5 / Semantic", level: "Expert", color: "from-orange-500 to-amber-600" },
         { name: "CSS3 / Animations", level: "Expert", color: "from-blue-500 to-cyan-500" },
         { name: "Shadcn UI", level: "Expert", color: "from-slate-800 to-black" },
         { name: "Framer Motion", level: "Advanced", color: "from-pink-500 to-violet-600" },
         { name: "GSAP 3", level: "Advanced", color: "from-emerald-500 to-green-600" },
         { name: "React Hook Form", level: "Advanced", color: "from-pink-600 to-rose-700" },
         { name: "Recharts", level: "Proficient", color: "from-teal-500 to-emerald-600" },
      ],
   },
   {
      id: "backend",
      name: "Backend & Systems",
      icon: <Server className="w-6 h-6" />,
      description: "Scalable REST APIs, authentication security, databases & microservices",
      skills: [
         { name: "Node.js", level: "Advanced", color: "from-green-600 to-emerald-700" },
         { name: "Express.js", level: "Advanced", color: "from-slate-600 to-slate-800" },
         { name: "MongoDB", level: "Advanced", color: "from-emerald-500 to-green-700" },
         { name: "Mongoose ODM", level: "Advanced", color: "from-red-600 to-amber-700" },
         { name: "PostgreSQL", level: "Proficient", color: "from-blue-600 to-sky-700" },
         { name: "RESTful APIs", level: "Expert", color: "from-indigo-500 to-blue-600" },
         { name: "JWT Auth", level: "Expert", color: "from-violet-500 to-purple-700" },
         { name: "Socket.io", level: "Proficient", color: "from-slate-700 to-slate-900" },
      ],
   },
   {
      id: "tools",
      name: "DevOps & Tooling",
      icon: <PenTool className="w-6 h-6" />,
      description: "Version control, containerization, deployments & developer workflows",
      skills: [
         { name: "Git & GitHub", level: "Expert", color: "from-orange-600 to-red-600" },
         { name: "Docker", level: "Proficient", color: "from-blue-500 to-sky-600" },
         { name: "Vercel / Cloud", level: "Advanced", color: "from-black to-slate-800" },
         { name: "VS Code Suite", level: "Expert", color: "from-blue-600 to-indigo-700" },
         { name: "Chrome DevTools", level: "Expert", color: "from-amber-500 to-blue-500" },
         { name: "Postman / Thunder", level: "Advanced", color: "from-orange-500 to-amber-600" },
         { name: "Figma (UI/UX)", level: "Proficient", color: "from-purple-500 to-pink-500" },
      ],
   },
];

export default function SkillsSection() {
   const sectionRef = useRef<HTMLElement | null>(null);
   const [activeTab, setActiveTab] = useState<string>("all");

   useLayoutEffect(() => {
      const section = sectionRef.current;
      if (!section) return;

      const ctx = gsap.context(() => {
         // Staggered reveal for category boxes
         gsap.fromTo(
            ".gsap-skill-box",
            { opacity: 0, y: 40, scale: 0.95 },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 0.8,
               stagger: 0.15,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
               },
            }
         );

         // Staggered pop-in for skill badges
         gsap.fromTo(
            ".gsap-skill-badge",
            { opacity: 0, scale: 0.8, y: 15 },
            {
               opacity: 1,
               scale: 1,
               y: 0,
               duration: 0.5,
               stagger: 0.02,
               ease: "back.out(1.7)",
               scrollTrigger: {
                  trigger: section,
                  start: "top 75%",
                  toggleActions: "play none none reverse",
               },
            }
         );

         // Floating micro-animation on highlight badges
         gsap.to(".gsap-float-pill", {
            y: -6,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.2,
         });
      }, sectionRef);

      return () => ctx.revert();
   }, []);

   const displayedCategories =
      activeTab === "all"
         ? skillCategories
         : skillCategories.filter((cat) => cat.id === activeTab);

   return (
      <section
         ref={sectionRef}
         className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
         {/* Background Orbs */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

         <div className="main-container relative z-10">
            <SectionHeading
               badge="Engineering Stack"
               icon={Layers}
               title="Technical Skills &"
               highlight="Competencies"
               description="A specialized toolkit refined over years of production engineering — designed for speed, robustness, and delightful user experiences."
            />

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
               <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                     activeTab === "all"
                        ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}>
                  All Technologies ({skillCategories.flatMap((c) => c.skills).length})
               </button>
               {skillCategories.map((cat) => (
                  <button
                     key={cat.id}
                     onClick={() => setActiveTab(cat.id)}
                     className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                        activeTab === cat.id
                           ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                           : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                     }`}>
                     {cat.name}
                  </button>
               ))}
            </div>

            {/* Grid of Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {displayedCategories.map((category) => (
                  <div
                     key={category.id}
                     className="gsap-skill-box relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7 shadow-xs backdrop-blur-xl transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40 dark:hover:bg-slate-900">
                     <div>
                        {/* Header */}
                        <div className="flex items-center gap-3.5 mb-3">
                           <div className="p-3 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-100 dark:border-blue-900/40 shadow-xs">
                              {category.icon}
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                                 {category.name}
                              </h3>
                              <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                                 {category.skills.length} core tools
                              </span>
                           </div>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                           {category.description}
                        </p>

                        {/* Skill Badges */}
                        <div className="flex flex-wrap gap-2">
                           {category.skills.map((skill) => {
                              const isHighlight =
                                 skill.name === "React.js" ||
                                 skill.name === "Next.js" ||
                                 skill.name === "TypeScript" ||
                                 skill.name === "Node.js" ||
                                 skill.name === "GSAP 3";

                              return (
                                 <div
                                    key={skill.name}
                                    className={`gsap-skill-badge ${
                                       isHighlight ? "gsap-float-pill" : ""
                                    } group inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-blue-400`}>
                                    <span
                                       className={`h-2 w-2 rounded-full bg-gradient-to-r ${skill.color} shadow-xs`}
                                    />
                                    <span>{skill.name}</span>
                                    <span className="text-[10px] font-normal text-slate-400 dark:text-slate-500 ml-0.5">
                                       {skill.level}
                                    </span>
                                 </div>
                              );
                           })}
                        </div>
                     </div>

                     {/* Footer stats badge */}
                     <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1 text-[11px]">
                           <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Production Verified
                        </span>
                        <span className="text-[11px] font-mono font-medium text-slate-500">
                           Tier 1 Stack
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
