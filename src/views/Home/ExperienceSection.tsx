"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import ExperienceTimeline from "../Experience/ExperienceTimeline";
import SectionHeading from "@/components/ui/section-heading";

export default function ExperienceSection() {
   return (
      <section className="relative overflow-hidden bg-slate-50/50 py-24 dark:bg-slate-950/50">
         {/* Background accent ambient light */}
         <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

         <div className="main-container relative">
            <SectionHeading
               badge="Career Journey"
               icon={Briefcase}
               title="Professional"
               highlight="Experience"
               description="3+ years architecting scalable, production-grade web applications — bridging user-centric design and resilient server-side services."
            />

            <ExperienceTimeline />
         </div>
      </section>
   );
}
