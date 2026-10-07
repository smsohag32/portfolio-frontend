"use client";

import { motion } from "framer-motion";
import { Globe, Server, PenTool, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const skillCategories = [
   {
      name: "Frontend Development",
      icon: <Globe className="w-7 h-7" />,
      skills: [
         { name: "HTML5", level: 95 },
         { name: "CSS3", level: 90 },
         { name: "Tailwind CSS", level: 95 },
         { name: "JavaScript", level: 90 },
         { name: "TypeScript", level: 85 },
         { name: "React.js", level: 90 },
         { name: "Next.js", level: 85 },
         { name: "Redux / RTK Query", level: 85 },
         { name: "TanStack Query", level: 80 },
         { name: "Context API", level: 85 },
         { name: "Shadcn UI", level: 90 },
         { name: "Material UI", level: 80 },
         { name: "Recharts", level: 75 },
         { name: "Swiper.js", level: 80 },
         { name: "React Hook Form", level: 85 },
      ],
   },
   {
      name: "Backend & APIs",
      icon: <Server className="w-7 h-7" />,
      skills: [
         { name: "Node.js", level: 85 },
         { name: "Express.js", level: 80 },
         { name: "NoSQL / MongoDB", level: 85 },
         { name: "MySQL / PostgreSQL", level: 80 },
         { name: "Mongoose", level: 80 },
         { name: "REST APIs", level: 90 },
         { name: "JWT", level: 85 },
         { name: "WebSocket / Socket.io", level: 75 },
      ],
   },
   {
      name: "Tools & Hosting",
      icon: <PenTool className="w-7 h-7" />,
      skills: [
         { name: "VS Code", level: 95 },
         { name: "Git / GitHub", level: 90 },
         { name: "Figma", level: 75 },
         { name: "Jira", level: 80 },
         { name: "Docker", level: 70 },
         { name: "AWS", level: 65 },
         { name: "Shared Hosting", level: 85 },
         { name: "Chrome DevTools", level: 90 },
         { name: "Redux DevTools", level: 85 },
      ],
   },
];

const SkillCard = ({
   skill,
   index,
}: {
   skill: { name: string; level: number };
   index: number;
}) => (
   <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 group cursor-default"
   >
      <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-500 dark:bg-blue-400/40 dark:group-hover:bg-blue-400 transition-colors shadow-[0_0_8px_rgba(59,130,246,0.5)] opacity-50 group-hover:opacity-100" />
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
         {skill.name}
      </span>
   </motion.div>
);

const CategoryCard = ({ category, index }: { category: (typeof skillCategories)[0], index: number }) => (
   <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 group ${index === 0 ? "lg:col-span-2" : ""}`}
   >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl z-0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      
      <div className="relative z-10">
         <div className="flex items-center gap-5 mb-8">
            <div className="p-4 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
               {category.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{category.name}</h3>
         </div>
         <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, idx) => (
               <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={idx}
               />
            ))}
         </div>
      </div>
   </motion.div>
);

export default function SkillsSection() {
   return (
      <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
         {/* Background Elements */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

         <div className="main-container relative z-10">
            <SectionHeading
               badge="Tech Stack"
               icon={Layers}
               title="Skills &"
               highlight="Expertise"
               description="A comprehensive toolkit spanning frontend, backend, and DevOps — used to build scalable, user-centric web solutions."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {skillCategories.map((category, index) => (
                  <CategoryCard
                     key={category.name}
                     category={category}
                     index={index}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
