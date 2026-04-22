import { BtnPlus } from "@/components/atoms/buttons/BtnPlus";
export default function Showcase() {
  return (
    <div className="flex items-center gap-md">
      <BtnPlus />
      <BtnPlus disabled />
    </div>
  );
}
