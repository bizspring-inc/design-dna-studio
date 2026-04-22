import { FormInput } from "@/components/atoms/inputs/FormInput";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-md max-w-col-md">
      <FormInput placeholder="ID (Email)" />
      <FormInput size="sm" placeholder="sm 사이즈" />
      <FormInput defaultValue="user@bizspring.co.kr" />
      <FormInput placeholder="비활성화" disabled />
    </div>
  );
}
