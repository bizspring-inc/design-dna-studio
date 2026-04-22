/**
 * FormDropdown — 셀렉트 드롭다운 (md / sm)
 */
import { forwardRef, SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { fieldBase, fieldHeight, type FieldSize } from "./_shared";

export interface FormDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  size?: FieldSize;
  options?: { value: string; label: string }[];
  placeholder?: string;
  wrapperClassName?: string;
}

export const FormDropdown = forwardRef<HTMLSelectElement, FormDropdownProps>(
  (
    {
      size = "md",
      options = [],
      placeholder = "input",
      wrapperClassName,
      className,
      disabled,
      value,
      defaultValue,
      children,
      ...props
    },
    ref,
  ) => {
    const hasValue = value !== undefined ? String(value) !== "" : undefined;

    return (
      <div className={cn("relative flex items-center w-full", wrapperClassName)}>
        <select
          ref={ref}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue ?? ""}
          className={cn(
            fieldBase,
            fieldHeight[size],
            "appearance-none pr-xl w-full",
            hasValue === false || (!value && !defaultValue)
              ? "text-font-mute-dark"
              : "text-foreground",
            "disabled:text-font-mute-light",
            className,
          )}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
          {children}
        </select>
        <span
          className={cn(
            "pointer-events-none absolute right-ph-12 shrink-0",
            disabled ? "text-font-mute-light" : "text-foreground",
          )}
        >
          <ChevronDown size={17} strokeWidth={1.5} />
        </span>
      </div>
    );
  },
);
FormDropdown.displayName = "FormDropdown";
