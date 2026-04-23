import { OnboardingStatus } from "@/components/atoms/data-display/OnboardingStatus";
export default function Showcase() {
  return (
    <div className="flex flex-wrap gap-sm">
      <OnboardingStatus status="In Progress" />
      <OnboardingStatus status="Waiting" />
      <OnboardingStatus status="Done" />
      <OnboardingStatus status="Fail" />
    </div>
  );
}
