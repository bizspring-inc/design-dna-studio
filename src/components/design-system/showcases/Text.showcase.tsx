import { Text } from "@/components/atoms/typography/Text";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-sm">
      <Text size="xl">Body XL — 1.125rem (18px) / 170%</Text>
      <Text size="lg">Body LG — 0.9375rem (15px) / 160%</Text>
      <Text size="md">Body MD — 0.875rem (14px) / 160% (default)</Text>
      <Text size="sm">Body SM — 0.8125rem (13px) / 145%</Text>
      <Text size="xs">Body XS — 0.75rem (12px) / 145%</Text>
      <div className="flex flex-wrap gap-md pt-sm">
        <Text tone="muted">muted</Text>
        <Text tone="mute-light">mute-light</Text>
        <Text tone="link" as="span">link</Text>
        <Text tone="danger">danger</Text>
      </div>
    </div>
  );
}
