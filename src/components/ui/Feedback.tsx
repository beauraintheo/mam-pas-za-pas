import StarIcon from "@/assets/icons/star.svg";

import type { FeedbackProps } from "@/utils/types.ts";

export const Feedback = ({
  icon,
  stars,
  title,
  description,
}: FeedbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img
        className="max-w-48"
        src={icon}
        alt="Assmat"
      />

      <div className="flex items-center justify-center gap-5">
        {
          Array.from({ length: stars }, (_, index) => (
            <img
              className="py-4"
              key={index}
              src={StarIcon}
            />
          ))
        }
      </div>

      <h2 className="text-center">{title}</h2>
      <span className="text-justify">{description}</span>
    </div>
  );
};
