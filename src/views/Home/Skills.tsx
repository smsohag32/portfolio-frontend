"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Server, PenTool, Code } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
   {
      name: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
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
      icon: <Server className="w-6 h-6" />,
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
      icon: <PenTool className="w-6 h-6" />,
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

const SkillProgress = ({
   skill,
   index,
}: {
   skill: { name: string; level: number };
   index: number;
}) => (
   <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4 border p-4 rounded-[8px]">
      <div className="flex justify-between mb-1">
         <span className="text-base text-title  font-medium">{skill.name}</span>
         <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
      </div>
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: `${skill.level}%` }}
         transition={{ duration: 0.8, delay: index * 0.1 }}>
         <Progress
            value={skill.level}
            className="h-2 "
         />
      </motion.div>
   </motion.div>
);

const CategoryCard = ({ category }: { category: (typeof skillCategories)[0] }) => (
   <Card
      data-aos="fade-up"
      data-aos-duration="2000"
      className="overflow-hidden bg-gradient-to-br from-background to-secondary/5 shadow-none  border-none transition-all duration-300">
      <CardContent className="">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
               {category.icon}
               <h3 className="text-2xl font-medium text-title">{category.name}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-8 ">
               {category.skills.map((skill, index) => (
                  <SkillProgress
                     key={skill.name}
                     skill={skill}
                     index={index}
                  />
               ))}
            </div>
         </motion.div>
      </CardContent>
      <Separator />
   </Card>
);

export default function SkillsSection() {
   return (
      <section className="py-16 bg-gradient-to-b from-background via-secondary/5 to-background">
         <div className="main-container">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="text-center mb-12">
               <Code className="w-16 h-16 mx-auto mb-2 text-des" />
               <h2 className="text-4xl font-semibold font-flecha tracking-tight text-title dark:text-white sm:text-5xl mb-4">
                  Skills & Expertise
               </h2>
               <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A comprehensive toolkit spanning frontend, backend, and DevOps,
                  dedicated to building scalable and user-centric web solutions.
               </p>
            </motion.div>

            <div className="space-y-8">
               {skillCategories.map((category) => (
                  <CategoryCard
                     key={category.name}
                     category={category}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
