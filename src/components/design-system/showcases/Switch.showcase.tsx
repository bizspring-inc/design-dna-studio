import { useState } from "react";
import { Switch, SwitchIndicator } from "@/components/atoms/controls/Switch";
export default function Showcase() {
  const [on, setOn] = useState(true);
  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-sm">
        <Switch label="알림 수신" defaultChecked />
        <Switch label="다크 모드" checked={on} onChange={(e) => setOn(e.target.checked)} />
        <Switch label="비활성" disabled />
      </div>
      <div className="flex items-center gap-md">
        <SwitchIndicator />
        <SwitchIndicator checked />
      </div>
    </div>
  );
}
