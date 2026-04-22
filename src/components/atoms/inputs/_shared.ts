/**
 * 공유 입력 토큰
 */
export type FieldSize = "md" | "sm";

export const fieldHeight: Record<FieldSize, string> = {
  md: "h-field-md",
  sm: "h-field-sm",
};

export const fieldBase =
  "w-full flex items-center px-ph-12 py-pv-6 " +
  "font-sans text-body-md " +
  "bg-surface-white border border-border " +
  "transition-colors duration-150 outline-none rounded-sm " +
  "focus:border-border-black " +
  "disabled:bg-surface-gray-light disabled:cursor-not-allowed";
