import { Label } from "@/components/atoms/data-display/Label";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-wrap gap-sm">
        <Label>default</Label>
        <Label variant="primary">primary</Label>
        <Label variant="secondary">secondary</Label>
        <Label variant="tertiary">tertiary</Label>
        <Label variant="danger">danger</Label>
        <Label variant="warning">warning</Label>
      </div>
      <div className="flex flex-wrap gap-sm">
        <Label shape="round" variant="primary">round</Label>
        <Label shape="round" variant="tertiary">round</Label>
        <Label shape="round" variant="danger">round</Label>
      </div>
    </div>
  );
}
