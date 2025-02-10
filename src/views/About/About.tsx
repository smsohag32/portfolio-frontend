"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, Briefcase, GraduationCap, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import myPhoto from "@/assets/photo/sohag2.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
const fadeInUp = {
   initial: { opacity: 0, y: 20 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.5 },
};

const staggerChildren = {
   animate: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

export default function AboutPage() {
   const router = useRouter();
   return (
      <div className="bg-[#fafafa]">
         <motion.div
            className="main-container pt-20 pb-10"
            initial="initial"
            animate="animate"
            variants={staggerChildren}>
            <motion.div
               className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
               variants={fadeInUp}>
               <Card className="col-span-1 md:col-span-1">
                  <CardContent className="flex flex-col items-center pt-6">
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                        <div className="w-32 h-32 rounded-full overflow-hidden">
                           <Image
                              src={myPhoto}
                              className=" object-cover"
                              alt="Sohag Sheik"
                           />
                        </div>
                     </motion.div>
                     <motion.h1
                        className="text-2xl font-bold mt-4"
                        variants={fadeInUp}>
                        Sohag Sheik
                     </motion.h1>
                     <motion.p
                        className="text-muted-foreground"
                        variants={fadeInUp}>
                        Frontend Engineer
                     </motion.p>
                     <motion.div
                        className="flex flex-wrap justify-center gap-2 mt-4"
                        variants={staggerChildren}>
                        {[
                           "JavaScript",
                           "TypeScript",
                           "React",
                           "Next.js",
                           "Node.js",
                           "Express.js",
                        ].map((skill) => (
                           <motion.div
                              key={skill}
                              variants={fadeInUp}>
                              <Badge variant="secondary">{skill}</Badge>
                           </motion.div>
                        ))}
                     </motion.div>
                     <motion.div variants={fadeInUp}>
                        <Button
                           className="mt-6"
                           variant="outline">
                           <Download className="mr-2 h-4 w-4" /> Download Resume
                        </Button>
                     </motion.div>
                  </CardContent>
               </Card>

               <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <Code className="w-6 h-6" />
                        About Me
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {[
                        "Hello! I'm Sohag Sheik, a passionate Frontend Engineer specializing in creating amazing user interfaces. With 1.5+ years of experience, I've honed my skills in JavaScript, TypeScript, React.js, Next.js, Node.js, and Express.js.",
                        "My journey in web development has been driven by a relentless pursuit of crafting seamless user experiences with cutting-edge web technologies. I thrive on turning complex problems into simple, beautiful, and intuitive designs.",
                        "When I'm not coding, you can find me exploring new web technologies, contributing to open-source projects, or sharing my knowledge with the developer community.",
                     ].map((paragraph, index) => (
                        <motion.p
                           key={index}
                           variants={fadeInUp}>
                           {paragraph}
                        </motion.p>
                     ))}
                  </CardContent>
               </Card>
            </motion.div>

            <motion.div
               className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
               variants={fadeInUp}>
               <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-6 h-6" />
                        Work Experience
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                     {[
                        {
                           title: "Jr. Software Engineer",
                           company: "Project 2morrow Software Ltd.",
                           period: "Nov 2023 - Present",
                           responsibilities: [
                              "Developed modern web applications using React",
                              "Optimized for cross-browser compatibility and responsive design",
                              "Collaborated with cross-functional teams to deliver high-quality software solutions",
                           ],
                        },
                        {
                           title: "Network Engineer",
                           company: "Net Cafe Internet",
                           period: "Dec 2022 - Aug 2023",
                           responsibilities: [
                              "Monitored and maintained network infrastructure",
                              "Ensured uninterrupted internet connectivity",
                              "Troubleshooted hardware and software issues efficiently",
                           ],
                        },
                     ].map((job, index) => (
                        <motion.div
                           key={index}
                           variants={fadeInUp}>
                           <h3 className="font-semibold">{job.title}</h3>
                           <p className="text-sm text-muted-foreground">
                              {job.company} | {job.period}
                           </p>
                           <ul className="list-disc list-inside mt-2 space-y-1">
                              {job.responsibilities.map((resp, i) => (
                                 <li key={i}>{resp}</li>
                              ))}
                           </ul>
                        </motion.div>
                     ))}
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-6 h-6" />
                        Skills & Expertise
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {[
                        { skill: "JavaScript", level: 90 },
                        { skill: "React", level: 95 },
                        { skill: "CSS3, Tailwind CSS", level: 95 },
                        { skill: "Redux", level: 80 },
                        { skill: "Next.js", level: 80 },
                        { skill: "Node.js", level: 75 },
                        { skill: "Express.js", level: 70 },
                        { skill: "Typescript", level: 60 },
                     ].map((item, index) => (
                        <motion.div
                           key={index}
                           variants={fadeInUp}>
                           <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{item.skill}</span>
                              <span className="text-sm font-medium text-muted-foreground">
                                 {item.level}%
                              </span>
                           </div>
                           <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.level}%` }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}>
                              <Progress
                                 value={item.level}
                                 className="h-2"
                              />
                           </motion.div>
                        </motion.div>
                     ))}
                  </CardContent>
               </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
               <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-6 h-6" />
                        Projects & Achievements
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
                        variants={staggerChildren}>
                        <motion.div variants={fadeInUp}>
                           <h3 className="text-3xl font-bold">20+</h3>
                           <p className="text-muted-foreground">Projects Completed</p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                           <h3 className="text-3xl font-bold">1.5+</h3>
                           <p className="text-muted-foreground">Years of Experience</p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                           <Button
                              onClick={() => router.push("/portfolio")}
                              variant="outline">
                              View Projects
                           </Button>
                        </motion.div>
                     </motion.div>
                  </CardContent>
               </Card>
            </motion.div>
         </motion.div>
      </div>
   );
}
