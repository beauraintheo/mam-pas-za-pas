import LogoPaw from "@/assets/logo-paw.svg";
import { Button } from "@/components/ui/button.tsx";

export const Header = () => {
  return (
    <header className="flex">
      <img src={LogoPaw} alt="logo-mam-pas-za-pas" />

      <ul className="flex flex-row items-center justify-center gap-58">
        <li className="header-item">Accueil</li>
        <li className="header-item">Fonctionnement</li>
        <li className="header-item">Horaires & Tarifs</li>
        <li className="header-item">Contact</li>
      </ul>

      <Button>S'inscrire</Button>
    </header>
  );
};
