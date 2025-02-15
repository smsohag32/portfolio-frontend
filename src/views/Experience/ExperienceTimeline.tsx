"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
export default function ExperienceTimeline() {
   return (
      <div className="w-full ">
         <VerticalTimeline
            lineColor="#e0e0e0"
            className="!w-full !m-0   ">
            {experiences.map((experience, index) => (
               <VerticalTimelineElement
                  key={experience.id}
                  className="vertical-timeline-element--work !p-0 !w-full"
                  contentStyle={{
                     background: "#ffffff",
                     color: "#333",
                     boxShadow: "0 3px 0 #f3f4f6",
                     border: "1px solid #e5e7eb",
                     borderRadius: "0.5rem",
                     padding: "1.5rem",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
                  date={experience.duration}
                  dateClassName="text-gray-600 font-medium"
                  iconStyle={{ background: "#1f2937", color: "#fff" }}
                  icon={<Building2 />}>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}>
                     <div className="flex items-center mb-4">
                        <div className="relative w-16 h-16 mr-4 border-2 border-gray-200 rounded-full overflow-hidden">
                           <Image
                              src={experience.img || "/placeholder.svg"}
                              alt={experience.company}
                              layout="fill"
                              objectFit="cover"
                           />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                           <h4 className="text-lg font-semibold text-gray-700">
                              {experience.company}
                           </h4>
                           <div className="flex items-center text-sm text-gray-600 mt-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{experience.duration}</span>
                           </div>
                        </div>
                     </div>
                     <p className="text-gray-700 mb-4">{experience.description}</p>
                     <div className="flex flex-wrap gap-2 pt-4">
                        {experience.skills.map((skill, skillIndex) => (
                           <Badge
                              key={skillIndex}
                              variant="outline"
                              className="bg-gray-100 text-gray-800 border-gray-300">
                              {skill}
                           </Badge>
                        ))}
                     </div>
                     {experience.current && (
                        <Badge
                           variant="default"
                           className="mt-4 bg-gray-800">
                           Current Position
                        </Badge>
                     )}
                  </motion.div>
               </VerticalTimelineElement>
            ))}
         </VerticalTimeline>
      </div>
   );
}
