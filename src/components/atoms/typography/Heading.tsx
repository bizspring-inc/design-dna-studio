/**
 * Heading — H1~H5 시맨틱 타이포 원자
 */
import { HTMLAttributes, createElement } from "react";
import { cn } from "@/lib/utils";

type Level = 1 | 2 | 3 | 4 | 5;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
}

const sizeMap: Record<Level, string> = {
  1: "text-h1 font-bold",
  2: "text-h2 font-semibold",
  3: "text-h3 font-semibold",
  4: "text-h4 font-medium",
  5: "text-h5 font-medium",
};

export const Heading = ({ level = 1, className, children, ...props }: HeadingProps) =>
  createElement(
    `h${level}`,
    { className: cn("text-foreground font-sans", sizeMap[level], className), ...props },
    children,
  );

Heading.displayName = "Heading";
