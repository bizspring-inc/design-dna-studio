import { ProjectStatus } from "@/components/atoms/data-display/ProjectStatus";
export default function Showcase() {
  return (
    <div className="flex flex-wrap gap-sm">
      <ProjectStatus status="Onboarding" />
      <ProjectStatus status="In Progress" />
      <ProjectStatus status="Done" />
    </div>
  );
}
