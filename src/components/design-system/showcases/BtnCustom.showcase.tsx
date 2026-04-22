import { BtnCustom } from "@/components/atoms/buttons/BtnCustom";
export default function Showcase() {
  return (
    <div className="flex flex-wrap items-center gap-md">
      <BtnCustom size="md">Button</BtnCustom>
      <BtnCustom size="sm">Button</BtnCustom>
      <BtnCustom size="xs">Button</BtnCustom>
      <BtnCustom size="md" disabled>Disabled</BtnCustom>
    </div>
  );
}
