/**
 * TypeLabel — 발송 유형 배지 (채움형)
 */
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type TypeLabelValue = "one-time" | "period" | "trigger";

export interface TypeLabelProps extends HTMLAttributes<HTMLSpanElement> {
  type: TypeLabelValue;
}

const STYLES: Record<TypeLabelValue, { className: string; label: string }> = {
  "one-time": { className: "bg-sky-light-hover text-sky-hover",     label: "즉시발송" },
  "period":   { className: "bg-teal-light-hover text-teal-dark",    label: "예약발송" },
  "trigger":  { className: "bg-purple-light-hover text-purple-dark", label: "트리거"  },
};

export const TypeLabel = forwardRef<HTMLSpanElement, TypeLabelProps>(
  ({ type, className, ...props }, ref) => {
    const s = STYLES[type];
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-label-round",
          "px-ph-8 py-pv-1 text-tag font-medium whitespace-nowrap",
          s.className,
          className,
        )}
        {...props}
      >
        {s.label}
      </span>
    );
  },
);
TypeLabel.displayName = "TypeLabel";
