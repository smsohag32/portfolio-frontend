"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Server, PenTool, Code } from "lucide-react";

const skillCategories = [
   {
      name: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: [
         "HTML5",
         "CSS3",
         "Tailwind CSS",
         "JavaScript",
         "TypeScript",
         "React.js",
         "Next.js",
         "Redux",
         "RTK Query",
         "Context API",
         "Shadcn UI",
         "Material UI",
         "Ant Design",
         "Bootstrap",
         "Recharts",
         "AOS",
         "Swiper.js",
         "React Hook Forms",
      ],
   },
   {
      name: "Backend & APIs",
      icon: <Server className="w-6 h-6" />,
      skills: [
         "Node.js",
         "Express.js",
         "NoSQL",
         "MySQL",
         "MongoDB",
         "REST APIs",
         "JWT",
         "WebSocket",
         "Socket.io",
         "Kafka",
      ],
   },
   {
      name: "Tools & Hosting",
      icon: <PenTool className="w-6 h-6" />,
      skills: [
         "VS Code",
         "Git",
         "Figma",
         "Jira",
         "Docker",
         "AWS",
         "Share Hosting",
         "Chrome DevTools",
         "Redux DevTools",
      ],
   },
];

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
      className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:from-primary/20 hover:to-secondary/20">
      {skill}
   </motion.div>
);

const CategoryCard = ({ category }: { category: (typeof skillCategories)[0] }) => (
   <Card className="overflow-hidden bg-gradient-to-br from-background to-secondary/5 border-primary/10 transition-all duration-300">
      <CardContent className="p-6">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
               {category.icon}
               <h3 className="text-2xl font-medium text-title ">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
               {category.skills.map((skill, index) => (
                  <SkillBadge
                     key={skill}
                     skill={skill}
                     index={index}
                  />
               ))}
            </div>
         </motion.div>
      </CardContent>
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
               <Code className="w-16 h-16 mx-auto mb-2 text-des " />
               <h2 className="text-4xl font-semibold font-flecha tracking-tight text-title  dark:text-white sm:text-5xl mb-2">
                  Skills & Expertise
               </h2>
               <p className="text-xl text-muted-foreground">
                  Mastering a diverse array of cutting-edge technologies
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
