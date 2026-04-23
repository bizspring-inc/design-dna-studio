/**
 * InquiryStatus — 문의 상태 배지 (테두리형, 흰 배경)
 */
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type InquiryStatusValue = "waiting" | "done" | "temporary save";

export interface InquiryStatusProps extends HTMLAttributes<HTMLSpanElement> {
  status: InquiryStatusValue;
}

const STYLES: Record<InquiryStatusValue, { className: string; label: string }> = {
  "waiting":        { className: "border-red text-red",                           label: "문의접수" },
  "done":           { className: "border-sky text-sky",                           label: "답변완료" },
  "temporary save": { className: "border-border-dark text-font-mute-dark",        label: "임시저장" },
};

export const InquiryStatus = forwardRef<HTMLSpanElement, InquiryStatusProps>(
  ({ status, className, ...props }, ref) => {
    const s = STYLES[status];
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-label-round border bg-surface-white",
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
InquiryStatus.displayName = "InquiryStatus";
