/**
 * Design System Registry
 * ─────────────────────────────────────────────────────────────────
 * 새 컴포넌트를 디자인 가이드에 노출하려면:
 *   1) src/components/atoms/<group>/<Component>.tsx 작성
 *   2) src/components/design-system/showcases/<Component>.showcase.tsx 작성
 *      → default export 로 미리보기 JSX 반환
 *   3) 아래 `entries` 배열에 한 줄 추가
 *
 * 카테고리(category)는 Atomic Design 단위로 관리:
 *   atoms / molecules / organisms / templates
 */

import { ComponentType, lazy } from "react";

export type DSCategory = "atoms" | "molecules" | "organisms" | "templates";

export interface DSEntry {
  /** 컴포넌트 이름 (페이지 표시용) */
  name: string;
  /** 그룹: buttons / inputs / typography / feedback / data-display 등 */
  group: string;
  /** Atomic 단계 */
  category: DSCategory;
  /** 한 줄 설명 */
  description: string;
  /** 미리보기 컴포넌트 (lazy) */
  Showcase: ComponentType;
}

/**
 * 컴포넌트 목록
 * — 새 컴포넌트 추가 시 여기에 한 줄만 더하면 됨
 */
export const dsRegistry: DSEntry[] = [
  // ─── Atoms / Buttons ──────────────────────────────────────────────
  {
    name: "BtnCustom",
    group: "Buttons",
    category: "atoms",
    description: "Primary 채움 버튼 (Sky). md / sm / xs 사이즈.",
    Showcase: lazy(() => import("./showcases/BtnCustom.showcase")),
  },
  {
    name: "BtnSecondary",
    group: "Buttons",
    category: "atoms",
    description: "Secondary 채움 버튼 (Purple).",
    Showcase: lazy(() => import("./showcases/BtnSecondary.showcase")),
  },
  {
    name: "BtnDanger",
    group: "Buttons",
    category: "atoms",
    description: "Red 채움 버튼 (sm / xs 전용).",
    Showcase: lazy(() => import("./showcases/BtnDanger.showcase")),
  },
  {
    name: "BtnDefault",
    group: "Buttons",
    category: "atoms",
    description: "Gray 아웃라인 기본 버튼.",
    Showcase: lazy(() => import("./showcases/BtnDefault.showcase")),
  },
  {
    name: "BtnRedLine",
    group: "Buttons",
    category: "atoms",
    description: "Red 아웃라인 버튼.",
    Showcase: lazy(() => import("./showcases/BtnRedLine.showcase")),
  },
  {
    name: "BtnTealLine",
    group: "Buttons",
    category: "atoms",
    description: "Teal 아웃라인 버튼.",
    Showcase: lazy(() => import("./showcases/BtnTealLine.showcase")),
  },
  {
    name: "BtnWithIcon",
    group: "Buttons",
    category: "atoms",
    description: "왼쪽 아이콘 + 텍스트 버튼.",
    Showcase: lazy(() => import("./showcases/BtnWithIcon.showcase")),
  },
  {
    name: "BtnRounded",
    group: "Buttons",
    category: "atoms",
    description: "Pill 모양 버튼 (black / gray).",
    Showcase: lazy(() => import("./showcases/BtnRounded.showcase")),
  },
  {
    name: "BtnPlus",
    group: "Buttons",
    category: "atoms",
    description: "24×24 + 아이콘 버튼.",
    Showcase: lazy(() => import("./showcases/BtnPlus.showcase")),
  },
  {
    name: "BtnDelete",
    group: "Buttons",
    category: "atoms",
    description: "24×24 X 삭제 버튼 (Red).",
    Showcase: lazy(() => import("./showcases/BtnDelete.showcase")),
  },

  // ─── Atoms / Inputs ───────────────────────────────────────────────
  {
    name: "FormInput",
    group: "Inputs",
    category: "atoms",
    description: "텍스트 입력 필드 (md / sm).",
    Showcase: lazy(() => import("./showcases/FormInput.showcase")),
  },
  {
    name: "FormDropdown",
    group: "Inputs",
    category: "atoms",
    description: "셀렉트 드롭다운 (md / sm).",
    Showcase: lazy(() => import("./showcases/FormDropdown.showcase")),
  },
  {
    name: "FormField",
    group: "Inputs",
    category: "atoms",
    description: "라벨 + 입력 + 에러/힌트 래퍼.",
    Showcase: lazy(() => import("./showcases/FormField.showcase")),
  },

  // ─── Atoms / Typography ───────────────────────────────────────────
  {
    name: "Heading",
    group: "Typography",
    category: "atoms",
    description: "H1~H5 시맨틱 타이틀.",
    Showcase: lazy(() => import("./showcases/Heading.showcase")),
  },
  {
    name: "Text",
    group: "Typography",
    category: "atoms",
    description: "Body 텍스트 (xs ~ xl, tone 옵션).",
    Showcase: lazy(() => import("./showcases/Text.showcase")),
  },

  // ─── Atoms / Controls ─────────────────────────────────────────────
  {
    name: "Tab",
    group: "Controls",
    category: "atoms",
    description: "탭 메뉴 아이템 + TabGroup 래퍼.",
    Showcase: lazy(() => import("./showcases/Tab.showcase")),
  },
  {
    name: "Radio",
    group: "Controls",
    category: "atoms",
    description: "라디오 버튼 (17×17, label 옵션).",
    Showcase: lazy(() => import("./showcases/Radio.showcase")),
  },
  {
    name: "CheckBox",
    group: "Controls",
    category: "atoms",
    description: "체크박스 (17×17, label 옵션).",
    Showcase: lazy(() => import("./showcases/CheckBox.showcase")),
  },
  {
    name: "Switch",
    group: "Controls",
    category: "atoms",
    description: "토글 스위치 (34×20).",
    Showcase: lazy(() => import("./showcases/Switch.showcase")),
  },

  // ─── Atoms / Data Display ─────────────────────────────────────────
  {
    name: "Label",
    group: "Data Display",
    category: "atoms",
    description: "작은 라벨 칩 (square / round).",
    Showcase: lazy(() => import("./showcases/Label.showcase")),
  },
  {
    name: "ProjectStatus",
    group: "Data Display",
    category: "atoms",
    description: "프로젝트 상태 배지 (온보딩/이용중/이용완료).",
    Showcase: lazy(() => import("./showcases/ProjectStatus.showcase")),
  },
  {
    name: "TypeLabel",
    group: "Data Display",
    category: "atoms",
    description: "발송 유형 배지 (즉시/예약/트리거).",
    Showcase: lazy(() => import("./showcases/TypeLabel.showcase")),
  },
  {
    name: "ActionStatus",
    group: "Data Display",
    category: "atoms",
    description: "액션 결과 배지 (성공/대기/완료/실패).",
    Showcase: lazy(() => import("./showcases/ActionStatus.showcase")),
  },
  {
    name: "OnboardingStatus",
    group: "Data Display",
    category: "atoms",
    description: "온보딩 단계 상태 배지 (테두리형).",
    Showcase: lazy(() => import("./showcases/OnboardingStatus.showcase")),
  },
  {
    name: "InquiryStatus",
    group: "Data Display",
    category: "atoms",
    description: "문의 상태 배지 (접수/완료/임시저장).",
    Showcase: lazy(() => import("./showcases/InquiryStatus.showcase")),
  },

  // ─── Atoms / Feedback ─────────────────────────────────────────────
  {
    name: "Blockquote",
    group: "Feedback",
    category: "atoms",
    description: "노란 배경 안내문.",
    Showcase: lazy(() => import("./showcases/Blockquote.showcase")),
  },

  // ─── Molecules / Data Table ───────────────────────────────────────
  {
    name: "DataTable",
    group: "Data Table",
    category: "molecules",
    description: "테이블 패밀리 (Header/Body/Row/Head/Cell/Empty).",
    Showcase: lazy(() => import("./showcases/DataTable.showcase")),
  },
];

/** 카테고리 → 그룹 → 엔트리 트리 구조로 변환 */
export function buildTree(entries: DSEntry[]) {
  const tree: Record<string, Record<string, DSEntry[]>> = {};
  for (const e of entries) {
    tree[e.category] ??= {};
    tree[e.category][e.group] ??= [];
    tree[e.category][e.group].push(e);
  }
  return tree;
}
