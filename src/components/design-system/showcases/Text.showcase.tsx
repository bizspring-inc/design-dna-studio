import { Text } from "@/components/atoms/typography/Text";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-sm">
      <Text size="xl">Body XL — 18px / 170%</Text>
      <Text size="lg">Body LG — 15px / 160%</Text>
      <Text size="md">Body MD — 14px / 160% (default)</Text>
      <Text size="sm">Body SM — 13px / 145%</Text>
      <Text size="xs">Body XS — 12px / 145%</Text>
      <div className="flex flex-wrap gap-md pt-sm">
        <Text tone="muted">muted</Text>
        <Text tone="mute-light">mute-light</Text>
        <Text tone="link" as="span">link</Text>
        <Text tone="danger">danger</Text>
      </div>
    </div>
  );
}
