import { BtnRounded } from "@/components/atoms/buttons/BtnRounded";
export default function Showcase() {
  return (
    <div className="flex flex-wrap items-center gap-md">
      <BtnRounded color="black">button</BtnRounded>
      <BtnRounded color="gray">button</BtnRounded>
      <BtnRounded disabled>Disabled</BtnRounded>
    </div>
  );
}
