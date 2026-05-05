/**
 * Card — 콘텐츠 컨테이너
 * - radius: sm 고정
 * - border: border-default (border 토큰)
 * - padding: sm / md / lg / xl
 */
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type CardPadding = "sm" | "md" | "lg" | "xl";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
}

const paddingMap: Record<CardPadding, string> = {
  sm: "p-sm",
  md: "p-md",
  lg: "p-lg",
  xl: "p-xl",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ padding = "md", className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-surface-white border border-border rounded-sm",
        paddingMap[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";
