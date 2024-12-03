import { useState } from "react";

import type { DropdownQuestionProps } from "@/utils/types.ts";

export const DropdownQuestion = ({
  title,
  description,
}: DropdownQuestionProps) => {
  const [ isOpen, setIsOpen ] = useState(true);

  const questionContainer = isOpen
    ? "text-white bg-secondary outline-secondary outline"
    : "text-black bg-white";

  const openButton = !isOpen ? "border border-black" : "";

  return (
    <div className="flex w-full flex-col rounded-l-2xl rounded-r-2xl bg-white outline outline-lightGray transition-colors duration-500 ease-in-out">
      <div
        className={`z-10 flex items-center justify-between rounded-2xl p-4 lg:p-8 ${questionContainer} transition-colors duration-500 ease-in-out`}
      >
        <span>{title}</span>

        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-white pb-1 text-32 text-black ${!isOpen ? "border border-black" : ""} transition-colors duration-500 ease-in-out`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </div>
      </div>

      <div
        className={`transition-all ${isOpen ? "duration-500" : "duration-300"} overflow-hidden ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-4">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};
