/**
 * OnboardingStatus — 온보딩 단계 상태 배지 (테두리형, 흰 배경)
 */
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type OnboardingStatusValue = "In Progress" | "Waiting" | "Done" | "Fail";

export interface OnboardingStatusProps extends HTMLAttributes<HTMLSpanElement> {
  status: OnboardingStatusValue;
}

const STYLES: Record<
  OnboardingStatusValue,
  { className: string; label: string }
> = {
  "In Progress": { className: "bg-surface-white border-sky text-sky",                        label: "진행중"   },
  "Waiting":     { className: "bg-surface-white border-foreground text-foreground",          label: "진행대기" },
  "Done":        { className: "bg-surface-gray border-border-dark text-font-mute-dark",      label: "진행완료" },
  "Fail":        { className: "bg-surface-white border-red text-red",                        label: "실패"     },
};

export const OnboardingStatus = forwardRef<HTMLSpanElement, OnboardingStatusProps>(
  ({ status, className, ...props }, ref) => {
    const s = STYLES[status];
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-label-round border",
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
OnboardingStatus.displayName = "OnboardingStatus";
