import { useState } from "react";
import { Box, Button, Drawer, useMediaQuery } from "@mui/material";

import BurgerMenu from "@/assets/burger-menu.svg";
import LogoPaw from "@/assets/logo-paw.svg";
import { ConditionnalWrapper } from "@/components/utils/ConditionalWrapper.tsx";

export const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="header">
      <img
        src={LogoPaw}
        alt="logo-mam-pas-za-pas"
        className="header-logo"
      />

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
          <Drawer
            anchor="right"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Box
              className="flex flex-col items-center justify-start p-8 gap-8"
              sx={{ height: 1 }}
            >
              {children}
            </Box>
          </Drawer>
        )}
      >
        <ul className="header-items">
          <li className="header-item">Accueil</li>
          <li className="header-item">Fonctionnement</li>
          <li className="header-item">Horaires & Tarifs</li>
          <li className="header-item">Contact</li>
        </ul>

        <Button variant="contained" className="button-header">
          S'inscrire
        </Button>
      </ConditionnalWrapper>
    </header>
  );
};
