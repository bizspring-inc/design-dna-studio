import { FormDropdown } from "@/components/atoms/inputs/FormDropdown";
const opts = [
  { value: "search", label: "검색 광고" },
  { value: "social", label: "소셜 미디어" },
  { value: "referral", label: "지인 추천" },
];
export default function Showcase() {
  return (
    <div className="flex flex-col gap-md max-w-col-md">
      <FormDropdown placeholder="유입 경로 선택" options={opts} />
      <FormDropdown size="sm" placeholder="sm 사이즈" options={opts} />
      <FormDropdown defaultValue="social" options={opts} />
      <FormDropdown placeholder="비활성화" options={opts} disabled />
    </div>
  );
}
