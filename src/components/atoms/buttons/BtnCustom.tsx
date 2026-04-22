/**
 * BtnCustom — Sky Blue 채움 (Primary)
 * size: md(default) / sm / xs
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnBase, sizeMd3 } from "./_shared";

export type BtnSize3 = "md" | "sm" | "xs";

export interface BtnCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: BtnSize3;
}

export const BtnCustom = forwardRef<HTMLButtonElement, BtnCustomProps>(
  ({ size = "md", className, children = "Button", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        btnBase,
        "bg-primary text-primary-foreground",
        "hover:bg-primary-hover",
        "active:bg-primary-active",
        "disabled:bg-primary-active disabled:text-sky-light-active",
        sizeMd3[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
BtnCustom.displayName = "BtnCustom";
