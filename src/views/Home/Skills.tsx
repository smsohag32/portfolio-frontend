"use client";

import React, { useRef, useLayoutEffect, useState, useMemo } from "react";
import {
   Globe,
   Server,
   Database,
   Wrench,
   Search,
   CheckCircle,
   Sparkles,
   Code2,
   Cpu,
   Layers,
   X,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

interface SkillItem {
   name: string;
   category: "frontend" | "backend" | "database" | "tools";
   categoryName: string;
   level: number; // percentage
   badge: "Expert" | "Advanced" | "Proficient";
   useCase: string;
   color: string;
}

const skillsData: SkillItem[] = [
   // Frontend
   {
      name: "React.js",
      category: "frontend",
      categoryName: "Frontend",
      level: 95,
      badge: "Expert",
      useCase: "Component architecture, hooks, custom state & virtual DOM",
      color: "from-cyan-500 to-blue-500",
   },
   {
      name: "Next.js",
      category: "frontend",
      categoryName: "Frontend",
      level: 92,
      badge: "Expert",
      useCase: "App Router, Server Components, SSR/SSG & Turbopack",
      color: "from-slate-700 to-slate-900",
   },
   {
      name: "TypeScript",
      category: "frontend",
      categoryName: "Frontend",
      level: 90,
      badge: "Expert",
      useCase: "Strict type safety, generic interfaces & scalable codebases",
      color: "from-blue-600 to-indigo-600",
   },
   {
      name: "JavaScript (ES6+)",
      category: "frontend",
      categoryName: "Frontend",
      level: 95,
      badge: "Expert",
      useCase: "Modern async/await, closures, prototypes & DOM APIs",
      color: "from-amber-400 to-amber-600",
   },
   {
      name: "Tailwind CSS",
      category: "frontend",
      categoryName: "Frontend",
      level: 95,
      badge: "Expert",
      useCase: "Responsive utility styling, design tokens & dark mode",
      color: "from-teal-400 to-cyan-600",
   },
   {
      name: "Redux Toolkit & RTK Query",
      category: "frontend",
      categoryName: "Frontend",
      level: 88,
      badge: "Advanced",
      useCase: "Global state slices, normalized caching & query hooks",
      color: "from-purple-500 to-violet-700",
   },
   {
      name: "TanStack Query",
      category: "frontend",
      categoryName: "Frontend",
      level: 85,
      badge: "Advanced",
      useCase: "Server state synchronization, pagination & optimistic updates",
      color: "from-rose-500 to-red-600",
   },
   {
      name: "GSAP 3 & Framer Motion",
      category: "frontend",
      categoryName: "Frontend",
      level: 88,
      badge: "Advanced",
      useCase: "60fps ScrollTrigger timelines, micro-interactions & physics",
      color: "from-emerald-500 to-green-600",
   },
   {
      name: "Shadcn UI & Radix",
      category: "frontend",
      categoryName: "Frontend",
      level: 92,
      badge: "Expert",
      useCase: "Accessible WAI-ARIA primitives, modal dialogs & dropdowns",
      color: "from-slate-800 to-black",
   },
   {
      name: "HTML5 & Semantic Web",
      category: "frontend",
      categoryName: "Frontend",
      level: 95,
      badge: "Expert",
      useCase: "SEO semantic tags, web accessibility (a11y) & rich metadata",
      color: "from-orange-500 to-amber-600",
   },

   // Backend
   {
      name: "Node.js",
      category: "backend",
      categoryName: "Backend",
      level: 90,
      badge: "Expert",
      useCase: "Event-driven runtime, non-blocking I/O & microservices",
      color: "from-green-600 to-emerald-700",
   },
   {
      name: "Express.js",
      category: "backend",
      categoryName: "Backend",
      level: 88,
      badge: "Advanced",
      useCase: "REST routing, custom middleware, error handling & controllers",
      color: "from-slate-600 to-slate-800",
   },
   {
      name: "REST API Design",
      category: "backend",
      categoryName: "Backend",
      level: 92,
      badge: "Expert",
      useCase: "Idempotent endpoints, HTTP status standards & JSON contracts",
      color: "from-indigo-500 to-blue-600",
   },
   {
      name: "JWT Authentication",
      category: "backend",
      categoryName: "Backend",
      level: 90,
      badge: "Expert",
      useCase: "Stateless bearer tokens, refresh tokens & role-based RBAC",
      color: "from-violet-500 to-purple-700",
   },
   {
      name: "Socket.io / WebSockets",
      category: "backend",
      categoryName: "Backend",
      level: 80,
      badge: "Proficient",
      useCase: "Bi-directional real-time events, room broadcasting & alerts",
      color: "from-slate-700 to-slate-900",
   },

   // Database & Cloud
   {
      name: "MongoDB",
      category: "database",
      categoryName: "Databases",
      level: 90,
      badge: "Expert",
      useCase: "NoSQL document collections, aggregation pipelines & indexing",
      color: "from-emerald-500 to-green-700",
   },
   {
      name: "Mongoose ODM",
      category: "database",
      categoryName: "Databases",
      level: 90,
      badge: "Expert",
      useCase: "Schema validation, pre/post hooks, virtuals & population",
      color: "from-red-600 to-amber-700",
   },
   {
      name: "PostgreSQL & MySQL",
      category: "database",
      categoryName: "Databases",
      level: 82,
      badge: "Proficient",
      useCase: "Relational queries, primary/foreign keys & ACID transactions",
      color: "from-blue-600 to-sky-700",
   },
   {
      name: "Cloudinary CDN",
      category: "database",
      categoryName: "Cloud & Media",
      level: 88,
      badge: "Advanced",
      useCase: "Secure multipart asset uploads, responsive image optimization",
      color: "from-blue-500 to-indigo-600",
   },

   // Tools & DevOps
   {
      name: "Git & GitHub",
      category: "tools",
      categoryName: "Tools & DevOps",
      level: 92,
      badge: "Expert",
      useCase: "Version control, feature branching, pull requests & code reviews",
      color: "from-orange-600 to-red-600",
   },
   {
      name: "Docker Containers",
      category: "tools",
      categoryName: "Tools & DevOps",
      level: 78,
      badge: "Proficient",
      useCase: "Containerized development environments & multi-stage builds",
      color: "from-blue-500 to-sky-600",
   },
   {
      name: "Vercel & Cloud Deploy",
      category: "tools",
      categoryName: "Tools & DevOps",
      level: 90,
      badge: "Expert",
      useCase: "Edge deployments, environment variables, CI/CD pipelines",
      color: "from-black to-slate-800",
   },
   {
      name: "VS Code Suite",
      category: "tools",
      categoryName: "Tools & DevOps",
      level: 95,
      badge: "Expert",
      useCase: "Debugging, snippets, linting, prettier & workflow acceleration",
      color: "from-blue-600 to-indigo-700",
   },
   {
      name: "Chrome & Redux DevTools",
      category: "tools",
      categoryName: "Tools & DevOps",
      level: 92,
      badge: "Expert",
      useCase: "Network waterfall profiling, memory leak detection & state inspect",
      color: "from-amber-500 to-blue-500",
   },
];

const categoryTabs = [
   { id: "all", label: "All Skills", icon: Layers, count: skillsData.length },
   {
      id: "frontend",
      label: "Frontend & UI",
      icon: Globe,
      count: skillsData.filter((s) => s.category === "frontend").length,
   },
   {
      id: "backend",
      label: "Backend & APIs",
      icon: Server,
      count: skillsData.filter((s) => s.category === "backend").length,
   },
   {
      id: "database",
      label: "Databases & Cloud",
      icon: Database,
      count: skillsData.filter((s) => s.category === "database").length,
   },
   {
      id: "tools",
      label: "DevOps & Tools",
      icon: Wrench,
      count: skillsData.filter((s) => s.category === "tools").length,
   },
];

export default function SkillsSection() {
   const sectionRef = useRef<HTMLElement | null>(null);
   const [activeTab, setActiveTab] = useState<string>("all");
   const [searchQuery, setSearchQuery] = useState<string>("");

   // Filter skills based on tab and search query
   const filteredSkills = useMemo(() => {
      return skillsData.filter((skill) => {
         const matchesTab = activeTab === "all" || skill.category === activeTab;
         const matchesSearch =
            searchQuery.trim() === "" ||
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
         return matchesTab && matchesSearch;
      });
   }, [activeTab, searchQuery]);

   useLayoutEffect(() => {
      const section = sectionRef.current;
      if (!section) return;

      const ctx = gsap.context(() => {
         // Animate skill cards entering viewport
         gsap.fromTo(
            ".gsap-skill-card",
            { opacity: 0, y: 30, scale: 0.95 },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 0.6,
               stagger: 0.04,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: section,
                  start: "top 78%",
                  toggleActions: "play none none reverse",
               },
            }
         );

         // Animate progress bars filling
         gsap.fromTo(
            ".gsap-skill-progress",
            { width: "0%" },
            {
               width: (index, target) => target.dataset.level || "80%",
               duration: 1.1,
               ease: "power2.out",
               stagger: 0.03,
               scrollTrigger: {
                  trigger: section,
                  start: "top 75%",
                  toggleActions: "play none none reverse",
               },
            }
         );
      }, sectionRef);

      return () => ctx.revert();
   }, [filteredSkills]);

   return (
      <section
         ref={sectionRef}
         className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950">
         {/* Background Glows */}
         <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[140px]" />

         <div className="main-container relative z-10">
            <SectionHeading
               badge="Core Competencies"
               icon={Code2}
               title="Technical Skills &"
               highlight="Competencies"
               description="A transparent breakdown of my core technical proficiencies, production experience, and engineering toolchain."
            />

            {/* Top Spotlight Banner: Primary Daily Drivers */}
            <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/90">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                     <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                        <Sparkles className="h-3.5 w-3.5" /> Tier 1 Production Drivers
                     </span>
                     <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                        Specialized Core Stack
                     </h3>
                     <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        The primary languages and frameworks I use every day to deliver enterprise applications.
                     </p>
                  </div>

                  <div className="flex items-center gap-2">
                     <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full">
                        <CheckCircle className="h-4 w-4" /> 3+ Years Hands-on Experience
                     </span>
                  </div>
               </div>

               {/* Quick Highlight Pillars */}
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4 dark:border-blue-900/40 dark:bg-blue-950/20">
                     <div className="text-sm font-bold text-slate-900 dark:text-white">
                        React & Next.js
                     </div>
                     <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                        Frontend Architecture
                     </div>
                     <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                        App Router, SSR/SSG & component systems
                     </p>
                  </div>

                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4 dark:border-indigo-900/40 dark:bg-indigo-950/20">
                     <div className="text-sm font-bold text-slate-900 dark:text-white">
                        TypeScript
                     </div>
                     <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                        Type-Safe Systems
                     </div>
                     <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                        Generics, strict typing & safe contracts
                     </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
                     <div className="text-sm font-bold text-slate-900 dark:text-white">
                        Node & Express
                     </div>
                     <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                        Scalable Backends
                     </div>
                     <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                        RESTful APIs, JWT & async pipelines
                     </p>
                  </div>

                  <div className="rounded-2xl border border-violet-100 bg-violet-50/40 p-4 dark:border-violet-900/40 dark:bg-violet-950/20">
                     <div className="text-sm font-bold text-slate-900 dark:text-white">
                        MongoDB & PostgreSQL
                     </div>
                     <div className="text-xs text-violet-600 dark:text-violet-400 font-medium mt-0.5">
                        Modern Databases
                     </div>
                     <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                        Aggregation pipelines, indexing & ACID
                     </p>
                  </div>
               </div>
            </div>

            {/* Controls Bar: Category Tabs & Search Box */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
               {/* Category Tabs */}
               <div className="flex flex-wrap items-center justify-center gap-2">
                  {categoryTabs.map((tab) => {
                     const Icon = tab.icon;
                     const isActive = activeTab === tab.id;
                     return (
                        <button
                           key={tab.id}
                           onClick={() => setActiveTab(tab.id)}
                           className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                              isActive
                                 ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 dark:bg-white dark:text-slate-900"
                                 : "border border-slate-200/80 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-white"
                           }`}>
                           <Icon className="h-3.5 w-3.5" />
                           <span>{tab.label}</span>
                           <span
                              className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                                 isActive
                                    ? "bg-white/20 text-white dark:bg-slate-900/20 dark:text-slate-900"
                                    : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                              }`}>
                              {tab.count}
                           </span>
                        </button>
                     );
                  })}
               </div>

               {/* Quick Search Box */}
               <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                     type="text"
                     placeholder="Search skill (e.g. Next.js)..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full rounded-full border border-slate-200/90 bg-white py-2 pl-9 pr-9 text-xs text-slate-900 shadow-xs outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  />
                  {searchQuery && (
                     <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <X className="h-3.5 w-3.5" />
                     </button>
                  )}
               </div>
            </div>

            {/* Skills Grid: Clear, User-Friendly Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {filteredSkills.map((skill) => (
                  <div
                     key={skill.name}
                     className="gsap-skill-card group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-500/40">
                     <div>
                        {/* Top Row: Name + Badge */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                           <div className="flex items-center gap-2">
                              <span
                                 className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${skill.color} shadow-xs flex-shrink-0`}
                              />
                              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                 {skill.name}
                              </h4>
                           </div>
                           <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                                 skill.badge === "Expert"
                                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40"
                                    : skill.badge === "Advanced"
                                    ? "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40"
                                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                              }`}>
                              {skill.badge}
                           </span>
                        </div>

                        {/* Practical Use Case */}
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[34px] line-clamp-2 mb-4">
                           {skill.useCase}
                        </p>
                     </div>

                     {/* Bottom: Proficiency Bar with percentage */}
                     <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-center justify-between text-[11px] mb-1.5 font-medium">
                           <span className="text-slate-400 dark:text-slate-500 font-mono">
                              {skill.categoryName}
                           </span>
                           <span className="text-slate-700 dark:text-slate-300 font-mono font-semibold">
                              {skill.level}%
                           </span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                           <div
                              data-level={`${skill.level}%`}
                              className={`gsap-skill-progress h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-300`}
                              style={{ width: `${skill.level}%` }}
                           />
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Empty Search State */}
            {filteredSkills.length === 0 && (
               <div className="my-12 rounded-3xl border border-dashed border-slate-300 bg-white/60 p-12 text-center dark:border-slate-800 dark:bg-slate-900/40">
                  <Cpu className="mx-auto h-10 w-10 text-slate-400 mb-2" />
                  <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                     No skills found matching &ldquo;{searchQuery}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                     Try adjusting your search query or reset the category filter.
                  </p>
                  <button
                     onClick={() => {
                        setSearchQuery("");
                        setActiveTab("all");
                     }}
                     className="mt-5 inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-900">
                     Reset Filters
                  </button>
               </div>
            )}
         </div>
      </section>
   );
}
