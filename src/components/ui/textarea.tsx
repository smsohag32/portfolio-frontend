import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
   ({ className, ...props }, ref) => {
      return (
         <textarea
            className={cn(
               "flex h-12 w-full rounded-lg border border-slate-400 border-opacity-50 outline-none bg-white px-4 py-2 text-base text-title transition-all",
               "placeholder:text-gray-500",
               "hover:border-gray-700",
               "focus:border-black focus:ring-opacity-30 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2",
               "disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500",
               "file:border-0 file:bg-transparent file:text-sm file:font-medium",
               "dark:border-white dark:bg-black dark:text-white",
               "dark:placeholder:text-gray-400",
               "dark:hover:border-gray-300",
               "dark:focus:border-white dark:focus:ring-white",
               "dark:disabled:border-gray-800 dark:disabled:bg-gray-900 dark:disabled:text-gray-400",
               className
            )}
            ref={ref}
            {...props}
         />
      );
   }
);
Textarea.displayName = "Textarea";

export { Textarea };
