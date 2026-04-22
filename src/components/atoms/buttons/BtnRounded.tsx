/**
 * BtnRounded — Pill 버튼 (black / gray 테두리)
 */
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnBase } from "./_shared";

export interface BtnRoundedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "black" | "gray";
}

export const BtnRounded = forwardRef<HTMLButtonElement, BtnRoundedProps>(
  ({ color = "black", className, children = "button", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        btnBase,
        "h-8 px-ph-12 py-pv-6 rounded-label-round border text-body-md",
        color === "black" && [
          "bg-surface-white border-border-black text-foreground",
          "hover:bg-surface-gray-light",
          "active:bg-surface-gray",
          "disabled:bg-surface-gray disabled:border-font-mute-dark disabled:text-font-mute-dark",
        ],
        color === "gray" && [
          "bg-surface-white border-border-light text-foreground",
          "hover:bg-surface-gray-light",
          "active:bg-surface-gray",
          "disabled:bg-surface-gray disabled:text-font-mute-dark",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
BtnRounded.displayName = "BtnRounded";
