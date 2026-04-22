/**
 * Blockquote — 노란 배경 안내문
 */
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BlockquoteProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Blockquote = ({ children = "안내문", className, ...props }: BlockquoteProps) => (
  <div
    className={cn(
      "flex items-center gap-xs w-full h-auto overflow-hidden",
      "bg-surface-yellow rounded-xs px-ph-12 py-pv-6",
      className,
    )}
    {...props}
  >
    <span
      className="shrink-0 rounded-img-circle bg-font-mute-dark"
      style={{ width: 6, height: 6 }}
      aria-hidden="true"
    />
    <p className="font-sans font-normal text-body-sm text-font-mute-dark whitespace-normal break-words">
      {children}
    </p>
  </div>
);

Blockquote.displayName = "Blockquote";
