"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import {
   useGetProjectsQuery,
   useCreateProjectMutation,
   useUpdateProjectMutation,
   useDeleteProjectMutation,
} from "@/redux-store/features/project-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Plus, X } from "lucide-react";
import { toast } from "sonner";
import PModal from "@/components/modal/PModal";
import Image from "next/image";
import { TechnologyInput } from "./TechnologyInput";
import ProjectCard from "./ProjectCard";

type ProjectFormData = {
   _id: string;
   name: string;
   category: string;
   type: string;
   description: string;
   image: string[],
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
            toast.success("Project created successfully.");
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

   if (isLoading)
      return (
         <div className="flex justify-center items-center h-screen">
            <Loader2 className="animate-spin" />
         </div>
      );
   if (isError) return <div>Error: {error.toString()}</div>;

   const handleClose = () => {
      setIsDialogOpen(false);
      setEditingProject(null);
      setSelectedImage([]);
      setTechnologies([]);
      reset();
   };
   return (
      <div className="container mx-auto p-4">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-[24px] font-medium text-title ">Project Management</h1>
            <Button onClick={() => setIsDialogOpen(true)}>
               <Plus className="mr-2 h-4 w-4" /> Add New Project
            </Button>
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
                           placeholder="Enter category."
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
                           placeholder="Server"
                        />
                        <Input
                           {...register("link.client")}
                           placeholder="Client"
                        />
                        <Input
                           {...register("link.live")}
                           placeholder="Live"
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
                     <Label htmlFor="image">Project Image</Label>
                     <div
                        onClick={handleImageSelect}
                        className="border hover:ring-2 border-slate-400 flex items-center justify-center ring-slate-400 border-dotted p-6 rounded-[8px] cursor-pointer">
                        <p className="text-des font-normal text-center text-sm">
                           Choose project photo
                        </p>
                     </div>

                     {/* Display image previews */}
                     <div className="pt-6 grid grid-cols-3 gap-2">
                        {selectedImage.map((image, index) => (
                           <div
                              key={index}
                              className="w-full h-[200px] relative bg-gray-100 rounded-md overflow-hidden">
                              <Image
                                 width={150}
                                 height={200}
                                 src={URL.createObjectURL(image)}
                                 alt={`Preview ${index}`}
                                 className="object-fit h-[200px] w-full "
                              />
                              <Button
                                 type="button"
                                 onClick={() =>
                                    setSelectedImage((preImage) =>
                                       preImage.filter((_, i) => i !== index)
                                    )
                                 }
                                 className="absolute top-0 right-0 z-40"
                                 size="icon">
                                 <X className="h-4 w-4" />
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
                  <div className="pt-8 flex items-center justify-end">
                     <Button
                        type="submit"
                        size="lg"
                        disabled={isCreating || isUpdating}>
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
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {projects?.projects?.map((project: ProjectFormData) => (
               <ProjectCard
                  key={project?._id}
                  project={project}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  isDeleting={isDeleting}
               />
            ))}
         </div>
      </div>
   );
};

export default ProjectManagement;
