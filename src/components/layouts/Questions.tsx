import { useState } from "react";
import { Button, useMediaQuery } from "@mui/material";

import QuestionsPicture from "@/assets/images/questions.webp";
import { DropdownQuestion } from "@/components/ui/DropdownQuestion.tsx";
import { questionsMapping } from "@/utils/mapping.ts";
import type { QuestionsProps } from "@/utils/types.ts";

const QuestionsList = () => {
  const [ questionOpen, setQuestionOpen ] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col gap-8">
      {
        questionsMapping.map(({ title, description }: QuestionsProps, index) => (
          <DropdownQuestion
            key={index}
            title={title}
            description={description}
            isOpen={questionOpen === index}
            onClick={() => setQuestionOpen(questionOpen === index ? null : index)}
          />
        ))
      }
    </div>
  );
};

const MoreQuestions = () => (
  <div className="flex flex-col items-center justify-center gap-8">
    <span className="text-center font-gloria text-24">
      D'autres questions ?
    </span>

    <Button variant="contained" className="button-secondary">
      Contactez-nous !
    </Button>
  </div>
);

export const Questions = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="m-auto mb-20 mt-20 flex w-full max-w-[1400px] flex-col items-center justify-center gap-10 px-8">
      <h1>
        Des
        <span className="color-title text-highlight"> questions</span>
        ?
      </h1>

      {
        !isDesktop
          ? (
            <>
              <img src={QuestionsPicture} alt="Questions" />
              <QuestionsList />
              <MoreQuestions />
            </>
            )
          : (
            <div className="flex w-full flex-row items-center justify-center">
              <QuestionsList />

              <div>
                <img src={QuestionsPicture} alt="Questions" />
                <MoreQuestions />
              </div>
            </div>
            )
        }
    </div>
  );
};
