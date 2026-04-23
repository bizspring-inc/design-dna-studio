/**
 * ActionStatus — 액션 결과 상태 배지 (채움형)
 */
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ActionStatusValue = "Success" | "Waiting" | "Done" | "Fail";

export interface ActionStatusProps extends HTMLAttributes<HTMLSpanElement> {
  status: ActionStatusValue;
}

const STYLES: Record<ActionStatusValue, { className: string; label: string }> = {
  "Success": { className: "bg-sky-light-hover text-sky-hover",          label: "성공" },
  "Waiting": { className: "bg-yellow-light text-yellow-dark",           label: "대기" },
  "Done":    { className: "bg-border-extra-light text-font-mute-dark",  label: "완료" },
  "Fail":    { className: "bg-red-light text-red",                      label: "실패" },
};

export const ActionStatus = forwardRef<HTMLSpanElement, ActionStatusProps>(
  ({ status, className, ...props }, ref) => {
    const s = STYLES[status];
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
ActionStatus.displayName = "ActionStatus";
