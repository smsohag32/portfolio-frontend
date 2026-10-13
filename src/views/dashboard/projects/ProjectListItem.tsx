/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Reorder, useDragControls } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
   GripVertical,
   Pencil,
   Trash2,
   ExternalLink,
   Github,
   ChevronDown,
   ChevronUp,
   ImageIcon,
   X,
   Loader2,
} from "lucide-react";
import { useDeleteProjectImageMutation } from "@/redux-store/features/project-api";
import { toast } from "sonner";

interface ProjectListItemProps {
   project: any;
   index: number;
   handleEdit: (project: any) => void;
   handleDelete: (id: string) => void;
   isDeleting: boolean;
}

export const ProjectListItem: React.FC<ProjectListItemProps> = ({
   project,
   index,
   handleEdit,
   handleDelete,
   isDeleting,
}) => {
   const dragControls = useDragControls();
   const [isExpanded, setIsExpanded] = useState(false);
   const [deleteProjectImage] = useDeleteProjectImageMutation();
   const [removingImage, setRemovingImage] = useState<string | null>(null);

   const handleRemoveImage = async (projectId: string, imageUrl: string) => {
      if (!window.confirm("Remove this image permanently?")) return;
      setRemovingImage(imageUrl);
      try {
         await deleteProjectImage({ projectId, imageUrl }).unwrap();
         toast.success("Image removed.");
      } catch (err: any) {
         toast.error(err?.data?.message || "Failed to remove image.");
      } finally {
         setRemovingImage(null);
      }
   };

   const thumbnail = project.image && project.image.length > 0 ? project.image[0] : null;

   return (
      <Reorder.Item
         value={project}
         id={project._id}
         dragListener={false}
         dragControls={dragControls}
         className="group relative select-none rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
         <div className="flex flex-col md:flex-row md:items-center justify-between p-3.5 sm:p-4 gap-3 sm:gap-4">
            {/* Left Section: Drag handle + Serial + Image + Info */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
               {/* Drag Handle */}
               <div
                  onPointerDown={(e) => dragControls.start(e)}
                  className="touch-none cursor-grab active:cursor-grabbing p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-500 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
                  title="Drag to reorder position">
                  <GripVertical className="h-5 w-5" />
               </div>

               {/* Serial Badge */}
               <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center min-w-[32px] h-8 px-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold border border-blue-200/70 dark:border-blue-900/60 shadow-xs">
                     #{index + 1}
                  </span>
               </div>

               {/* Project Thumbnail */}
               <div className="relative h-12 w-16 sm:h-14 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
                  {thumbnail ? (
                     <Image
                        src={thumbnail}
                        alt={project.name || "Project"}
                        fill
                        className="object-cover"
                     />
                  ) : (
                     <div className="flex h-full w-full items-center justify-center text-slate-400">
                        <ImageIcon className="h-5 w-5" />
                     </div>
                  )}
               </div>

               {/* Project Info */}
               <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                     <h3 className="truncate text-base font-semibold text-slate-900 dark:text-white">
                        {project.name}
                     </h3>
                     {project.category && (
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                           {project.category}
                        </span>
                     )}
                     {project.type && (
                        <span className="hidden sm:inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                           {project.type}
                        </span>
                     )}
                  </div>

                  {/* Technologies */}
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                     {project.technologies?.slice(0, 4).map((tech: string, i: number) => (
                        <Badge
                           key={i}
                           variant="outline"
                           className="text-[10px] font-normal px-1.5 py-0 border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-400">
                           {tech}
                        </Badge>
                     ))}
                     {project.technologies?.length > 4 && (
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">
                           +{project.technologies.length - 4} more
                        </span>
                     )}
                  </div>
               </div>
            </div>

            {/* Right Section: Links + Actions */}
            <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-2 md:border-t-0 md:pt-0 dark:border-slate-800">
               {/* Links */}
               <div className="flex items-center gap-1 mr-1">
                  {project.link?.live && (
                     <a
                        href={project.link.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
                        title="Live Preview">
                        <ExternalLink className="h-4 w-4" />
                     </a>
                  )}
                  {project.link?.client && (
                     <a
                        href={project.link.client}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                        title="Client Repository">
                        <Github className="h-4 w-4" />
                     </a>
                  )}
               </div>

               {/* Expand / Details Toggle */}
               <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? (
                     <>
                        <ChevronUp className="mr-1 h-3.5 w-3.5" /> Less
                     </>
                  ) : (
                     <>
                        <ChevronDown className="mr-1 h-3.5 w-3.5" /> More
                     </>
                  )}
               </Button>

               {/* Edit Button */}
               <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-2.5 text-xs"
                  onClick={() => handleEdit(project)}>
                  <Pencil className="mr-1 h-3.5 w-3.5" /> Edit
               </Button>

               {/* Delete Button */}
               <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2.5 text-xs text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-950/40"
                  onClick={() => handleDelete(project._id)}
                  disabled={isDeleting}>
                  {isDeleting ? (
                     <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                     <Trash2 className="h-3.5 w-3.5" />
                  )}
               </Button>
            </div>
         </div>

         {/* Expanded Drawer: Description, Images, Features */}
         {isExpanded && (
            <div className="border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800/80 dark:bg-slate-950/30">
               {project.description && (
                  <p className="mb-4 text-xs text-slate-600 leading-relaxed dark:text-slate-300">
                     {project.description}
                  </p>
               )}

               {/* Image gallery with delete action */}
               <div className="mb-4">
                  <h4 className="mb-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                     Project Images ({project.image?.length || 0})
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                     {project.image?.map((img: string, imgIdx: number) => (
                        <div
                           key={imgIdx}
                           className="group/img relative h-20 w-full overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                           <Image
                              src={img}
                              alt={`Project preview ${imgIdx + 1}`}
                              fill
                              className="object-cover"
                           />
                           <Button
                              variant="destructive"
                              size="icon"
                              disabled={removingImage === img}
                              className="absolute top-1 right-1 h-6 w-6 rounded-md opacity-90 hover:opacity-100"
                              onClick={() => handleRemoveImage(project._id, img)}
                              title="Delete this image">
                              {removingImage === img ? (
                                 <Loader2 className="h-3 w-3 animate-spin" />
                              ) : (
                                 <X className="h-3 w-3" />
                              )}
                           </Button>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Features */}
               {project.features && project.features.length > 0 && (
                  <div>
                     <h4 className="mb-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Key Features
                     </h4>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {project.features.map((feat: any, idx: number) => (
                           <li
                              key={idx}
                              className="flex items-start gap-1.5">
                              <span className="font-semibold text-slate-800 dark:text-slate-200">
                                 • {feat.title}:
                              </span>
                              <span className="truncate">{feat.details}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               )}
            </div>
         )}
      </Reorder.Item>
   );
};

export default ProjectListItem;
