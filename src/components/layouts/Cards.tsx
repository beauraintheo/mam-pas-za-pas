import { Card } from "@/components/ui/Card.tsx";
import { cardsMapping } from "@/utils/mapping.ts";

export const Cards = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 px-8 py-10 text-center">
      <h1>
        Bienvenue à la
        <span className="color-title text-highlight"> M</span>
        <span className="color-title text-primary">A</span>
        <span className="color-title text-secondary">M </span>
        <span className="color-title text-highlight">P</span>
        <span className="color-title text-primary">a</span>
        <span className="color-title text-secondary">s </span>
        <span className="color-title text-highlight">Z</span>
        <span className="color-title text-secondary">a </span>
        <span className="color-title text-highlight">P</span>
        <span className="color-title text-primary">a</span>
        <span className="color-title text-secondary">s </span>
        !
      </h1>

      <div className="align-stretch flex flex-col gap-10 lg:flex-row">
        {
          cardsMapping.map((card, index) => (
            <Card key={index} {...card} />
          ))
        }
      </div>

      <button className="button-secondary">S'inscrire</button>
    </div>
  );
};
