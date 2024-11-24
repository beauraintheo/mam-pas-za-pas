import { Button } from "@mui/material";

import LogoPaws from "@/assets/icons/logo-paw.svg";
import Waves from "@/assets/icons/waves.svg";
import HeadingPicture from "@/assets/images/heading-picture.webp";

export const Heading = () => (
  <div className="flex flex-col items-center justify-center gap-8 bg-custom-gradient py-10 lg:pb-12">
    <div
      className="h-8 w-full bg-auto bg-repeat-x"
      style={{ backgroundImage: `url(${Waves})` }}
    />

    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 lg:px-16">
      <div className="flex flex-col items-center justify-center gap-8 lg:items-start">
        <div>
          <h3 className="text-center text-primary lg:text-left">
            Maison d'Assistantes Maternelles
          </h3>
          <h4 className="text-center text-primary lg:text-left">
            à Neuilly-sur-Marne depuis 2020
          </h4>
        </div>

        <img
          src={LogoPaws}
          alt="logo-paws"
          className="w-2/3 max-w-screen-sm lg:w-full"
        />

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <Button variant="contained" className="button-secondary">
            S'inscrire
          </Button>

          <span className="text-20 font-medium underline lg:text-26">
            Qu'est-ce qu'une MAM ?
          </span>
        </div>
      </div>

      <img
        src={HeadingPicture}
        alt="heading-picture"
        className="w-2/3 lg:w-1/2"
      />
    </div>
  </div>
);
