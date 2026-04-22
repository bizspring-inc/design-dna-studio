/**
 * BtnRedLine — Red 아웃라인
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnBase, sizeMd3 } from "./_shared";

export interface BtnRedLineProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "md" | "sm" | "xs";
}

export const BtnRedLine = forwardRef<HTMLButtonElement, BtnRedLineProps>(
  ({ size = "md", className, children = "Button", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        btnBase,
        "border border-red bg-surface-white text-red",
        "hover:bg-surface-red",
        "active:bg-surface-red-hover",
        "disabled:bg-surface-white disabled:border-red-light-active disabled:text-red-light-active",
        sizeMd3[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
BtnRedLine.displayName = "BtnRedLine";
