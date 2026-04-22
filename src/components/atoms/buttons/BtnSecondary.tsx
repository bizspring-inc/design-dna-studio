/**
 * BtnSecondary — Purple 채움
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnBase, sizeMd3, type } from "./_shared";

export type BtnSize3 = "md" | "sm" | "xs";

export interface BtnSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: BtnSize3;
}

export const BtnSecondary = forwardRef<HTMLButtonElement, BtnSecondaryProps>(
  ({ size = "md", className, children = "Button", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        btnBase,
        "bg-secondary text-secondary-foreground",
        "hover:bg-secondary-hover",
        "active:bg-secondary-active",
        "disabled:bg-secondary-active disabled:text-purple-light-active",
        sizeMd3[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
BtnSecondary.displayName = "BtnSecondary";
