"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import {
   useGetProjectsQuery,
   useCreateProjectMutation,
   useUpdateProjectMutation,
   useDeleteProjectMutation,
   useReorderProjectsMutation,
} from "@/redux-store/features/project-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import {
   Loader2,
   Plus,
   X,
   LayoutList,
   LayoutGrid,
   ArrowUpDown,
} from "lucide-react";
import { toast } from "sonner";
import PModal from "@/components/modal/PModal";
import Image from "next/image";
import { Reorder } from "framer-motion";
import { TechnologyInput } from "./TechnologyInput";
import ProjectCard from "./ProjectCard";
import ProjectListItem from "./ProjectListItem";

type ProjectFormData = {
   _id: string;
   name: string;
   category: string;
   type: string;
   description: string;
   image: string[];
   serial?: number;
   features: { title: string; details: string }[];
   link: {
      server: string;
      client: string;
      live: string;
   };
   technologies: string[];
};

const ProjectManagement = () => {
   const { data: projects, isLoading, isError, error } = useGetProjectsQuery({});
   const [createProject, { isLoading: isCreating }] = useCreateProjectMutation();
   const [updateProject, { isLoading: isUpdating }] = useUpdateProjectMutation();
   const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();
   const [reorderProjects, { isLoading: isReorderingApi }] = useReorderProjectsMutation();

   const [projectList, setProjectList] = useState<ProjectFormData[]>([]);
   const [viewMode, setViewMode] = useState<"list" | "card">("list");
   const [isSavingOrder, setIsSavingOrder] = useState(false);
   const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

   const [selectedImage, setSelectedImage] = useState<File[]>([]);
   const fileInputRef = useRef<HTMLInputElement | null>(null);

   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [editingProject, setEditingProject] = useState<ProjectFormData | null>(null);

   const { register, handleSubmit, reset, setValue, control } = useForm<ProjectFormData>();
   const {
      fields: featureFields,
      append: appendFeature,
      remove: removeFeature,
   } = useFieldArray({
      control,
      name: "features",
   });

   const [technologies, setTechnologies] = useState<string[]>([]);

   // Sync projectList when query data updates
   useEffect(() => {
      if (projects?.projects) {
         setProjectList(projects.projects);
      }
   }, [projects]);

   // Handle drag-and-drop reordering with auto-save
   const handleReorder = (newOrder: ProjectFormData[]) => {
      setProjectList(newOrder);

      if (saveTimeoutRef.current) {
         clearTimeout(saveTimeoutRef.current);
      }

      saveTimeoutRef.current = setTimeout(async () => {
         try {
            setIsSavingOrder(true);
            const projectIds = newOrder.map((p) => p._id);
            await reorderProjects({ projectIds }).unwrap();
            toast.success("Project serial updated successfully!");
         } catch {
            toast.error("Failed to update project serial order");
         } finally {
            setIsSavingOrder(false);
         }
      }, 500);
   };

   const handleImageSelect = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click();
      }
   };

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         const selectedFiles = Array.from(e.target.files);
         setSelectedImage((prevImages) => [...prevImages, ...selectedFiles]);
      }
   };

   useEffect(() => {
      if (editingProject) {
         Object.entries(editingProject).forEach(([key, value]) => {
            setValue(key as keyof ProjectFormData, value);
         });
         setTechnologies(editingProject.technologies || []);
      } else {
         reset({
            name: "",
            category: "",
            type: "",
            description: "",
            features: [{ title: "", details: "" }],
            link: { server: "", client: "", live: "" },
            technologies: [],
         });
         setTechnologies([]);
      }
   }, [editingProject, setValue, reset]);

   const onSubmit: SubmitHandler<ProjectFormData> = async (data) => {
      try {
         const formData = new FormData();
         const projectData = {
            ...data,
            technologies,
         };
         formData.append("content", JSON.stringify(projectData));
         if (selectedImage.length > 0) {
            selectedImage.forEach((image) => formData.append("images", image));
         }

         if (editingProject) {
            await updateProject({ id: editingProject._id, formData }).unwrap();
            toast.success("Project updated successfully.");
         } else {
            await createProject(formData).unwrap();
            toast.success("Project created successfully (placed at 1st position).");
         }
         handleClose();
      } catch {
         toast.error("An error occurred while saving the project");
      }
   };

   const handleEdit = (project: ProjectFormData) => {
      setEditingProject(project);
      setIsDialogOpen(true);
   };

   const handleDelete = async (id: string) => {
      if (window.confirm("Are you sure you want to delete this project?")) {
         try {
            await deleteProject(id).unwrap();
            toast.success("Project deleted successfully");
         } catch {
            toast.error("An error occurred while deleting the project");
         }
      }
   };

   const handleClose = () => {
      setIsDialogOpen(false);
      setEditingProject(null);
      setSelectedImage([]);
      setTechnologies([]);
      reset();
   };

   if (isLoading)
      return (
         <div className="flex justify-center items-center h-screen">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
         </div>
      );

   if (isError) return <div className="p-6 text-red-500">Error: {error.toString()}</div>;

   return (
      <div className="container mx-auto p-4 sm:p-6 max-w-7xl">
         {/* Top Header Section */}
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
            <div>
               <div className="flex items-center gap-2.5">
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                     Project Management
                  </h1>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                     {projectList.length} Total
                  </span>
               </div>
               <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Manage projects, update serials by dragging rows, and edit information.
               </p>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-3">
               {/* View Mode Toggle */}
               <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100/80 p-0.5 dark:border-slate-800 dark:bg-slate-900">
                  <button
                     type="button"
                     onClick={() => setViewMode("list")}
                     className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                        viewMode === "list"
                           ? "bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white"
                           : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                     }`}>
                     <LayoutList className="h-3.5 w-3.5" />
                     List View (Serial)
                  </button>
                  <button
                     type="button"
                     onClick={() => setViewMode("card")}
                     className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                        viewMode === "card"
                           ? "bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white"
                           : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                     }`}>
                     <LayoutGrid className="h-3.5 w-3.5" />
                     Cards
                  </button>
               </div>

               {/* Reorder status pill */}
               {viewMode === "list" && (
                  <div className="hidden sm:flex items-center text-xs">
                     {isSavingOrder || isReorderingApi ? (
                        <span className="flex items-center font-medium text-blue-600 dark:text-blue-400">
                           <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                           Saving order...
                        </span>
                     ) : (
                        <span className="flex items-center text-slate-500 dark:text-slate-400">
                           <ArrowUpDown className="mr-1.5 h-3.5 w-3.5 text-slate-400" />
                           Drag & drop to reorder serial
                        </span>
                     )}
                  </div>
               )}

               {/* Add Project Actions */}
               <div className="flex items-center gap-2">
                  <Button
                     variant="outline"
                     size="sm"
                     onClick={() => setIsDialogOpen(true)}
                     className="hidden sm:inline-flex text-xs">
                     <Plus className="mr-1 h-3.5 w-3.5" /> Quick Add
                  </Button>
                  <Link href="/dashboard/sohag/projects/add">
                     <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-xs text-xs sm:text-sm">
                        <Plus className="mr-1.5 h-4 w-4" /> Add New Project
                     </Button>
                  </Link>
               </div>
            </div>
         </div>

         {/* Project Dialog Modal */}
         <PModal
            isOpen={isDialogOpen}
            size="900px"
            title={editingProject ? "Edit Project" : "Add New Project"}
            handleClose={handleClose}>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <Label htmlFor="name">Name</Label>
                     <Input
                        id="name"
                        placeholder="Enter project name"
                        {...register("name", { required: true })}
                     />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="category">Category</Label>
                     <Input
                        id="category"
                        placeholder="Enter category (e.g., Full Stack, Chrome Extension)"
                        {...register("category", { required: true })}
                     />
                  </div>
               </div>
               <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Input
                     id="type"
                     placeholder="Enter project type."
                     {...register("type", { required: true })}
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                     id="description"
                     placeholder="Enter project description."
                     {...register("description", { required: true })}
                  />
               </div>
               <div className="space-y-2">
                  <Label>Features</Label>
                  {featureFields.map((field, index) => (
                     <div
                        key={field.id}
                        className="flex space-x-2">
                        <Input
                           {...register(`features.${index}.title` as const)}
                           placeholder="Title"
                        />
                        <Input
                           {...register(`features.${index}.details` as const)}
                           placeholder="Details"
                        />
                        <Button
                           type="button"
                           variant="outline"
                           size="icon"
                           className="w-6 h-6 p-1"
                           onClick={() => removeFeature(index)}>
                           <X className="h-4 w-4" />
                        </Button>
                     </div>
                  ))}
                  <Button
                     type="button"
                     variant="outline"
                     size="sm"
                     onClick={() => appendFeature({ title: "", details: "" })}>
                     Add Feature
                  </Button>
               </div>
               <div className="space-y-2">
                  <Label>Links</Label>
                  <div className="grid grid-cols-1 gap-2">
                     <Input
                        {...register("link.server")}
                        placeholder="Server Repository Link"
                     />
                     <Input
                        {...register("link.client")}
                        placeholder="Client Repository Link"
                     />
                     <Input
                        {...register("link.live")}
                        placeholder="Live Application Link"
                     />
                  </div>
               </div>
               <div className="space-y-2">
                  <Label>Technologies</Label>
                  <TechnologyInput
                     technologies={technologies}
                     setTechnologies={setTechnologies}
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="image">Project Images</Label>
                  <div
                     onClick={handleImageSelect}
                     className="border hover:ring-2 border-slate-300 dark:border-slate-700 flex items-center justify-center ring-blue-400 border-dashed p-6 rounded-lg cursor-pointer transition-all hover:bg-slate-50 dark:hover:bg-slate-900">
                     <p className="text-slate-600 dark:text-slate-400 font-normal text-center text-sm">
                        Click to select new project photos
                     </p>
                  </div>

                  {/* Display image previews */}
                  <div className="pt-4 grid grid-cols-3 gap-2">
                     {selectedImage.map((image, index) => (
                        <div
                           key={index}
                           className="w-full h-[140px] relative bg-gray-100 rounded-md overflow-hidden border">
                           <Image
                              width={150}
                              height={140}
                              src={URL.createObjectURL(image)}
                              alt={`Preview ${index}`}
                              className="object-cover h-full w-full"
                           />
                           <Button
                              type="button"
                              onClick={() =>
                                 setSelectedImage((preImage) =>
                                    preImage.filter((_, i) => i !== index)
                                 )
                              }
                              className="absolute top-1 right-1 z-40 h-6 w-6"
                              variant="destructive"
                              size="icon">
                              <X className="h-3.5 w-3.5" />
                           </Button>
                        </div>
                     ))}
                  </div>

                  {/* Hidden file input */}
                  <Input
                     id="image"
                     type="file"
                     accept="image/*"
                     multiple
                     ref={fileInputRef}
                     className="hidden"
                     onChange={handleImageChange}
                  />
               </div>
               <div className="pt-6 flex items-center justify-end">
                  <Button
                     type="submit"
                     size="lg"
                     disabled={isCreating || isUpdating}
                     className="bg-blue-600 hover:bg-blue-700 text-white">
                     {isCreating || isUpdating ? (
                        <>
                           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                           Please wait
                        </>
                     ) : (
                        "Save Project"
                     )}
                  </Button>
               </div>
            </form>
         </PModal>

         {/* Content Area: List View (Reorder) or Card View */}
         {viewMode === "list" ? (
            <div className="space-y-3">
               <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2 pb-1">
                  <span>Serial & Details</span>
                  <span>Actions</span>
               </div>
               <Reorder.Group
                  axis="y"
                  values={projectList}
                  onReorder={handleReorder}
                  className="space-y-2.5">
                  {projectList.map((project, index) => (
                     <ProjectListItem
                        key={project._id}
                        project={project}
                        index={index}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        isDeleting={isDeleting}
                     />
                  ))}
               </Reorder.Group>
            </div>
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
               {projectList.map((project: ProjectFormData) => (
                  <ProjectCard
                     key={project._id}
                     project={project}
                     handleEdit={handleEdit}
                     handleDelete={handleDelete}
                     isDeleting={isDeleting}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default ProjectManagement;
