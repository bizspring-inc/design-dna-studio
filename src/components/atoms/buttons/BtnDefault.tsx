/**
 * BtnDefault — Gray 아웃라인
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnBase, sizeMd3 } from "./_shared";

export interface BtnDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "md" | "sm" | "xs";
}

export const BtnDefault = forwardRef<HTMLButtonElement, BtnDefaultProps>(
  ({ size = "md", className, children = "Button", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        btnBase,
        "border border-border-light bg-surface-white text-foreground",
        "hover:bg-surface-gray-light",
        "active:bg-surface-gray",
        "disabled:bg-surface-gray disabled:text-font-mute-dark",
        sizeMd3[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
BtnDefault.displayName = "BtnDefault";
