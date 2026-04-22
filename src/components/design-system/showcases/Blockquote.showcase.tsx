import { Blockquote } from "@/components/atoms/feedback/Blockquote";
export default function Showcase() {
  return (
    <div className="flex flex-col gap-md max-w-col-lg">
      <Blockquote>안내문</Blockquote>
      <Blockquote>
        비밀번호는 8자 이상, 영문·숫자·특수문자를 조합해 입력해주세요.
      </Blockquote>
    </div>
  );
}
