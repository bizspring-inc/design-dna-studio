/**
 * Index — 디자인 시스템 진입 랜딩
 */
import { Link } from "react-router-dom";
import { Heading } from "@/components/atoms/typography/Heading";
import { Text } from "@/components/atoms/typography/Text";
import { BtnCustom } from "@/components/atoms/buttons/BtnCustom";
import { BtnDefault } from "@/components/atoms/buttons/BtnDefault";
import { Label } from "@/components/atoms/data-display/Label";

const Index = () => {
  return (
    <div className="min-h-screen bg-surface-body">
      <div className="mx-auto max-w-container px-lg py-3xl">
        <div className="flex flex-col gap-lg max-w-col-xl">
          <Label variant="primary" shape="round">Design System v1</Label>
          <Heading level={1}>Growth Platform Design System</Heading>
          <Text size="lg" tone="muted">
            Atomic Design 기반의 확장 가능한 컴포넌트 라이브러리.
            모든 스타일은 토큰으로 중앙 관리되며, 새로운 컴포넌트는 registry에
            한 줄만 추가하면 자동으로 가이드에 노출됩니다.
          </Text>

          <div className="flex flex-wrap gap-md pt-md">
            <Link to="/design-system">
              <BtnCustom size="md">디자인 가이드 열기</BtnCustom>
            </Link>
            <a
              href="https://www.figma.com/design/hrWWk4V58qMzrrDD7Nhn3n/Growth-Platform-Component"
              target="_blank"
              rel="noreferrer"
            >
              <BtnDefault size="md">Figma에서 보기</BtnDefault>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-md pt-2xl">
            <FeatureCard
              title="토큰 중심"
              body="모든 색상·간격·라운드를 CSS 변수로 정의하고 Tailwind에 매핑."
            />
            <FeatureCard
              title="원자 단위"
              body="버튼/입력/타이포 등 가장 작은 단위부터 1파일 1컴포넌트로 분리."
            />
            <FeatureCard
              title="자동 등록"
              body="registry.ts에 한 줄 추가하면 가이드 페이지에 자동 노출."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-surface-white border border-border rounded-md p-lg flex flex-col gap-xs">
      <Heading level={5}>{title}</Heading>
      <Text size="sm" tone="muted">{body}</Text>
    </div>
  );
}

export default Index;
