import { useState } from "react";
import { useMediaQuery } from "@mui/material";

import { ArrowDown } from "@/assets/components/ArrowDown.tsx";
import { colorMapping } from "@/utils/mapping.ts";
import type { CardProps } from "@/utils/types.ts";

export const Card = ({
  mainColor,
  icon,
  title,
  subtitle,
  description,
}: CardProps) => {
  const [ isExpanded, setIsExpanded ] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const cardClass = mainColor === "primary"
    ? "card-primary"
    : mainColor === "secondary"
      ? "card-secondary"
      : mainColor === "highlight"
        ? "card-highlight"
        : "";

  return (
    <div className={`aaaaa flex w-full max-w-lg flex-col items-center justify-start gap-3 rounded-3xl border border-dashed px-8 py-8 lg:w-1/3 ${cardClass}`}>
      <div className="flex h-48 w-48 items-center justify-center rounded-full bg-lightIcon">
        <img src={icon} alt="Card icon" />
      </div>

      <h2 dangerouslySetInnerHTML={{ __html: title }} />

      <div
        className="flex cursor-pointer items-center justify-between gap-3"
        onClick={() => !isDesktop && setIsExpanded(!isExpanded)}
      >
        <span className="font-regular">{subtitle}</span>

        <div className={`expand-arrow flex h-5 w-5 items-center justify-center rounded-full pt-0.5 transition-transform duration-500 ${!isDesktop && isExpanded ? "rotate-180" : "rotate-0"}`}>
          <ArrowDown color={colorMapping[mainColor]} />
        </div>
      </div>

      <span className={`overflow-hidden font-regular transition-all duration-500 ease-in-out lg:text-justify ${isDesktop ? "max-h-full opacity-100" : isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        {description}
      </span>
    </div>
  );
};
