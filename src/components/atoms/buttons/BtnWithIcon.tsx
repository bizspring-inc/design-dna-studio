/**
 * BtnWithIcon — Gray 아웃라인 + 왼쪽 아이콘 (md / sm)
 */
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";
import { btnBase } from "./_shared";

export interface BtnWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "md" | "sm";
  icon?: ReactNode;
}

export const BtnWithIcon = forwardRef<HTMLButtonElement, BtnWithIconProps>(
  ({ size = "md", icon, className, children = "Button", disabled, ...props }, ref) => {
    const iconEl =
      icon !== undefined ? icon : (
        <Paperclip
          size={17}
          strokeWidth={1.5}
          className={cn("shrink-0", disabled ? "text-font-mute-dark" : "text-foreground")}
        />
      );

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          btnBase,
          "gap-1 border border-border-light",
          "bg-surface-white text-foreground",
          "hover:bg-surface-gray-light",
          "active:bg-surface-gray",
          "disabled:bg-surface-gray disabled:text-font-mute-dark",
          size === "md" && "h-field-md px-md py-pv-8 rounded-sm text-body-md",
          size === "sm" && "h-field-sm px-ph-12 py-pv-6 rounded-sm text-body-md",
          className,
        )}
        {...props}
      >
        {iconEl}
        {children}
      </button>
    );
  },
);
BtnWithIcon.displayName = "BtnWithIcon";
