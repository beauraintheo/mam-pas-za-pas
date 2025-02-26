import { Feedback } from "@/components/ui/Feedback.tsx";
import { feedbacksMapping } from "@/utils/mapping.ts";

export const Feedbacks = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-custom-gradient p-10 gap-20">
      <h1 className="text-center">
        Ce que les
        <span className="color-title text-highlight"> parents </span>
        en disent
      </h1>

      <div className="flex gap-16">
        {
          feedbacksMapping.map((feedback, index) => (
            <Feedback key={index} {...feedback} />
          ))
        }
      </div>
    </div>
  );
};
