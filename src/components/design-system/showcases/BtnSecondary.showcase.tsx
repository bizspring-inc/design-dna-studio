import { BtnSecondary } from "@/components/atoms/buttons/BtnSecondary";
export default function Showcase() {
  return (
    <div className="flex flex-wrap items-center gap-md">
      <BtnSecondary size="md">Button</BtnSecondary>
      <BtnSecondary size="sm">Button</BtnSecondary>
      <BtnSecondary size="xs">Button</BtnSecondary>
      <BtnSecondary disabled>Disabled</BtnSecondary>
    </div>
  );
}
