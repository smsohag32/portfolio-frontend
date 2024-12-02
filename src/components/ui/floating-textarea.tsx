import React, { forwardRef, TextareaHTMLAttributes, LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

// Props for the FloatingInput component
interface FloatingInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   className?: string;
}

// FloatingInput (textarea) component
const FloatingInput = forwardRef<HTMLTextAreaElement, FloatingInputProps>(
   ({ className, ...rest }, ref) => {
      return (
         <textarea
            placeholder=" "
            rows={4}
            className={cn("peer", className)}
            ref={ref}
            {...rest}
         />
      );
   }
);
FloatingInput.displayName = "FloatingInput";

// Props for the FloatingLabel component
interface FloatingLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
   className?: string;
}

// FloatingLabel component
const FloatingLabel = forwardRef<HTMLLabelElement, FloatingLabelProps>(
   ({ className, ...rest }, ref) => {
      return (
         <Label
            className={cn(
               "peer-focus:secondary peer-focus:dark:secondary absolute px-1 start-0 top-0 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background text-[20px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
               className
            )}
            ref={ref}
            {...rest}
         />
      );
   }
);
FloatingLabel.displayName = "FloatingLabel";

// Props for the FloatingTextarea component
interface FloatingTextareaProps extends FloatingInputProps {
   id: string;
   label: string;
   labelClassName?: string;
}

// FloatingTextarea component
const FloatingTextarea = forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
   ({ id, label, labelClassName, className, ...rest }, ref) => {
      return (
         <div className="relative">
            <FloatingInput
               ref={ref}
               id={id}
               className={className}
               {...rest}
            />
            <FloatingLabel
               className={labelClassName}
               htmlFor={id}>
               {label}
            </FloatingLabel>
         </div>
      );
   }
);
FloatingTextarea.displayName = "FloatingTextarea";

export { FloatingInput, FloatingLabel, FloatingTextarea };
