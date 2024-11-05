import type { ReactNode } from "react";

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: ReactNode) => JSX.Element;
  children: ReactNode;
}

export const ConditionnalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => condition ? wrapper(children) : children;
