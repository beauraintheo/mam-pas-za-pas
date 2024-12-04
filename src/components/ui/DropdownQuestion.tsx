import type { DropdownQuestionProps } from "@/utils/types.ts";

export const DropdownQuestion = ({
  title,
  description,
  isOpen,
  onClick,
}: DropdownQuestionProps) => {
  const questionContainer = isOpen
    ? "text-white bg-secondary outline-secondary outline"
    : "text-black bg-white";

  return (
    <div
      className="flex w-full max-w-[775px] cursor-pointer flex-col rounded-l-2xl rounded-r-2xl bg-white outline outline-lightGray questions-transition-color"
      onClick={() => onClick(!isOpen)}
    >
      <div className={`z-10 flex items-center justify-between rounded-2xl p-4 lg:p-8 ${questionContainer} questions-transition-color`}>
        <span>{title}</span>

        <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white pb-1 text-32 text-black ${!isOpen ? "border border-black" : ""} questions-transition-color`}>
          {isOpen ? "-" : "+"}
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-4">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};
