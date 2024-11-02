import LogoPaw from "@/assets/logo-paw.svg";

export const Header = () => {
  return (
    <header className="flex">
      <img src={LogoPaw} alt="logo-mam-pas-za-pas" />

      <ul className="gap-58 flex flex-row items-center justify-center">
        <li className="header-item">Accueil</li>
        <li className="header-item">Fonctionnement</li>
        <li className="header-item">Horaires & Tarifs</li>
        <li className="header-item">Contact</li>
      </ul>
    </header>
  );
};
