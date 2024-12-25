import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Loader2, Pencil, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useDeleteProjectImageMutation } from "@/redux-store/features/project-api";
import { toast } from "sonner";

interface ProjectCardProps {
   project: {
      _id: string;
      name: string;
      image: string[];
      category: string;
      type: string;
      description: string;
      features: { title: string; details: string }[];
      link: {
         server: string;
         client: string;
         live: string;
      };
      technologies: string[];
   };
   handleEdit: (project: any) => void;
   handleDelete: (id: string) => void;
   isDeleting: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
   project,
   handleEdit,
   handleDelete,
   isDeleting,
}) => {
   const [deleteProjectImage, { isLoading }] = useDeleteProjectImageMutation();
   const handleRemoveImage = async (projectId: string, imageUrl: string) => {
      // Logic to remove image
      try {
         await deleteProjectImage({ projectId, imageUrl });
      } catch {
         toast.error("Failed to remove image.");
      }
   };

   return (
      <Card className="flex flex-col">
         <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.type}</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
               {project.image && project.image.length > 0 ? (
                  project.image.map((img, index) => (
                     <div
                        key={index}
                        className="relative h-36 w-full rounded-md overflow-hidden">
                        <Image
                           src={img}
                           alt={`Project image ${index + 1}`}
                           layout="fill"
                           objectFit="cover"
                        />
                        <Button
                           variant="destructive"
                           size="icon"
                           disabled={isLoading}
                           className="absolute top-2 right-2 z-10"
                           onClick={() => handleRemoveImage(project._id, img)}>
                           <X className="h-4 w-4" />
                        </Button>
                     </div>
                  ))
               ) : (
                  <div className="flex items-center justify-center h-48 bg-gray-200 col-span-3">
                     <p className="text-gray-500">No image available</p>
                  </div>
               )}
            </div>
            <p className="text-sm text-gray-600">{project.description}</p>
            <div>
               <h4 className="font-semibold mb-2">Category:</h4>
               <p className="text-sm">{project.category}</p>
            </div>
            <div>
               <h4 className="font-semibold mb-2">Features:</h4>
               <ul className="list-disc list-inside space-y-1">
                  {project.features.map((feature, index) => (
                     <li
                        key={index}
                        className="text-sm">
                        <span className="font-medium">{feature.title}:</span> {feature.details}
                     </li>
                  ))}
               </ul>
            </div>
            <div>
               <h4 className="font-semibold mb-2">Technologies:</h4>
               <div className="flex flex-wrap gap-2">
                  {project.technologies &&
                     project.technologies.map((tech: string, index: number) => (
                        <Badge
                           key={index}
                           variant="secondary">
                           {tech}
                        </Badge>
                     ))}
               </div>
            </div>
         </CardContent>
         <CardFooter className="mt-auto">
            <Button
               variant="outline"
               className="mr-2"
               onClick={() => handleEdit(project)}>
               <Pencil className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button
               variant="destructive"
               onClick={() => handleDelete(project._id)}
               disabled={isDeleting}>
               {isDeleting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
               ) : (
                  <Trash2 className="h-4 w-4" />
               )}
            </Button>
         </CardFooter>
      </Card>
   );
};

export default ProjectCard;
