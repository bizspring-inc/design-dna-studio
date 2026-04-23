import { TypeLabel } from "@/components/atoms/data-display/TypeLabel";
export default function Showcase() {
  return (
    <div className="flex flex-wrap gap-sm">
      <TypeLabel type="one-time" />
      <TypeLabel type="period" />
      <TypeLabel type="trigger" />
    </div>
  );
}
