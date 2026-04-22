/**
 * Text — body 텍스트 원자 (xs/sm/md/lg/xl)
 */
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Tone = "default" | "muted" | "mute-light" | "white" | "link" | "danger";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Size;
  tone?: Tone;
  as?: "p" | "span" | "div";
}

const sizeMap: Record<Size, string> = {
  xs: "text-body-xs",
  sm: "text-body-sm",
  md: "text-body-md",
  lg: "text-body-lg",
  xl: "text-body-xl",
};

const toneMap: Record<Tone, string> = {
  default: "text-foreground",
  muted: "text-font-mute-dark",
  "mute-light": "text-font-mute-light",
  white: "text-font-white",
  link: "text-font-link hover:text-font-link-hover underline",
  danger: "text-red",
};

export const Text = ({
  size = "md",
  tone = "default",
  as: Tag = "p",
  className,
  children,
  ...props
}: TextProps) => (
  <Tag className={cn("font-sans", sizeMap[size], toneMap[tone], className)} {...props}>
    {children}
  </Tag>
);

Text.displayName = "Text";
