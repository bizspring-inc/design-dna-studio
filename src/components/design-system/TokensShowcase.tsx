/**
 * Tokens Showcase — 디자인 토큰 시각화 (색상/타이포/간격/라운드/그림자)
 *
 * ⚠️ Tailwind는 정적 스캔 방식이므로 `bg-${name}` 같은 동적 클래스를 인식하지 못한다.
 *    따라서 모든 컬러 클래스는 아래에 "정적 문자열 리터럴"로 명시.
 *    새 색상 추가 시 이 파일에도 명시적으로 한 줄씩 추가해야 함.
 */
import { Heading } from "@/components/atoms/typography/Heading";
import { Text } from "@/components/atoms/typography/Text";

interface ColorEntry {
  cls: string;   // bg-* 클래스 (정적 리터럴)
  label: string; // 표시 이름
  token: string; // 토큰명
  textCls?: string; // 라벨 가독성용 보조
}

// ─── Semantic ────────────────────────────────────────────────────────
const semantics: ColorEntry[] = [
  { cls: "bg-primary",       label: "Primary",     token: "bg-primary" },
  { cls: "bg-secondary",     label: "Secondary",   token: "bg-secondary" },
  { cls: "bg-tertiary",      label: "Tertiary",    token: "bg-tertiary" },
  { cls: "bg-destructive",   label: "Destructive", token: "bg-destructive" },
  { cls: "bg-foreground",    label: "Foreground",  token: "bg-foreground" },
  { cls: "bg-muted",         label: "Muted",       token: "bg-muted" },
  { cls: "bg-accent",        label: "Accent",      token: "bg-accent" },
  { cls: "bg-border",        label: "Border",      token: "bg-border" },
];

// ─── Surfaces ────────────────────────────────────────────────────────
const surfaces: ColorEntry[] = [
  { cls: "bg-surface-white",      label: "white",       token: "surface-white" },
  { cls: "bg-surface-gray-light", label: "gray-light",  token: "surface-gray-light" },
  { cls: "bg-surface-gray",       label: "gray",        token: "surface-gray" },
  { cls: "bg-surface-body",       label: "body",        token: "surface-body" },
  { cls: "bg-surface-sky-bg",     label: "sky-bg",      token: "surface-sky-bg" },
  { cls: "bg-surface-sky",        label: "sky",         token: "surface-sky" },
  { cls: "bg-surface-purple",     label: "purple",      token: "surface-purple" },
  { cls: "bg-surface-teal",       label: "teal",        token: "surface-teal" },
  { cls: "bg-surface-blue",       label: "blue",        token: "surface-blue" },
  { cls: "bg-surface-yellow",     label: "yellow",      token: "surface-yellow" },
  { cls: "bg-surface-red",        label: "red",         token: "surface-red" },
  { cls: "bg-surface-black",      label: "black",       token: "surface-black" },
];

// ─── Grayscale ───────────────────────────────────────────────────────
const grayscale: ColorEntry[] = [
  { cls: "bg-grayscale-50",  label: "50",  token: "grayscale-50" },
  { cls: "bg-grayscale-100", label: "100", token: "grayscale-100" },
  { cls: "bg-grayscale-150", label: "150", token: "grayscale-150" },
  { cls: "bg-grayscale-200", label: "200", token: "grayscale-200" },
  { cls: "bg-grayscale-300", label: "300", token: "grayscale-300" },
  { cls: "bg-grayscale-400", label: "400", token: "grayscale-400" },
  { cls: "bg-grayscale-500", label: "500", token: "grayscale-500" },
  { cls: "bg-grayscale-600", label: "600", token: "grayscale-600" },
  { cls: "bg-grayscale-700", label: "700", token: "grayscale-700" },
  { cls: "bg-grayscale-800", label: "800", token: "grayscale-800" },
  { cls: "bg-grayscale-900", label: "900", token: "grayscale-900" },
];

