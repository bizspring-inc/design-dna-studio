import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * 커스텀 tailwind-merge
 *
 * 디자인 시스템에서 도입한 커스텀 토큰들이 기본 tailwind-merge의
 * 충돌 그룹과 어긋나는 문제를 해결한다.
 *
 * 1) fontSize 그룹에 우리 시멘틱 텍스트 사이즈를 명시적으로 등록
 *    → text-body-md, text-h1, text-tag 등이 색상 클래스와 충돌하지 않도록
 *
 * 2) text-color 그룹에 커스텀 컬러 토큰을 명시
 *    → text-primary-foreground, text-font-white 등이 fontSize로 오인되지 않도록
 *
 * 3) bg-color 그룹에도 커스텀 surface 토큰 등록
 */
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "h1", "h2", "h3", "h4", "h5",
            "body-xs", "body-sm", "body-md", "body-lg", "body-xl",
            "caption", "label", "tag",
          ],
        },
      ],
      "text-color": [
        {
          text: [
            "primary-foreground",
            "secondary-foreground",
            "destructive-foreground",
            "accent-foreground",
            "muted-foreground",
            "popover-foreground",
            "card-foreground",
            // font.* 시멘틱
            "font-white",
            "font-mute-dark",
            "font-mute-light",
            "font-link",
            "font-link-hover",
            // 컬러 스케일 — Hover/Active/Dark/Light variants
            "primary-hover", "primary-active",
            "secondary-hover", "secondary-active",
            "tertiary", "tertiary-hover", "tertiary-active",
            "sky-hover", "sky-active", "sky-dark", "sky-dark-hover", "sky-dark-active", "sky-darker",
            "purple-hover", "purple-active", "purple-dark", "purple-dark-hover", "purple-dark-active", "purple-darker",
            "teal-hover", "teal-active", "teal-dark", "teal-dark-hover", "teal-dark-active", "teal-darker",
            "blue-hover", "blue-active", "blue-dark",
            "yellow-hover", "yellow-active", "yellow-dark",
            "red-hover", "red-active", "red-dark",
            "sky-light-active", "purple-light-active", "teal-light-active",
            "red-light-active", "yellow-light-active",
          ],
        },
      ],
      "bg-color": [
        {
          bg: [
            "primary-hover", "primary-active",
            "secondary-hover", "secondary-active",
            "tertiary", "tertiary-hover", "tertiary-active",
            "sky-hover", "sky-active", "sky-light", "sky-light-xl", "sky-light-hover", "sky-light-active",
            "sky-dark", "sky-dark-hover", "sky-dark-active", "sky-darker",
            "purple-hover", "purple-active", "purple-light", "purple-light-hover", "purple-light-active",
            "purple-dark", "purple-dark-hover", "purple-dark-active", "purple-darker",
            "teal-hover", "teal-active", "teal-light", "teal-light-hover", "teal-light-active",
            "teal-dark", "teal-dark-hover", "teal-dark-active", "teal-darker",
            "blue-hover", "blue-active", "blue-light", "blue-light-hover", "blue-light-active", "blue-dark",
            "yellow-hover", "yellow-active", "yellow-light", "yellow-light-hover", "yellow-light-active", "yellow-dark",
            "red-hover", "red-active", "red-light", "red-light-hover", "red-light-active", "red-dark",
          ],
        },
      ],
      "border-color": [
        {
          border: [
            "extra-light", "light", "dark", "black",
            "primary", "secondary",
            "sky", "sky-hover", "sky-light-active",
            "purple", "purple-hover", "purple-light-active",
            "teal", "teal-hover", "teal-light-active",
            "red", "red-hover", "red-light-active",
            "yellow",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
