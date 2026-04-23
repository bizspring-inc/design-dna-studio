import { ActionStatus } from "@/components/atoms/data-display/ActionStatus";
export default function Showcase() {
  return (
    <div className="flex flex-wrap gap-sm">
      <ActionStatus status="Success" />
      <ActionStatus status="Waiting" />
      <ActionStatus status="Done" />
      <ActionStatus status="Fail" />
    </div>
  );
}
