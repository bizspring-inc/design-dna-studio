import { Card } from "@/components/atoms/surfaces/Card";
import { Text } from "@/components/atoms/typography/Text";

const sizes = [
  { padding: "xs" as const, name: "Card xs", desc: "padding 4px" },
  { padding: "sm" as const, name: "Card sm", desc: "padding 8px" },
  { padding: "md" as const, name: "Card md", desc: "padding 16px" },
  { padding: "lg" as const, name: "Card lg", desc: "padding 24px" },
  { padding: "xl" as const, name: "Card xl", desc: "padding 32px" },
];

export default function Showcase() {
  return (
    <div className="flex flex-col gap-md">
      {sizes.map((s) => (
        <div key={s.padding} className="flex flex-col gap-xs">
          <Text size="sm" className="font-semibold">{s.name}</Text>
          <Card padding={s.padding}>
            <Text size="sm" tone="muted">{s.desc} · radius-sm · border-default</Text>
          </Card>
        </div>
      ))}
    </div>
  );
}
