/**
 * BtnTealLine — Teal 아웃라인
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnBase, sizeMd3 } from "./_shared";

export interface BtnTealLineProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "md" | "sm" | "xs";
}

export const BtnTealLine = forwardRef<HTMLButtonElement, BtnTealLineProps>(
  ({ size = "md", className, children = "Button", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        btnBase,
        "border border-teal bg-surface-white text-teal",
        "hover:bg-surface-teal",
        "active:bg-surface-teal-hover",
        "disabled:bg-surface-white disabled:border-teal-light-active disabled:text-teal-light-active",
        sizeMd3[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
BtnTealLine.displayName = "BtnTealLine";
