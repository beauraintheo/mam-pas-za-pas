import { useState } from "react";
import { Box, Button, Drawer, useMediaQuery } from "@mui/material";

import BurgerMenu from "@/assets/icons/burger-menu.svg";
import LogoPaws from "@/assets/icons/logo-paw.svg";
import { ConditionnalWrapper } from "@/components/utils/ConditionalWrapper.tsx";

export const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white p-8 lg:justify-center lg:gap-8 lg:p-10 2xl:gap-16">
      <a
        href="/"
        className="w-1/3 max-w-36 cursor-pointer lg:w-32 2xl:w-48 2xl:max-w-full"
      >
        <img src={LogoPaws} alt="logo-mam-pas-za-pas" />
      </a>

      {
        !isDesktop
          ? (
            <img
              src={BurgerMenu}
              alt="burger-menu"
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
            )
          : null
      }

      <ConditionnalWrapper
        condition={!isDesktop}
        wrapper={children => (
          <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
            <Box
              className="flex flex-col items-center justify-start gap-8 p-8"
              sx={{ height: 1 }}
            >
              {children}
            </Box>
          </Drawer>
        )}
      >
        <ul className="flex flex-col items-start justify-start gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-6 xl:gap-14">
          <li className="header-item">
            <a href="/">Accueil</a>
          </li>
          <li className="header-item">
            <a href="/">Fonctionnement</a>
          </li>
          <li className="header-item">
            <a href="/">Horaires & Tarifs</a>
          </li>
          <li className="header-item">
            <a href="/">Contact</a>
          </li>
        </ul>

        <Button variant="contained" className="button-header">
          S'inscrire
        </Button>
      </ConditionnalWrapper>
    </header>
  );
};
