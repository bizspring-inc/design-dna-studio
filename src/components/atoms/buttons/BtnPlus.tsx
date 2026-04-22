/**
 * BtnPlus — 24×24 + 아이콘 버튼
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BtnPlusProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BtnPlus = forwardRef<HTMLButtonElement, BtnPlusProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center size-6 rounded-xs",
        "border border-border-light bg-surface-white text-foreground",
        "transition-colors duration-150 cursor-pointer",
        "hover:bg-surface-gray-light",
        "active:bg-surface-gray",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <Plus size={14} strokeWidth={2} />
    </button>
  ),
);
BtnPlus.displayName = "BtnPlus";