// ─── Color Scales ────────────────────────────────────────────────────
const sky: ColorEntry[] = [
  { cls: "bg-sky-light-xl",     label: "light-xl",     token: "sky-light-xl" },
  { cls: "bg-sky-light",        label: "light",        token: "sky-light" },
  { cls: "bg-sky-light-hover",  label: "light-hover",  token: "sky-light-hover" },
  { cls: "bg-sky-light-active", label: "light-active", token: "sky-light-active" },
  { cls: "bg-sky",              label: "DEFAULT",      token: "sky" },
  { cls: "bg-sky-hover",        label: "hover",        token: "sky-hover" },
  { cls: "bg-sky-dark",         label: "dark",         token: "sky-dark" },
  { cls: "bg-sky-dark-hover",   label: "dark-hover",   token: "sky-dark-hover" },
  { cls: "bg-sky-dark-active",  label: "dark-active",  token: "sky-dark-active" },
  { cls: "bg-sky-darker",       label: "darker",       token: "sky-darker" },
];

const purple: ColorEntry[] = [
  { cls: "bg-purple-light",        label: "light",        token: "purple-light" },
  { cls: "bg-purple-light-hover",  label: "light-hover",  token: "purple-light-hover" },
  { cls: "bg-purple-light-active", label: "light-active", token: "purple-light-active" },
  { cls: "bg-purple",              label: "DEFAULT",      token: "purple" },
  { cls: "bg-purple-hover",        label: "hover",        token: "purple-hover" },
  { cls: "bg-purple-dark",         label: "dark",         token: "purple-dark" },
  { cls: "bg-purple-dark-hover",   label: "dark-hover",   token: "purple-dark-hover" },
  { cls: "bg-purple-dark-active",  label: "dark-active",  token: "purple-dark-active" },
  { cls: "bg-purple-darker",       label: "darker",       token: "purple-darker" },
];

const teal: ColorEntry[] = [
  { cls: "bg-teal-light",        label: "light",        token: "teal-light" },
  { cls: "bg-teal-light-hover",  label: "light-hover",  token: "teal-light-hover" },
  { cls: "bg-teal-light-active", label: "light-active", token: "teal-light-active" },
  { cls: "bg-teal",              label: "DEFAULT",      token: "teal" },
  { cls: "bg-teal-hover",        label: "hover",        token: "teal-hover" },
  { cls: "bg-teal-dark",         label: "dark",         token: "teal-dark" },
  { cls: "bg-teal-dark-hover",   label: "dark-hover",   token: "teal-dark-hover" },
  { cls: "bg-teal-dark-active",  label: "dark-active",  token: "teal-dark-active" },
  { cls: "bg-teal-darker",       label: "darker",       token: "teal-darker" },
];

const blue: ColorEntry[] = [
  { cls: "bg-blue-light",        label: "light",        token: "blue-light" },
  { cls: "bg-blue-light-hover",  label: "light-hover",  token: "blue-light-hover" },
  { cls: "bg-blue-light-active", label: "light-active", token: "blue-light-active" },
  { cls: "bg-blue",              label: "DEFAULT",      token: "blue" },
  { cls: "bg-blue-hover",        label: "hover",        token: "blue-hover" },
  { cls: "bg-blue-dark",         label: "dark",         token: "blue-dark" },
];

const yellow: ColorEntry[] = [
  { cls: "bg-yellow-light",        label: "light",        token: "yellow-light" },
  { cls: "bg-yellow-light-hover",  label: "light-hover",  token: "yellow-light-hover" },
  { cls: "bg-yellow-light-active", label: "light-active", token: "yellow-light-active" },
  { cls: "bg-yellow",              label: "DEFAULT",      token: "yellow" },
  { cls: "bg-yellow-hover",        label: "hover",        token: "yellow-hover" },
  { cls: "bg-yellow-dark",         label: "dark",         token: "yellow-dark" },
];

const red: ColorEntry[] = [
  { cls: "bg-red-light",        label: "light",        token: "red-light" },
  { cls: "bg-red-light-hover",  label: "light-hover",  token: "red-light-hover" },
  { cls: "bg-red-light-active", label: "light-active", token: "red-light-active" },
  { cls: "bg-red",              label: "DEFAULT",      token: "red" },
  { cls: "bg-red-hover",        label: "hover",        token: "red-hover" },
  { cls: "bg-red-dark",         label: "dark",         token: "red-dark" },
];

