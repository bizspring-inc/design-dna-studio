/**
 * 공유 버튼 토큰 — 사이즈 / base 클래스
 * 모든 값은 tailwind 토큰(시멘틱) 기반
 */
export const btnBase =
  "inline-flex items-center justify-center font-sans font-normal " +
  "transition-colors duration-150 cursor-pointer select-none whitespace-nowrap " +
  "disabled:cursor-not-allowed";

export const sizeMd3: Record<"md" | "sm" | "xs", string> = {
  md: "px-md py-pv-8 rounded-sm text-body-md",
  sm: "px-ph-12 py-pv-6 rounded-sm text-body-md",
  xs: "px-ph-6 py-pv-1 rounded-xs text-body-sm",
};

export const sizeSmXs: Record<"sm" | "xs", string> = {
  sm: "px-ph-12 py-pv-6 rounded-sm text-body-md",
  xs: "px-ph-6 py-pv-1 rounded-xs text-body-sm",
};
