import { BtnRedLine } from "@/components/atoms/buttons/BtnRedLine";
export default function Showcase() {
  return (
    <div className="flex flex-wrap items-center gap-md">
      <BtnRedLine size="md">Cancel</BtnRedLine>
      <BtnRedLine size="sm">Cancel</BtnRedLine>
      <BtnRedLine size="xs">Cancel</BtnRedLine>
      <BtnRedLine disabled>Disabled</BtnRedLine>
    </div>
  );
}