const palettes: { name: string; entries: ColorEntry[] }[] = [
  { name: "Grayscale", entries: grayscale },
  { name: "Sky (Primary)", entries: sky },
  { name: "Purple (Secondary)", entries: purple },
  { name: "Teal (Tertiary)", entries: teal },
  { name: "Blue", entries: blue },
  { name: "Yellow", entries: yellow },
  { name: "Red", entries: red },
];

// ─── Spacing / Radius ────────────────────────────────────────────────
const spacings = [
  ["2xs", "2px"], ["xs", "4px"], ["sm", "8px"], ["md", "16px"],
  ["lg", "24px"], ["xl", "32px"], ["2xl", "48px"], ["3xl", "64px"],
] as const;

// 라디우스: 정적 클래스 + 값 동시 명시
const radii: { name: string; cls: string; value: string }[] = [
  { name: "xs", cls: "rounded-xs", value: "3px" },
  { name: "sm", cls: "rounded-sm", value: "4px" },
  { name: "md", cls: "rounded-md", value: "8px" },
  { name: "lg", cls: "rounded-lg", value: "12px" },
  { name: "xl", cls: "rounded-xl", value: "16px" },
];

// ─── Components ──────────────────────────────────────────────────────
function ColorChip({ entry }: { entry: ColorEntry }) {
  return (
    <div className="flex flex-col gap-xs">
      <div
        className={`h-2xl w-full rounded-sm border border-border-extra-light ${entry.cls}`}
      />
      <Text size="xs" className="font-medium">{entry.label}</Text>
      <Text size="xs" tone="muted" className="font-mono break-all">{entry.token}</Text>
    </div>
  );
}

