/**
 * FormInput — 텍스트 입력 필드 (md / sm)
 */
import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { fieldBase, fieldHeight, type FieldSize } from "./_shared";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: FieldSize;
  wrapperClassName?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ size = "md", wrapperClassName, className, ...props }, ref) => (
    <div className={cn("flex flex-col items-start w-full", wrapperClassName)}>
      <input
        ref={ref}
        className={cn(
          fieldBase,
          fieldHeight[size],
          "placeholder:text-font-mute-dark",
          "text-foreground",
          "disabled:text-font-mute-light",
          className,
        )}
        {...props}
      />
    </div>
  ),
);
FormInput.displayName = "FormInput";
