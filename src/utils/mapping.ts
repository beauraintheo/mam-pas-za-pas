import type { CardProps, ColorKeys } from "@/utils/types.ts";

import Card1Icon from "@/assets/icons/card1-icon.svg";
import Card2Icon from "@/assets/icons/card2-icon.svg";
import Card3Icon from "@/assets/icons/card3-icon.svg";

// Color mapping to map each type of color to a specific hex value.
export const colorMapping: Record<ColorKeys, string> = {
  primary: "#19C1B6",
  primaryHover: "#3AD1C9",
  secondary: "#FEA439",
  secondaryHover: "#FEBD6A",
  highlight: "#FE6788",
  light: "#FEF8EC",
  lightHover: "#F3E3C4",
  lightIcon: "#FEF8EC",
};

// Card mapping to map each card to its corresponding data.
export const cardsMapping: CardProps[] = [
  {
    mainColor: "primary",
    icon: Card1Icon,
    title: "Un <strong>Accueil de Qualité</strong> dans un <strong>Espace Pensé pour Votre Enfant</strong>",
    subtitle: "Dites-m'en plus ?",
    description: "Nous avons la capacité d’accueillir jusqu’à 8 enfants, dans un espace entièrement aménagé et conçu pour favoriser l’éveil, la socialisation et la sécurité des jeunes enfants. Notre structure, la Maison d’Assistants Maternels (MAM), allie la convivialité d’un cadre familial et les avantages d’une mini-collectivité, où les enfants peuvent évoluer en toute sérénité.",
  },
  {
    mainColor: "highlight",
    icon: Card2Icon,
    title: "Un Mode de Garde <strong>Flexible</strong> et <strong>Innovant</strong>",
    subtitle: "C’est-à-dire ?",
    description: "La MAM offre une réponse adaptée aux besoins modernes de garde d’enfants, notamment pour les parents ayant des horaires atypiques. En plus de rompre l’isolement des Assistantes Maternelles, elle permet d’augmenter la capacité d’accueil dans les zones à forte demande, tout en proposant une diversité de solutions d’accueil.",
  },
  {
    mainColor: "secondary",
    icon: Card3Icon,
    title: "La <strong>Sécurité</strong> et le <strong>Bien-être</strong> avant Tout",
    subtitle: "Comment ça ?",
    description: "Nos espaces sont aménagés selon les normes de la Protection Maternelle et Infantile (PMI), garantissant ainsi la sécurité et la santé des enfants que nous accueillons. La Délégation d’Accueil, propre au fonctionnement des MAM, vous permet d’avoir l’esprit tranquille en autorisant les autres assistantes maternelles de la structure à s’occuper de votre enfant en cas de besoin.",
  },
];
