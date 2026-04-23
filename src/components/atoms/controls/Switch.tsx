/**
 * Switch — 토글 스위치 (34×20 트랙, 18 손잡이)
 */
import { InputHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  labelClassName?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, labelClassName, className, ...props }, ref) => (
    <label
      className={cn(
        "inline-flex items-center gap-sm cursor-pointer",
        props.disabled && "cursor-not-allowed opacity-50",
        labelClassName,
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        className="sr-only peer"
        {...props}
      />
      <span
        className={cn(
          "relative shrink-0 w-[34px] h-[20px] rounded-label-round border transition-colors duration-200",
          "bg-border-extra-light border-border",
          "peer-checked:bg-sky peer-checked:border-sky",
          className,
        )}
      >
        <span
          className={cn(
            "absolute top-1/2 -translate-y-1/2 size-[18px] rounded-full bg-surface-white shadow-sm",
            "left-px transition-[left] duration-200",
            "peer-checked:left-[calc(100%-19px)]",
          )}
          aria-hidden="true"
        />
      </span>
      {label && (
        <span className="font-sans text-body-md text-foreground">{label}</span>
      )}
    </label>
  ),
);
Switch.displayName = "Switch";

export const SwitchIndicator = ({
  checked = false,
  className,
}: {
  checked?: boolean;
  className?: string;
}) => (
  <span
    className={cn(
      "relative shrink-0 inline-flex items-center w-[34px] h-[20px] rounded-label-round border transition-colors duration-200",
      checked ? "bg-sky border-sky" : "bg-border-extra-light border-border",
      className,
    )}
    aria-hidden="true"
  >
    <span
      className={cn(
        "absolute top-1/2 -translate-y-1/2 size-[18px] rounded-full bg-surface-white shadow-sm transition-[left] duration-200",
        checked ? "left-[calc(100%-19px)]" : "left-px",
      )}
    />
  </span>
);
SwitchIndicator.displayName = "SwitchIndicator";
