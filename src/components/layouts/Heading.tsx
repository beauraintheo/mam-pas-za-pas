import { Button } from "@mui/material";

import LogoPaws from "@/assets/icons/logo-paw.svg";
import Waves from "@/assets/icons/waves.svg";
import HeadingPicture from "@/assets/images/heading-picture.webp";

export const Heading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-custom-gradient pt-8">
      <div
        className="h-8 w-full bg-auto bg-repeat-x"
        style={{ backgroundImage: `url(${Waves})` }}
      />

      <div>
        <h3 className="text-center text-primary">
          Maison d'Assistantes Maternelles
        </h3>
        <h4 className="text-center text-primary">
          à Neuilly-sur-Marne depuis 2020
        </h4>
      </div>

      <img src={LogoPaws} alt="logo-paws" className="w-2/3" />

      <Button variant="contained" className="button-secondary">
        S'inscrire
      </Button>

      <span className="text-20 font-medium underline">
        Qu'est-ce qu'une MAM ?
      </span>

      <img src={HeadingPicture} alt="heading-picture" className="w-2/3" />
    </div>
  );
};
