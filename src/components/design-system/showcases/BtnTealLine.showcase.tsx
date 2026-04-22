import { BtnTealLine } from "@/components/atoms/buttons/BtnTealLine";
export default function Showcase() {
  return (
    <div className="flex flex-wrap items-center gap-md">
      <BtnTealLine size="md">Confirm</BtnTealLine>
      <BtnTealLine size="sm">Confirm</BtnTealLine>
      <BtnTealLine size="xs">Confirm</BtnTealLine>
      <BtnTealLine disabled>Disabled</BtnTealLine>
    </div>
  );
}
