import { useState } from "react";
import { Tab, TabGroup } from "@/components/atoms/controls/Tab";
export default function Showcase() {
  const [active, setActive] = useState("home");
  return (
    <TabGroup>
      <Tab active={active === "home"} onClick={() => setActive("home")}>홈</Tab>
      <Tab active={active === "dash"} onClick={() => setActive("dash")}>대시보드</Tab>
      <Tab active={active === "set"} onClick={() => setActive("set")}>설정</Tab>
    </TabGroup>
  );
}
