import { DropdownQuestion } from "@/components/ui/DropdownQuestion.tsx";

export const Questions = () => {
  return (
    <div className="mb-20 mt-20 flex flex-col items-center justify-center px-8">
      <h1>
        Des
        <span className="color-title text-highlight"> questions</span>?
      </h1>

      <div className="w-full">
        <DropdownQuestion
          title="Qu'est-ce qu'une MAM ?"
          description="Une Maison d'Assistantes Maternelles est un lieu d'accueil collectif"
        />
      </div>
    </div>
  );
};
