import { FormField } from "@/components/atoms/inputs/FormField";
import { FormInput } from "@/components/atoms/inputs/FormInput";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-lg max-w-col-md">
      <FormField label="이메일" required hint="회사 이메일을 입력해주세요.">
        <FormInput placeholder="ID (Email)" />
      </FormField>
      <FormField label="비밀번호" required error="8자 이상 입력해주세요.">
        <FormInput type="password" placeholder="********" />
      </FormField>
    </div>
  );
}
