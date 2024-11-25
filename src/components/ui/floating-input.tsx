import React, { forwardRef, InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
   className?: string;
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
   ({ className, ...rest }, ref) => {
      return (
         <input
            placeholder=""
            className={cn("peer", className)}
            ref={ref}
            {...rest}
         />
      );
   }
);
FloatingInput.displayName = "FloatingInput";

interface FloatingLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
   className?: string;
}

const FloatingLabel = forwardRef<HTMLLabelElement, FloatingLabelProps>(
   ({ className, ...rest }, ref) => {
      return (
         <Label
            className={cn(
               "peer-focus:secondary peer-focus:dark:secondary absolute px-1 start-0 top-0 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background  text-[20px] text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75  dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
               className
            )}
            ref={ref}
            {...rest}
         />
      );
   }
);
FloatingLabel.displayName = "FloatingLabel";

interface FloatingLabelInputProps extends FloatingInputProps {
   id: string;
   label: string;
   labelClassName?: string;
}

const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
   ({ id, label, labelClassName, ...rest }, ref) => {
      return (
         <div className="relative">
            <FloatingInput
               ref={ref}
               id={id}
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
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingInput, FloatingLabel, FloatingLabelInput };
