import { useMediaQuery } from "@mui/material";

import LocationIcon from "@/assets/icons/location.svg";
import MailIcon from "@/assets/icons/mail.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import LogoPaws from "@/assets/icons/logo-paw.svg";

const Logo = () => (
  <img
    src={LogoPaws}
    alt="logo"
    className="mb-3 w-full max-w-[270px] px-8 lg:max-w-[200px] lg:px-0 xl:max-w-[270px] xl:px-8"
  />
);

const Waves = () => (
  <div
    className="mb-6 h-8 w-full bg-auto bg-repeat-x"
    style={{ backgroundImage: "url(/assets/waves.svg)" }}
  />
);

export const Footer = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <footer className="footer flex flex-col items-center bg-custom-gradient py-10">
      <div className="flex w-full max-w-[2000px] flex-col items-center justify-center lg:justify-between">
        {!isDesktop ? <Logo /> : null}
        {!isDesktop ? <Waves /> : null}

        <div className="flex w-full flex-col gap-10 px-8 lg:flex-row lg:items-start lg:justify-between lg:px-12 lg:py-12 xl:px-20 xl:py-20">
          {isDesktop ? <Logo /> : null}

          <div className="footer-infos">
            <h2>Liens rapides</h2>

            <ul>
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="#">Fonctionnement</a>
              </li>
              <li>
                <a href="#">Horaires & Tarifs</a>
              </li>
              <li>
                <a href="#">Formulaire d'inscription</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-infos">
            <h2>Nous joindre</h2>

            <ul className="lg:max-w-60 xl:max-w-full">
              <li>
                <img src={PhoneIcon} alt="phone" />
                <a href="tel:+33171853338">01 71 85 33 38</a>
              </li>
              <li>
                <img src={MailIcon} alt="mail" />
                <a className="break-all" href="mailto:mampaszapas@outlook.fr">
                  mampaszapas@outlook.fr
                </a>
              </li>
              <li>
                <img src={LocationIcon} alt="location" />
                <a href="https://www.google.com/maps/place/8+Espl.+de+Chantilly,+93330+Neuilly-sur-Marne,+France">
                  Mam Pas Za Pas
                </a>
              </li>
            </ul>
          </div>

          <ul>
            <li className="!font-light">Copyright Pas Za Pas - 2024</li>
            <li>
              <a href="#" className="!font-light underline">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isDesktop ? <Waves /> : null}
    </footer>
  );
};
