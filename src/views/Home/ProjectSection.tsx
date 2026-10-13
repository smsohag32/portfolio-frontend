"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useGetProjectsQuery } from "@/redux-store/features/project-api";
import ProjectCardSkeleton from "@/components/skeleton/ProjectSkeleton";
import { ArrowRight, FolderKanban, Sparkles, Terminal, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/ui/Magnetic";

if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

const ProjectSection = () => {
   const { data: projects, isLoading } = useGetProjectsQuery("");
   const sectionRef = useRef<HTMLElement | null>(null);
   const bannerRef = useRef<HTMLDivElement | null>(null);
   const gridRef = useRef<HTMLDivElement | null>(null);

   useLayoutEffect(() => {
      const section = sectionRef.current;
      if (!section) return;

      const ctx = gsap.context(() => {
         // Animate the banner with parallax on scroll
         if (bannerRef.current) {
            gsap.fromTo(
               bannerRef.current,
               { y: 40, opacity: 0, scale: 0.96 },
               {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: bannerRef.current,
                     start: "top 85%",
                     toggleActions: "play none none reverse",
                  },
               }
            );
         }

         // Stagger and scale reveal for project cards
         const cards = gsap.utils.toArray<HTMLElement>(".gsap-project-card");
         if (cards.length > 0) {
            cards.forEach((card) => {
               gsap.fromTo(
                  card,
                  {
                     opacity: 0,
                     y: 60,
                     scale: 0.92,
                  },
                  {
                     opacity: 1,
                     y: 0,
                     scale: 1,
                     duration: 0.85,
                     ease: "power3.out",
                     scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                     },
                  }
               );
            });
         }
      }, sectionRef);

      return () => ctx.revert();
   }, [projects]);

   return (
      <section
         ref={sectionRef}
         className="relative overflow-hidden py-24 bg-slate-50/40 dark:bg-slate-950/40">
         {/* Soft background accents */}
         <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
         <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />

         <div className="main-container relative z-10">
            <SectionHeading
               badge="Portfolio"
               icon={FolderKanban}
               title="Featured"
               highlight="Projects"
               description="Explore handpicked enterprise applications, full-stack tools, and chrome extensions built with performance and elegance."
            />

            {/* Interactive Showcase Banner */}
            <div
               ref={bannerRef}
               className="mb-14 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 group">
               <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className="p-8 lg:p-10 lg:col-span-5 space-y-4">
                     <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                        <Sparkles className="h-3.5 w-3.5" /> High-Performance Architecture
                     </span>
                     <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Modern Web Systems & Scalable Solutions
                     </h3>
                     <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Every project represents a commitment to 60fps responsive interfaces, clean
                        type safety, robust REST/WebSocket APIs, and seamless database models.
                     </p>
                     <div className="flex flex-wrap gap-2 pt-2">
                        <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                           <Code2 className="h-3.5 w-3.5 text-blue-500" /> React & Next.js
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                           <Terminal className="h-3.5 w-3.5 text-emerald-500" /> Node & Express
                        </span>
                     </div>
                  </div>

                  <div className="relative h-64 sm:h-80 lg:h-full min-h-[280px] lg:col-span-7 overflow-hidden">
                     <Image
                        src="/images/developer_showcase_banner.jpg"
                        alt="Developer Workspace Showcase"
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900/60 lg:via-transparent" />
                  </div>
               </div>
            </div>

            {/* Projects Grid with ScrollTrigger reveals */}
            <div
               ref={gridRef}
               className="grid h-full w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
               {isLoading
                  ? [1, 2].map((i) => <ProjectCardSkeleton key={i} />)
                  : projects &&
                    projects?.projects?.slice(0, 6).map((project: any) => (
                       <div
                          key={project?._id ?? project?.id}
                          className="gsap-project-card">
                          <ProjectCard project={project} />
                       </div>
                    ))}
            </div>

            {/* Magnetic CTA button */}
            <div className="mt-14 flex justify-center">
               <Magnetic strength={0.3}>
                  <Link
                     href="/portfolio"
                     className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-md transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-blue-500">
                     View All Projects
                     <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
               </Magnetic>
            </div>
         </div>
      </section>
   );
};

export default ProjectSection;
