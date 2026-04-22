/**
 * Tokens Showcase — 디자인 토큰 시각화 (색상/타이포/간격/라운드/그림자)
 */
import { Heading } from "@/components/atoms/typography/Heading";
import { Text } from "@/components/atoms/typography/Text";

const colorScales = [
  { name: "grayscale", shades: [50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: "sky",       shades: ["light-xl", "light", "light-hover", "light-active", "DEFAULT", "hover", "dark", "darker"] },
  { name: "purple",    shades: ["light", "light-hover", "light-active", "DEFAULT", "hover", "dark", "darker"] },
  { name: "teal",      shades: ["light", "light-hover", "light-active", "DEFAULT", "hover", "dark", "darker"] },
  { name: "blue",      shades: ["light", "light-hover", "light-active", "DEFAULT", "hover", "dark"] },
  { name: "yellow",    shades: ["light", "light-hover", "light-active", "DEFAULT", "hover", "dark"] },
  { name: "red",       shades: ["light", "light-hover", "light-active", "DEFAULT", "hover", "dark"] },
];

const semantics = [
  { token: "primary", label: "Primary" },
  { token: "secondary", label: "Secondary" },
  { token: "tertiary", label: "Tertiary" },
  { token: "destructive", label: "Destructive" },
  { token: "foreground", label: "Foreground" },
  { token: "muted", label: "Muted" },
  { token: "border", label: "Border" },
];

const spacings = [
  ["2xs", "2px"], ["xs", "4px"], ["sm", "8px"], ["md", "16px"],
  ["lg", "24px"], ["xl", "32px"], ["2xl", "48px"], ["3xl", "64px"],
] as const;

const radii = [
  ["xs", "3px"], ["sm", "4px"], ["md", "8px"], ["lg", "12px"], ["xl", "16px"],
] as const;

function ColorChip({ cls, label, sub }: { cls: string; label: string; sub: string }) {
  return (
    <div className="flex flex-col gap-xs">
      <div className={`h-xl w-full rounded-sm border border-border ${cls}`} />
      <Text size="xs" className="font-medium">{label}</Text>
      <Text size="xs" tone="muted">{sub}</Text>
    </div>
  );
}

export default function TokensShowcase() {
  return (
    <div className="flex flex-col gap-2xl">
      {/* Semantic */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Semantic Colors</Heading>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-md">
          {semantics.map((s) => (
            <ColorChip key={s.token} cls={`bg-${s.token}`} label={s.label} sub={`bg-${s.token}`} />
          ))}
        </div>
      </section>

      {/* Color scales */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Color Palette</Heading>
        {colorScales.map((scale) => (
          <div key={scale.name} className="flex flex-col gap-xs">
            <Text size="sm" className="font-semibold capitalize">{scale.name}</Text>
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-11 gap-xs">
              {scale.shades.map((shade) => {
                const cls =
                  shade === "DEFAULT"
                    ? `bg-${scale.name}`
                    : `bg-${scale.name}-${shade}`;
                return (
                  <ColorChip
                    key={`${scale.name}-${shade}`}
                    cls={cls}
                    label={String(shade)}
                    sub={cls.replace("bg-", "")}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Typography */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Typography</Heading>
        <div className="flex flex-col gap-sm p-md bg-surface-gray-light rounded-md">
          <Heading level={1}>Heading 1 — 36px</Heading>
          <Heading level={2}>Heading 2 — 24px</Heading>
          <Heading level={3}>Heading 3 — 21px</Heading>
          <Heading level={4}>Heading 4 — 18px</Heading>
          <Heading level={5}>Heading 5 — 16px</Heading>
          <Text size="xl">Body XL — 18px</Text>
          <Text size="lg">Body LG — 15px</Text>
          <Text size="md">Body MD — 14px</Text>
          <Text size="sm">Body SM — 13px</Text>
          <Text size="xs">Body XS — 12px</Text>
        </div>
      </section>

      {/* Spacing */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Spacing</Heading>
        <div className="flex flex-col gap-sm">
          {spacings.map(([name, value]) => (
            <div key={name} className="flex items-center gap-md">
              <Text size="sm" className="w-16 font-mono">{name}</Text>
              <div className={`h-md bg-primary rounded-xs`} style={{ width: value }} />
              <Text size="xs" tone="muted">{value}</Text>
            </div>
          ))}
        </div>
      </section>

      {/* Radius */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Border Radius</Heading>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-md">
          {radii.map(([name, value]) => (
            <div key={name} className="flex flex-col items-center gap-xs">
              <div className={`size-material-xl bg-primary rounded-${name}`} />
              <Text size="xs" className="font-mono">{name}</Text>
              <Text size="xs" tone="muted">{value}</Text>
            </div>
          ))}
        </div>
      </section>

      {/* Shadow */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Shadows</Heading>
        <div className="grid grid-cols-2 gap-md">
          <div className="p-lg bg-surface-white rounded-md shadow-sm">
            <Text size="sm" className="font-mono">shadow-sm</Text>
          </div>
          <div className="p-lg bg-surface-white rounded-md shadow-md">
            <Text size="sm" className="font-mono">shadow-md</Text>
          </div>
        </div>
      </section>
    </div>
  );
}
