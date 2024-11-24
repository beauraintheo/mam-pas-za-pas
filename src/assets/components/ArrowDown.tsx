import type { IconProps } from "@/utils/types.ts";

export const ArrowDown = ({ color }: IconProps) => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.0501709" y="0.933838" width="1.29262" height="6.78638" rx="0.646309" transform="rotate(-45 0.0501709 0.933838)" fill={color} />
    <rect x="8.89355" y="0.0197754" width="1.29262" height="6.78638" rx="0.646309" transform="rotate(45 8.89355 0.0197754)" fill={color} />
  </svg>
);