function ColorGrid({ entries }: { entries: ColorEntry[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-md">
      {entries.map((e) => (
        <ColorChip key={e.token} entry={e} />
      ))}
    </div>
  );
}

function RuleCard({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="flex flex-col gap-sm p-lg bg-surface-white border border-border rounded-md">
      <Text size="sm" className="font-semibold">{title}</Text>
      <ul className="flex flex-col gap-xs">
        {rows.map(([token, desc]) => (
          <li key={token} className="flex items-center gap-sm">
            <span className="px-ph-6 py-pv-1 text-tag rounded-xs bg-surface-gray text-foreground font-mono shrink-0">
              {token}
            </span>
            <Text size="sm" tone="muted">{desc}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TokensShowcase() {
  return (
    <div className="flex flex-col gap-2xl">
      {/* Semantic */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Semantic Colors</Heading>
        <Text size="sm" tone="muted">
          shadcn 호환 시맨틱 토큰. 컴포넌트는 가능한 이 토큰을 사용한다.
        </Text>
        <ColorGrid entries={semantics} />
      </section>

      {/* Surfaces */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Surface Colors</Heading>
        <Text size="sm" tone="muted">
          배경 표면용 토큰. 카드/패널/Notice 영역에 사용.
        </Text>
        <ColorGrid entries={surfaces} />
      </section>

      {/* Color scales */}
      <section className="flex flex-col gap-lg">
        <Heading level={3}>Color Palette</Heading>
        {palettes.map((p) => (
          <div key={p.name} className="flex flex-col gap-sm">
            <Text size="sm" className="font-semibold">{p.name}</Text>
            <ColorGrid entries={p.entries} />
          </div>
        ))}
      </section>

      {/* Typography */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Typography</Heading>
        <Text size="sm" tone="muted">
          1rem = 16px 기준. 모든 폰트 사이즈는 rem 단위로 정의되어 사용자 브라우저 설정에 따라 스케일됩니다.
        </Text>
        <div className="flex flex-col gap-sm p-lg bg-surface-white border border-border rounded-md">
          <Heading level={1}>Heading 1 — 2.25rem (36px)</Heading>
          <Heading level={2}>Heading 2 — 1.5rem (24px)</Heading>
          <Heading level={3}>Heading 3 — 1.3125rem (21px)</Heading>
          <Heading level={4}>Heading 4 — 1.125rem (18px)</Heading>
          <Heading level={5}>Heading 5 — 1rem (16px)</Heading>
          <Text size="xl">Body XL — 1.125rem (18px)</Text>
          <Text size="lg">Body LG — 0.9375rem (15px)</Text>
          <Text size="md">Body MD — 0.875rem (14px)</Text>
          <Text size="sm">Body SM — 0.8125rem (13px)</Text>
          <Text size="xs">Body XS — 0.75rem (12px)</Text>
        </div>
      </section>

      {/* Spacing */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Spacing</Heading>
        <Text size="sm" tone="muted">
          padding · margin · gap 모든 여백은 아래 토큰만 사용합니다. 임의의 px 값은 금지.
        </Text>
        <div className="flex flex-col gap-sm p-lg bg-surface-white border border-border rounded-md">
          {spacings.map(([name, value]) => (
            <div key={name} className="flex items-center gap-md">
              <Text size="sm" className="w-16 font-mono">{name}</Text>
              <div className="h-md bg-primary rounded-xs" style={{ width: value }} />
              <Text size="xs" tone="muted">{value}</Text>
            </div>
          ))}
        </div>
      </section>

      {/* Layout Spacing Rules */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Layout Spacing Rules</Heading>
        <Text size="sm" tone="muted">
          여백은 용도별 토큰 규칙에 따라 적용합니다. 컴포넌트 내부와 레이아웃 외부 여백을 분리하여 일관된 리듬을 유지합니다.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <RuleCard title="Page / Section" rows={[
            ["px-lg", "페이지 좌우 여백 (24px)"],
            ["py-lg", "페이지 상하 여백 (24px)"],
            ["gap-2xl", "섹션 간 간격 (48px)"],
            ["gap-lg", "섹션 내 그룹 간격 (24px)"],
          ]} />
          <RuleCard title="Card / Panel" rows={[
            ["p-md", "기본 카드 내부 여백 (16px)"],
            ["p-lg", "강조 카드 내부 여백 (24px)"],
            ["gap-md", "카드 내부 블록 간격 (16px)"],
            ["gap-sm", "카드 내부 텍스트 간격 (8px)"],
          ]} />
          <RuleCard title="Form / Field" rows={[
            ["gap-md", "필드 그룹 세로 간격 (16px)"],
            ["gap-xs", "라벨 ↔ 입력 간격 (4px)"],
            ["px-ph-12", "입력 가로 패딩 (12px)"],
            ["py-pv-6", "입력 세로 패딩 (6px)"],
          ]} />
          <RuleCard title="Inline / Control" rows={[
            ["gap-sm", "버튼 그룹 가로 간격 (8px)"],
            ["gap-xs", "아이콘 ↔ 라벨 간격 (4px)"],
            ["px-md", "버튼 가로 패딩 md (16px)"],
            ["px-ph-6", "버튼 가로 패딩 xs (6px)"],
          ]} />
        </div>

        <div className="flex flex-col gap-xs p-lg bg-surface-sky-bg border border-border-extra-light rounded-md">
          <Text size="sm" className="font-semibold">원칙</Text>
          <ul className="flex flex-col gap-2xs list-disc pl-md">
            <li><Text size="sm">컨테이너 사이 간격은 <span className="font-mono">gap-*</span> 사용. 자식의 <span className="font-mono">margin</span>은 지양.</Text></li>
            <li><Text size="sm">내부 여백은 <span className="font-mono">padding</span>, 외부 정렬은 부모의 <span className="font-mono">gap</span>으로 분리.</Text></li>
            <li><Text size="sm">컨트롤(버튼·입력)은 전용 토큰 <span className="font-mono">px-ph-*</span>, <span className="font-mono">py-pv-*</span> 사용.</Text></li>
            <li><Text size="sm">레이아웃 여백 위계: <span className="font-mono">md(16) → lg(24) → xl(32) → 2xl(48)</span>.</Text></li>
          </ul>
        </div>
      </section>

      {/* Radius */}
      <section className="flex flex-col gap-md">
        <Heading level={3}>Border Radius</Heading>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-md p-lg bg-surface-white border border-border rounded-md">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-xs">
              <div className={`size-material-xl bg-primary ${r.cls}`} />
              <Text size="xs" className="font-mono">{r.name}</Text>
              <Text size="xs" tone="muted">{r.value}</Text>
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
