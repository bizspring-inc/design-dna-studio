import { BtnDefault } from "@/components/atoms/buttons/BtnDefault";
export default function Showcase() {
  return (
    <div className="flex flex-wrap items-center gap-md">
      <BtnDefault size="md">Button</BtnDefault>
      <BtnDefault size="sm">Button</BtnDefault>
      <BtnDefault size="xs">Button</BtnDefault>
      <BtnDefault disabled>Disabled</BtnDefault>
    </div>
  );
}
