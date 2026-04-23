/**
 * Tab — 탭 메뉴 아이템 (active / inactive)
 * TabGroup — 탭 목록 래퍼
 */
import { ButtonHTMLAttributes, HTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ active = false, className, children, ...props }, ref) => (
    <button
      ref={ref}
      role="tab"
      aria-selected={active}
      data-state={active ? "active" : "inactive"}
      className={cn(
        "relative inline-flex items-center overflow-hidden p-sm -mb-px",
        "font-sans font-semibold text-h4 whitespace-nowrap",
        "border-b-bold border-solid",
        "transition-colors duration-150 cursor-pointer",
        active
          ? "border-sky text-foreground"
          : "border-transparent text-font-mute-dark hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
Tab.displayName = "Tab";

export interface TabGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      className={cn("flex items-end gap-sm border-b border-border-extra-light", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
TabGroup.displayName = "TabGroup";
