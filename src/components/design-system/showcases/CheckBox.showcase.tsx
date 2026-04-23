import { CheckBox, CheckBoxIndicator } from "@/components/atoms/controls/CheckBox";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-sm">
        <CheckBox label="이용약관에 동의합니다" defaultChecked />
        <CheckBox label="마케팅 수신 동의" />
        <CheckBox label="비활성" disabled />
      </div>
      <div className="flex items-center gap-md">
        <CheckBoxIndicator />
        <CheckBoxIndicator checked />
      </div>
    </div>
  );
}
