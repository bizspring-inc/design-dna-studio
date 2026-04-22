import { BtnWithIcon } from "@/components/atoms/buttons/BtnWithIcon";
export default function Showcase() {
  return (
    <div className="flex flex-wrap items-center gap-md">
      <BtnWithIcon size="md">파일 첨부</BtnWithIcon>
      <BtnWithIcon size="sm">파일 첨부</BtnWithIcon>
      <BtnWithIcon disabled>Disabled</BtnWithIcon>
    </div>
  );
}
