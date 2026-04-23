import { Radio, RadioIndicator } from "@/components/atoms/controls/Radio";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-md">
      <div className="flex gap-md">
        <Radio name="ch" value="sns" label="SNS" defaultChecked />
        <Radio name="ch" value="search" label="검색" />
        <Radio name="ch" value="ad" label="광고" disabled />
      </div>
      <div className="flex items-center gap-md">
        <RadioIndicator />
        <RadioIndicator checked />
      </div>
    </div>
  );
}
