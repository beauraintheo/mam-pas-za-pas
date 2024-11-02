import { useState } from "react";
import { Box, Button, Drawer, useMediaQuery } from "@mui/material";

import BurgerMenu from "@/assets/burger-menu.svg";
import LogoPaw from "@/assets/logo-paw.svg";

const HeaderMobile = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <header className="flex m-8 items-center justify-between">
      <img
        src={LogoPaw}
        alt="logo-mam-pas-za-pas"
        className="w-1/3 max-w-36"
      />

      <img
        src={BurgerMenu}
        alt="burger-menu"
        onClick={() => setIsOpen(true)}
      />

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box
          className="flex flex-col items-center justify-start p-8"
          sx={{ height: 1 }}
        >
          <ul className="mb-6 gap-4 flex flex-col flex-row items-left justify-left">
            <li className="header-item">Accueil</li>
            <li className="header-item">Fonctionnement</li>
            <li className="header-item">Horaires & Tarifs</li>
            <li className="header-item">Contact</li>
          </ul>

          <Button variant="contained" className="header-button">
            S'inscrire
          </Button>
        </Box>
      </Drawer>
    </header>
  );
};

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop)
    return <HeaderMobile />;

  return (
    <header className="flex">
      <img
        src={LogoPaw}
        alt="logo-mam-pas-za-pas"
        className="w-64"
      />

      <ul className="flex flex-row items-center justify-center">
        <li className="header-item">Accueil</li>
        <li className="header-item">Fonctionnement</li>
        <li className="header-item">Horaires & Tarifs</li>
        <li className="header-item">Contact</li>
      </ul>
    </header>
  );
};
