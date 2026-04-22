/**
 * Label — 작은 라벨 칩 (round / square)
 */
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "primary" | "secondary" | "tertiary" | "danger" | "warning";
type Shape = "square" | "round";

export interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  shape?: Shape;
}

const variantMap: Record<Variant, string> = {
  default:   "bg-surface-gray text-foreground",
  primary:   "bg-surface-sky text-sky-dark",
  secondary: "bg-surface-purple text-purple-dark",
  tertiary:  "bg-surface-teal text-teal-dark",
  danger:    "bg-surface-red text-red-dark",
  warning:   "bg-surface-yellow text-yellow-dark",
};

export const Label = ({
  variant = "default",
  shape = "square",
  className,
  children,
  ...props
}: LabelProps) => (
  <span
    className={cn(
      "inline-flex items-center font-sans text-label font-medium",
      "px-label-px-sm py-label-py-sm",
      shape === "square" ? "rounded-xs" : "rounded-label-round",
      variantMap[variant],
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

Label.displayName = "Label";
