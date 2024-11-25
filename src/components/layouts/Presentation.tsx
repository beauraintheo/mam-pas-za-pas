import { Assmat } from "@/components/ui/Assmat.tsx";
import { assmatMapping } from "@/utils/mapping.ts";

export const Presentation = () => (
  <div className="flex items-center justify-center bg-custom-gradient">
    <div className="flex max-w-[1420px] flex-col items-center justify-center gap-8 px-10 py-20 text-center">
      <h1>
        Les assistantes
        <span className="color-title text-highlight"> maternelles</span>
      </h1>

      <span className="text-center">
        Nous sommes deux assistantes maternelles agréées qui exerçons au sein
        d’une Maison d’Assistantes Maternelles à Neuilly Sur Marne. Nous
        travaillons en parfaite harmonie avec un objectif commun : assurer «
        santé, sécurité et épanouissement » à chaque enfant.
      </span>

      <div className="flex w-full max-w-[1000px] flex-col items-center justify-between gap-16 lg:flex-row lg:items-stretch">
        {
          assmatMapping.map((assmat, index) => (
            <Assmat key={index} {...assmat} />
          ))
        }
      </div>
    </div>
  </div>
);
