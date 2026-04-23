/**
 * CheckBox — 커스텀 체크박스 (17×17)
 */
import { InputHTMLAttributes, forwardRef, ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  labelClassName?: string;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, labelClassName, className, ...props }, ref) => (
    <label
      className={cn(
        "inline-flex items-center gap-1.5 cursor-pointer",
        props.disabled && "cursor-not-allowed opacity-50",
        labelClassName,
      )}
    >
      <input ref={ref} type="checkbox" className="sr-only peer" {...props} />
      <span
        className={cn(
          "relative shrink-0 size-icon-sm border transition-colors duration-150",
          "bg-surface-white border-border-extra-light",
          "peer-checked:bg-sky peer-checked:border-sky",
          className,
        )}
      >
        <Check
          size={11}
          strokeWidth={2.5}
          className={cn(
            "absolute inset-0 m-auto text-font-white",
            "opacity-0 peer-checked:opacity-100 transition-opacity duration-150",
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
CheckBox.displayName = "CheckBox";

export const CheckBoxIndicator = ({
  checked = false,
  className,
}: {
  checked?: boolean;
  className?: string;
}) => (
  <span
    className={cn(
      "relative shrink-0 size-icon-sm border transition-colors duration-150",
      checked ? "bg-sky border-sky" : "bg-surface-white border-border-extra-light",
      className,
    )}
    aria-hidden="true"
  >
    {checked && (
      <Check size={11} strokeWidth={2.5} className="absolute inset-0 m-auto text-font-white" />
    )}
  </span>
);
CheckBoxIndicator.displayName = "CheckBoxIndicator";
