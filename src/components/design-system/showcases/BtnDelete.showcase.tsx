import { BtnDelete } from "@/components/atoms/buttons/BtnDelete";
export default function Showcase() {
  return (
    <div className="flex items-center gap-md">
      <BtnDelete />
      <BtnDelete disabled />
    </div>
  );
}
