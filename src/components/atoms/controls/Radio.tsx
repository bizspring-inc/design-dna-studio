/**
 * Radio — 커스텀 라디오 버튼 (17×17)
 */
import { InputHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  labelClassName?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, labelClassName, className, ...props }, ref) => (
    <label
      className={cn(
        "inline-flex items-center gap-1.5 cursor-pointer group",
        props.disabled && "cursor-not-allowed opacity-50",
        labelClassName,
      )}
    >
      <input ref={ref} type="radio" className="sr-only peer" {...props} />
      <span
        className={cn(
          "relative shrink-0 size-icon-sm rounded-full border bg-surface-white",
          "border-border-extra-light transition-colors duration-150",
          "peer-checked:border-sky",
          "after:content-[''] after:absolute after:inset-0 after:m-auto",
          "after:size-[7px] after:rounded-full after:bg-sky",
          "after:opacity-0 peer-checked:after:opacity-100 after:transition-opacity",
          className,
        )}
        aria-hidden="true"
      />
      {label && (
        <span className="font-sans text-body-md text-foreground">{label}</span>
      )}
    </label>
  ),
);
Radio.displayName = "Radio";

export const RadioIndicator = ({
  checked = false,
  className,
}: {
  checked?: boolean;
  className?: string;
}) => (
  <span
    className={cn(
      "relative shrink-0 size-icon-sm rounded-full border bg-surface-white",
      checked ? "border-sky" : "border-border-extra-light",
      className,
    )}
    aria-hidden="true"
  >
    {checked && (
      <span className="absolute inset-0 m-auto rounded-full size-[7px] bg-sky" />
    )}
  </span>
);
RadioIndicator.displayName = "RadioIndicator";
