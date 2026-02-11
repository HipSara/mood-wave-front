declare module "@/components/FadeContent" {
  import { FC, ReactNode, CSSProperties } from "react";

  interface FadeContentProps {
    children?: ReactNode;
    container?: HTMLElement | string | null;
    blur?: boolean;
    duration?: number;
    ease?: string;
    delay?: number;
    threshold?: number;
    initialOpacity?: number;
    disappearAfter?: number;
    disappearDuration?: number;
    disappearEase?: string;
    onComplete?: () => void;
    onDisappearanceComplete?: () => void;
    className?: string;
    style?: CSSProperties;
  }

  const FadeContent: FC<FadeContentProps>;
  export default FadeContent;
}
