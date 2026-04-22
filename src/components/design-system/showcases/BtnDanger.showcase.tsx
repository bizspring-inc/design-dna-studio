import { BtnDanger } from "@/components/atoms/buttons/BtnDanger";
export default function Showcase() {
  return (
    <div className="flex flex-wrap items-center gap-md">
      <BtnDanger size="sm">Delete</BtnDanger>
      <BtnDanger size="xs">Delete</BtnDanger>
      <BtnDanger size="sm" disabled>Disabled</BtnDanger>
    </div>
  );
}
