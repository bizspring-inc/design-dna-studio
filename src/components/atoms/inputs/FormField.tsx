/**
 * FormField — 라벨 + 입력 + 에러/힌트 래퍼
 */
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

export const FormField = ({
  label,
  required,
  error,
  hint,
  children,
  className,
}: FormFieldProps) => (
  <div className={cn("flex flex-col gap-xs w-full", className)}>
    {label && (
      <label className="text-body-sm text-foreground font-sans">
        {label}
        {required && (
          <span className="ml-0.5 text-red" aria-hidden="true">
            *
          </span>
        )}
      </label>
    )}
    {children}
    {error && (
      <p className="text-caption text-red font-sans">{error}</p>
    )}
    {hint && !error && (
      <p className="text-caption text-font-mute-dark font-sans">{hint}</p>
    )}
  </div>
);
FormField.displayName = "FormField";
