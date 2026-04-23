import { InquiryStatus } from "@/components/atoms/data-display/InquiryStatus";
export default function Showcase() {
  return (
    <div className="flex flex-wrap gap-sm">
      <InquiryStatus status="waiting" />
      <InquiryStatus status="done" />
      <InquiryStatus status="temporary save" />
    </div>
  );
}
