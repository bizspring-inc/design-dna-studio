/**
 * ProjectStatus — 프로젝트 상태 배지 (테두리형)
 */
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ProjectStatusValue = "Onboarding" | "In Progress" | "Done";

export interface ProjectStatusProps extends HTMLAttributes<HTMLSpanElement> {
  status: ProjectStatusValue;
}

const STYLES: Record<
  ProjectStatusValue,
  { className: string; label: string }
> = {
  "Onboarding":  { className: "bg-teal-light border-teal text-teal",     label: "온보딩"   },
  "In Progress": { className: "bg-surface-sky border-sky text-sky",      label: "이용중"   },
  "Done":        { className: "bg-surface-gray border-border-dark text-font-mute-dark", label: "이용완료" },
};

export const ProjectStatus = forwardRef<HTMLSpanElement, ProjectStatusProps>(
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
ProjectStatus.displayName = "ProjectStatus";
