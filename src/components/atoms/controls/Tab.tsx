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
        "relative inline-flex items-center p-sm",
        "font-sans font-semibold text-h4 whitespace-nowrap",
        "transition-colors duration-150 cursor-pointer bg-transparent",
        active ? "text-foreground" : "text-font-mute-dark hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 right-0 -bottom-px h-[2px] transition-colors duration-150",
          active ? "bg-sky" : "bg-transparent",
        )}
      />
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
