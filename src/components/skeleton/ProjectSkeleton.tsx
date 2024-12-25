"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectCardSkeleton = () => {
   return (
      <Card className="w-full h-full group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
         <CardContent className="p-6">
            <div className="flex items-center mb-6 space-x-2">
               <Skeleton className="w-3 h-3 rounded-full" />
               <Skeleton className="w-3 h-3 rounded-full" />
               <Skeleton className="w-3 h-3 rounded-full" />
            </div>
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />
            <Skeleton className="h-60 w-full rounded-xl mb-12" />
            <div className="flex justify-between items-center">
               <Skeleton className="w-10 h-10 rounded-full" />
               <Skeleton className="w-32 h-10 rounded" />
            </div>
         </CardContent>
      </Card>
   );
};

export default ProjectCardSkeleton;
