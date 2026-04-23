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
          "relative shrink-0 w-[34px] h-[20px] rounded-label-round border transition-colors duration-300 ease-in-out",
          "bg-border-extra-light border-border",
          "peer-checked:bg-sky peer-checked:border-sky",
          className,
        )}
      >
        <span
          className={cn(
            "absolute top-1/2 left-px size-[16px] rounded-full bg-surface-white shadow-sm",
            "transition-transform duration-300 ease-in-out",
            "-translate-y-1/2 translate-x-0",
            "peer-checked:translate-x-[14px]",
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
      "relative shrink-0 inline-flex items-center w-[34px] h-[20px] rounded-label-round border transition-colors duration-300 ease-in-out",
      checked ? "bg-sky border-sky" : "bg-border-extra-light border-border",
      className,
    )}
    aria-hidden="true"
  >
    <span
      className={cn(
        "absolute top-1/2 left-px size-[16px] rounded-full bg-surface-white shadow-sm transition-transform duration-300 ease-in-out -translate-y-1/2",
        checked ? "translate-x-[14px]" : "translate-x-0",
      )}
    />
  </span>
);
SwitchIndicator.displayName = "SwitchIndicator";
