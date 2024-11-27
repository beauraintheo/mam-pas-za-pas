import type { AssmatProps } from "@/utils/types.ts";

export const Assmat = ({
  mainColor,
  icon,
  title,
  description,
}: AssmatProps) => {
  const assmatClass = mainColor === "primary"
    ? "text-color-primary"
    : mainColor === "secondary"
      ? "text-color-secondary"
      : mainColor === "highlight"
        ? "text-color-highlight"
        : "";

  return (
    <div
      className={`flex max-w-[600px] flex-col items-center justify-start gap-5 lg:max-w-[415px] ${assmatClass}`}
    >
      <img
        src={icon}
        alt="Assistante maternelle"
        className="max-h-[313px] w-fit"
      />

      <h2 dangerouslySetInnerHTML={{ __html: title }} />

      <span
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
