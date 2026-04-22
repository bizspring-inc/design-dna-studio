/**
 * BtnDanger — Red 채움 (sm / xs 전용)
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnBase, sizeSmXs } from "./_shared";

export interface BtnDangerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "xs";
}

export const BtnDanger = forwardRef<HTMLButtonElement, BtnDangerProps>(
  ({ size = "sm", className, children = "Button", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        btnBase,
        "border border-red bg-red text-font-white",
        "hover:bg-red-hover hover:border-red-hover",
        "active:bg-red-active active:border-red-active",
        "disabled:bg-red-active disabled:border-red-active disabled:text-red-light-active",
        sizeSmXs[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
BtnDanger.displayName = "BtnDanger";
