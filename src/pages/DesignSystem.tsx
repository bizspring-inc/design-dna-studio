/**
 * Design System 가이드 페이지
 * — registry 기반 자동 사이드바 + 컴포넌트 미리보기
 */
import { Suspense, useMemo, useState } from "react";
import { dsRegistry, buildTree, type DSCategory } from "@/components/design-system/registry";
import TokensShowcase from "@/components/design-system/TokensShowcase";
import { Heading } from "@/components/atoms/typography/Heading";
import { Text } from "@/components/atoms/typography/Text";
import { cn } from "@/lib/utils";

const CATEGORY_LABEL: Record<DSCategory | "tokens", string> = {
  tokens: "Design Tokens",
  atoms: "Atoms",
  molecules: "Molecules",
  organisms: "Organisms",
  templates: "Templates",
};

type Section =
  | { type: "tokens" }
  | { type: "category"; category: DSCategory; group?: string };

const DesignSystem = () => {
  const tree = useMemo(() => buildTree(dsRegistry), []);
  const [search, setSearch] = useState("");
  const [section, setSection] = useState<Section>({ type: "tokens" });

  const filtered = useMemo(() => {
    if (!search.trim()) return dsRegistry;
    const q = search.toLowerCase();
    return dsRegistry.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.group.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q),
    );
  }, [search]);

  const isActive = (s: Section) => {
    if (s.type === "tokens") return section.type === "tokens";
    if (section.type !== "category") return false;
    return section.category === s.category && section.group === s.group;
  };

  return (
    <div className="min-h-screen bg-surface-body">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-surface-white border-b border-border">
        <div className="mx-auto max-w-container px-lg py-md flex items-center justify-between gap-md">
          <div className="flex flex-col">
            <Heading level={4} className="font-semibold">Growth Platform</Heading>
            <Text size="xs" tone="muted">Design System · Atomic Components</Text>
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="컴포넌트 검색…"
            className={cn(
              "h-field-sm w-col-sm px-ph-12 rounded-sm border border-border bg-surface-white",
              "text-body-sm text-foreground placeholder:text-font-mute-dark",
              "outline-none focus:border-border-black transition-colors",
            )}
          />
        </div>
      </header>

      <div className="mx-auto max-w-container px-lg py-lg flex gap-lg">
        {/* Sidebar */}
        <aside className="w-col-sm shrink-0 sticky top-[88px] self-start max-h-[calc(100vh-110px)] overflow-y-auto">
          <nav className="flex flex-col gap-lg">
            {/* Tokens */}
            <div>
              <Text size="xs" tone="muted" className="px-sm py-xs uppercase tracking-wider font-semibold">
                Foundation
              </Text>
              <button
                onClick={() => setSection({ type: "tokens" })}
                className={cn(
                  "w-full text-left px-sm py-xs rounded-xs text-body-sm transition-colors",
                  isActive({ type: "tokens" })
                    ? "bg-surface-sky text-sky-dark font-medium"
                    : "text-foreground hover:bg-surface-gray",
                )}
              >
                Design Tokens
              </button>
            </div>

            {/* Categories */}
            {(Object.keys(tree) as DSCategory[]).map((cat) => (
              <div key={cat}>
                <Text size="xs" tone="muted" className="px-sm py-xs uppercase tracking-wider font-semibold">
                  {CATEGORY_LABEL[cat]}
                </Text>
                <div className="flex flex-col gap-2xs">
                  <button
                    onClick={() => setSection({ type: "category", category: cat })}
                    className={cn(
                      "w-full text-left px-sm py-xs rounded-xs text-body-sm transition-colors",
                      isActive({ type: "category", category: cat })
                        ? "bg-surface-sky text-sky-dark font-medium"
                        : "text-foreground hover:bg-surface-gray",
                    )}
                  >
                    All ({Object.values(tree[cat]).flat().length})
                  </button>
                  {Object.keys(tree[cat]).map((group) => (
                    <button
                      key={group}
                      onClick={() => setSection({ type: "category", category: cat, group })}
                      className={cn(
                        "w-full text-left pl-md pr-sm py-xs rounded-xs text-body-sm transition-colors",
                        isActive({ type: "category", category: cat, group })
                          ? "bg-surface-sky text-sky-dark font-medium"
                          : "text-font-mute-dark hover:bg-surface-gray hover:text-foreground",
                      )}
                    >
                      {group} <span className="text-font-mute-light">({tree[cat][group].length})</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {search.trim() ? (
            <SearchResults entries={filtered} />
          ) : section.type === "tokens" ? (
            <PageContainer title="Design Tokens" subtitle="모든 디자인 결정의 단일 출처">
              <TokensShowcase />
            </PageContainer>
          ) : (
            <CategoryView
              category={section.category}
              group={section.group}
              tree={tree}
            />
          )}
        </main>
      </div>
    </div>
  );
};

function PageContainer({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-lg">
      <header className="flex flex-col gap-xs pb-md border-b border-border">
        <Heading level={2}>{title}</Heading>
        {subtitle && <Text tone="muted">{subtitle}</Text>}
      </header>
      <div>{children}</div>
    </div>
  );
}

function CategoryView({
  category,
  group,
  tree,
}: {
  category: DSCategory;
  group?: string;
  tree: ReturnType<typeof buildTree>;
}) {
  const groupsToRender = group ? { [group]: tree[category][group] } : tree[category];
  return (
    <PageContainer
      title={CATEGORY_LABEL[category]}
      subtitle={group ? `${group} 그룹` : "이 카테고리의 모든 컴포넌트"}
    >
      <div className="flex flex-col gap-2xl">
        {Object.entries(groupsToRender).map(([gname, entries]) => (
          <section key={gname} className="flex flex-col gap-md">
            <Heading level={3}>{gname}</Heading>
            <div className="grid grid-cols-1 gap-md">
              {entries.map((e) => (
                <ComponentCard key={e.name} entry={e} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}

function SearchResults({ entries }: { entries: typeof dsRegistry }) {
  return (
    <PageContainer title="Search Results" subtitle={`${entries.length}개 컴포넌트`}>
      <div className="flex flex-col gap-md">
        {entries.length === 0 ? (
          <Text tone="muted">검색 결과가 없습니다.</Text>
        ) : (
          entries.map((e) => <ComponentCard key={e.name} entry={e} />)
        )}
      </div>
    </PageContainer>
  );
}

function ComponentCard({ entry }: { entry: (typeof dsRegistry)[number] }) {
  const { name, description, group, category, Showcase } = entry;
  return (
    <article className="bg-surface-white border border-border rounded-md overflow-hidden">
      <header className="flex items-start justify-between gap-md px-lg py-md border-b border-border-extra-light">
        <div className="flex flex-col gap-2xs">
          <div className="flex items-center gap-sm">
            <Heading level={4}>{name}</Heading>
            <span className="px-ph-6 py-pv-1 text-tag rounded-xs bg-surface-gray text-font-mute-dark font-mono">
              {category}/{group}
            </span>
          </div>
          <Text size="sm" tone="muted">{description}</Text>
        </div>
      </header>
      <div className="p-lg bg-surface-gray-light">
        <Suspense fallback={<Text size="sm" tone="muted">Loading…</Text>}>
          <Showcase />
        </Suspense>
      </div>
    </article>
  );
}

export default DesignSystem;
