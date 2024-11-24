import { Card } from "@/components/ui/Card.tsx";
import { cardsMapping } from "@/utils/mapping.ts";

export const Cards = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 px-8 py-10 text-center">
      <h1>Bienvenue à la MAM Pas Za Pas !</h1>

      <div className="align-stretch flex flex-col gap-10 lg:flex-row">
        {
          cardsMapping.map((card, index) => (
            <Card key={index} {...card} />
          ))
        }
      </div>
    </div>
  );
};
