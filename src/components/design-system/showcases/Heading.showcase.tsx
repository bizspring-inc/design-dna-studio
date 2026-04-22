import { Heading } from "@/components/atoms/typography/Heading";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-sm">
      <Heading level={1}>H1 — 36px Bold</Heading>
      <Heading level={2}>H2 — 24px Semibold</Heading>
      <Heading level={3}>H3 — 21px Semibold</Heading>
      <Heading level={4}>H4 — 18px Medium</Heading>
      <Heading level={5}>H5 — 16px Medium</Heading>
    </div>
  );
}
