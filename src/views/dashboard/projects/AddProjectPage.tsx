"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useCreateProjectMutation } from "@/redux-store/features/project-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
   ArrowLeft,
   Loader2,
   Plus,
   X,
   UploadCloud,
   Sparkles,
   Globe,
   Github,
   FolderPlus,
   Layers,
   CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { TechnologyInput } from "./TechnologyInput";

type ProjectFormData = {
   name: string;
   category: string;
   type: string;
   description: string;
   features: { title: string; details: string }[];
   link: {
      server: string;
      client: string;
      live: string;
   };
};

const categoryPresets = [
   "Full Stack",
   "Frontend",
   "Backend",
   "Chrome Extension",
   "Mobile App",
   "Open Source",
];

export const AddProjectPage = () => {
   const router = useRouter();
   const [createProject, { isLoading: isCreating }] = useCreateProjectMutation();
   const [selectedImages, setSelectedImages] = useState<File[]>([]);
   const [technologies, setTechnologies] = useState<string[]>([]);
   const fileInputRef = useRef<HTMLInputElement | null>(null);

   const { register, handleSubmit, control, setValue, watch } = useForm<ProjectFormData>({
      defaultValues: {
         name: "",
         category: "",
         type: "Web Application",
         description: "",
         features: [
            { title: "Core Architecture", details: "" },
            { title: "Authentication", details: "" },
         ],
         link: { server: "", client: "", live: "" },
      },
   });

   const {
      fields: featureFields,
      append: appendFeature,
      remove: removeFeature,
   } = useFieldArray({
      control,
      name: "features",
   });

   const currentCategory = watch("category");

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         const files = Array.from(e.target.files);
         setSelectedImages((prev) => [...prev, ...files]);
      }
   };

   const removeSelectedImage = (index: number) => {
      setSelectedImages((prev) => prev.filter((_, i) => i !== index));
   };

   const onSubmit: SubmitHandler<ProjectFormData> = async (data) => {
      if (technologies.length === 0) {
         toast.error("Please add at least one technology stack.");
         return;
      }
      if (selectedImages.length === 0) {
         toast.error("Please upload at least one project image/thumbnail.");
         return;
      }

      try {
         const formData = new FormData();
         const projectData = {
            ...data,
            technologies,
         };

         formData.append("content", JSON.stringify(projectData));
         selectedImages.forEach((image) => {
            formData.append("images", image);
         });

         await createProject(formData).unwrap();
         toast.success("Project created successfully and placed in 1st position!");
         router.push("/dashboard/sohag/projects");
      } catch (err: unknown) {
         const error = err as { data?: { message?: string } };
         toast.error(error?.data?.message || "Failed to create project. Please try again.");
      }
   };

   return (
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
         {/* Navigation & Header */}
         <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
               <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <Link
                     href="/dashboard/sohag"
                     className="hover:text-blue-600 transition-colors">
                     Dashboard
                  </Link>
                  <span>/</span>
                  <Link
                     href="/dashboard/sohag/projects"
                     className="hover:text-blue-600 transition-colors">
                     Projects
                  </Link>
                  <span>/</span>
                  <span className="text-slate-900 dark:text-slate-200 font-medium">Add New</span>
               </div>
               <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
                  <FolderPlus className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  Add New Project
               </h1>
               <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  New projects will automatically be placed in the 1st position serial order.
               </p>
            </div>

            <Link href="/dashboard/sohag/projects">
               <Button
                  variant="outline"
                  size="sm"
                  className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Project List
               </Button>
            </Link>
         </div>

         {/* Form */}
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8">
            {/* Card 1: Basic Information */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
               <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-500" /> Basic Details
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 md:col-span-2">
                     <Label htmlFor="name">
                        Project Name <span className="text-red-500">*</span>
                     </Label>
                     <Input
                        id="name"
                        placeholder="e.g., Equinox Workspace, Modern CRM"
                        {...register("name", { required: true })}
                        className="text-base"
                     />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="category">
                        Category <span className="text-red-500">*</span>
                     </Label>
                     <Input
                        id="category"
                        placeholder="e.g. Full Stack, Web App"
                        {...register("category", { required: true })}
                     />
                     {/* Category Quick Presets */}
                     <div className="flex flex-wrap gap-1.5 pt-1.5">
                        {categoryPresets.map((preset) => (
                           <button
                              key={preset}
                              type="button"
                              onClick={() => setValue("category", preset)}
                              className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                                 currentCategory === preset
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                              }`}>
                              {preset}
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="type">
                        Project Type <span className="text-red-500">*</span>
                     </Label>
                     <Input
                        id="type"
                        placeholder="e.g., Web Application, Browser Tool"
                        {...register("type", { required: true })}
                     />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                     <Label htmlFor="description">
                        Description <span className="text-red-500">*</span>
                     </Label>
                     <Textarea
                        id="description"
                        rows={4}
                        placeholder="Write a clear, compelling summary of this project and what problem it solves..."
                        {...register("description", { required: true })}
                     />
                  </div>
               </div>
            </div>

            {/* Card 2: Features */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
               <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                     <Layers className="h-4 w-4 text-blue-500" /> Key Features & Highlights
                  </h2>
                  <Button
                     type="button"
                     variant="outline"
                     size="sm"
                     onClick={() => appendFeature({ title: "", details: "" })}
                     className="gap-1.5 text-xs">
                     <Plus className="h-3.5 w-3.5" /> Add Feature
                  </Button>
               </div>

               <div className="space-y-3">
                  {featureFields.map((field, index) => (
                     <div
                        key={field.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 rounded-xl bg-slate-50/70 border border-slate-200/70 dark:bg-slate-950/40 dark:border-slate-800">
                        <Input
                           {...register(`features.${index}.title` as const, { required: true })}
                           placeholder="Feature Title (e.g., Real-time Chat)"
                           className="sm:w-1/3 bg-white dark:bg-slate-900"
                        />
                        <Input
                           {...register(`features.${index}.details` as const, { required: true })}
                           placeholder="Feature Details (e.g., Built with Socket.io & Redis pub/sub)"
                           className="flex-1 bg-white dark:bg-slate-900"
                        />
                        <Button
                           type="button"
                           variant="ghost"
                           size="icon"
                           className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
                           onClick={() => removeFeature(index)}
                           disabled={featureFields.length <= 1}>
                           <X className="h-4 w-4" />
                        </Button>
                     </div>
                  ))}
               </div>
            </div>

            {/* Card 3: Links */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
               <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-500" /> Project Links & Repositories
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                     <Label
                        htmlFor="link.live"
                        className="flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5 text-slate-400" /> Live Demo URL
                     </Label>
                     <Input
                        id="link.live"
                        placeholder="https://example.com"
                        {...register("link.live")}
                     />
                  </div>
                  <div className="space-y-2">
                     <Label
                        htmlFor="link.client"
                        className="flex items-center gap-1.5">
                        <Github className="h-3.5 w-3.5 text-slate-400" /> Client Repository
                     </Label>
                     <Input
                        id="link.client"
                        placeholder="https://github.com/..."
                        {...register("link.client")}
                     />
                  </div>
                  <div className="space-y-2">
                     <Label
                        htmlFor="link.server"
                        className="flex items-center gap-1.5">
                        <Github className="h-3.5 w-3.5 text-slate-400" /> Server Repository
                     </Label>
                     <Input
                        id="link.server"
                        placeholder="https://github.com/..."
                        {...register("link.server")}
                     />
                  </div>
               </div>
            </div>

            {/* Card 4: Technologies */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
               <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" /> Technologies & Tech Stack
               </h2>
               <p className="text-xs text-slate-500 mb-4">
                  Click technologies to select or type a custom tag below.
               </p>

               <TechnologyInput
                  technologies={technologies}
                  setTechnologies={setTechnologies}
               />
            </div>

            {/* Card 5: Images & Thumbnails */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
               <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <UploadCloud className="h-4 w-4 text-blue-500" /> Project Images & Screenshots
               </h2>
               <p className="text-xs text-slate-500 mb-4">
                  The first image will be used as the primary thumbnail across the portfolio.
               </p>

               {/* Dropzone */}
               <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl p-8 text-center cursor-pointer transition-all hover:bg-blue-50/30 dark:hover:bg-blue-950/20">
                  <UploadCloud className="mx-auto h-10 w-10 text-slate-400 mb-2" />
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                     Click to upload screenshots or project images
                  </p>
                  <p className="text-xs text-slate-500 mt-1">PNG, JPG, WEBP up to 5 images</p>
               </div>

               <input
                  type="file"
                  multiple
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageChange}
               />

               {/* Selected Previews */}
               {selectedImages.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                     {selectedImages.map((file, idx) => (
                        <div
                           key={idx}
                           className="relative h-28 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 group">
                           <Image
                              src={URL.createObjectURL(file)}
                              alt={`Selected ${idx}`}
                              fill
                              className="object-cover"
                           />
                           <div className="absolute top-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">
                              {idx === 0 ? "Cover" : `#${idx + 1}`}
                           </div>
                           <button
                              type="button"
                              onClick={() => removeSelectedImage(idx)}
                              className="absolute top-1 right-1 h-6 w-6 rounded-md bg-red-600/90 text-white flex items-center justify-center hover:bg-red-700">
                              <X className="h-3.5 w-3.5" />
                           </button>
                        </div>
                     ))}
                  </div>
               )}
            </div>

            {/* Submission Bar */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
               <Link href="/dashboard/sohag/projects">
                  <Button
                     type="button"
                     variant="outline"
                     size="lg">
                     Cancel
                  </Button>
               </Link>
               <Button
                  type="submit"
                  size="lg"
                  disabled={isCreating}
                  className="bg-blue-600 hover:bg-blue-700 text-white min-w-[160px]">
                  {isCreating ? (
                     <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving Project...
                     </>
                  ) : (
                     <>
                        <Plus className="mr-2 h-4 w-4" /> Create Project
                     </>
                  )}
               </Button>
            </div>
         </form>
      </div>
   );
};

export default AddProjectPage;
