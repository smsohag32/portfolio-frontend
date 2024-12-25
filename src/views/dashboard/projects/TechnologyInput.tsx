import * as React from "react";
import { Check, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface TechnologyInputProps {
   technologies: string[];
   setTechnologies: (technologies: string[]) => void;
}

const defaultTechnologies = [
   "React",
   "Next.js",
   "TypeScript",
   "Node.js",
   "Express",
   "MongoDB",
   "PostgreSQL",
   "GraphQL",
   "Redux",
   "Tailwind CSS",
];

export function TechnologyInput({ technologies, setTechnologies }: TechnologyInputProps) {
   const [availableTechnologies, setAvailableTechnologies] =
      React.useState<string[]>(defaultTechnologies);
   const [newTechnology, setNewTechnology] = React.useState("");

   const handleSelect = (currentValue: string) => {
      if (!technologies.includes(currentValue)) {
         setTechnologies([...technologies, currentValue]);
      }
   };

   const handleRemove = (tech: string) => {
      setTechnologies(technologies.filter((t) => t !== tech));
   };

   const handleAddNew = () => {
      if (newTechnology && !technologies.includes(newTechnology)) {
         setTechnologies([...technologies, newTechnology]);
         setAvailableTechnologies((prev) => [...prev, newTechnology]);
         setNewTechnology("");
      }
   };

   return (
      <div className="space-y-2">
         <div className="pb-4 flex  flex-wrap gap-4">
            {availableTechnologies.length > 0 ? (
               availableTechnologies.map((tech) => (
                  <div
                     key={tech}
                     className="flex items-center gap-2 border cursor-pointer border-slate-300 p-2 rounded-sm"
                     onClick={() => handleSelect(tech)}>
                     <span className="bg-slate-300 h-6 w-6">
                        {" "}
                        <Check
                           className={cn(
                              "mr-2 bg-slate-300 rounded-sm h-6 w-6 p-1",
                              technologies.includes(tech) ? "opacity-100" : "opacity-0"
                           )}
                        />
                     </span>
                     {tech}
                  </div>
               ))
            ) : (
               <p>No technologies available.</p>
            )}
         </div>

         {/* Display Selected Technologies */}
         <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
               <Badge
                  key={tech}
                  variant="secondary"
                  className="text-sm">
                  {tech}
                  <button
                     className="ml-1 text-xs"
                     onClick={() => handleRemove(tech)}>
                     ×
                  </button>
               </Badge>
            ))}
         </div>

         {/* Input to Add Custom Technology */}
         <div className="flex gap-2 pt-4">
            <Input
               placeholder="Add new technology"
               value={newTechnology}
               onChange={(e) => setNewTechnology(e.target.value)}
            />
            <Button
               onClick={handleAddNew}
               type="button"
               size="sm">
               <Plus className="h-4 w-4" />
            </Button>
         </div>
      </div>
   );
}
