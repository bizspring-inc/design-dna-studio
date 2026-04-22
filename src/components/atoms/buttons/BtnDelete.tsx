/**
 * BtnDelete — 24×24 X 아이콘 버튼 (Red)
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BtnDeleteProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BtnDelete = forwardRef<HTMLButtonElement, BtnDeleteProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center size-6 rounded-xs",
        "border border-red bg-red text-font-white",
        "transition-colors duration-150 cursor-pointer",
        "hover:bg-red-hover hover:border-red-hover",
        "active:bg-red-active active:border-red-active",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <X size={13} strokeWidth={2.5} />
    </button>
  ),
);
BtnDelete.displayName = "BtnDelete";
