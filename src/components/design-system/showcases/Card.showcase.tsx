import { Card } from "@/components/atoms/surfaces/Card";
import { Text } from "@/components/atoms/typography/Text";

const sizes = [
  { padding: "sm" as const, label: "padding=sm (8px)" },
  { padding: "md" as const, label: "padding=md (16px)" },
  { padding: "lg" as const, label: "padding=lg (24px)" },
  { padding: "xl" as const, label: "padding=xl (32px)" },
];

export default function Showcase() {
  return (
    <div className="flex flex-col gap-md">
      {sizes.map((s) => (
        <Card key={s.padding} padding={s.padding}>
          <Text size="sm">{s.label} — radius=sm, border=border-default</Text>
        </Card>
      ))}
    </div>
  );
}
