import type {
  AssmatProps,
  CardProps,
  ColorKeys,
  QuestionsProps,
} from "@/utils/types.ts";

import Assmat1 from "@/assets/images/Assmat1.webp";
import Assmat2 from "@/assets/images/Assmat2.webp";

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

export const assmatMapping: AssmatProps[] = [
  {
    mainColor: "secondary",
    icon: Assmat1,
    title: "Corinne <strong> Beaurain</strong>",
    description: `
    <strong>Assistante maternelle agréée depuis 2001</strong> et présidente de l'association "MAM Pas Za Pas", je suis passionnée par l'accompagnement des jeunes enfants.
    <br /><br />
    Titulaire d'un <strong>CAP Petite Enfance</strong> et de nombreuses formations en sécurité, communication, et développement de l'enfant, j'assure un accueil bienveillant et professionnel.
    <br /><br />
    Forte d'une expérience avec plusieurs familles, j'accueille jusqu'à 4 enfants au sein d'une Maison d'Assistants Maternels, offrant un <strong>cadre sécurisé et stimulant</strong>. 
    <br /><br />
    Mariée et maman de deux enfants, <strong>Théo</strong> (2000) <strong>et Charlotte</strong> (2007), je m'engage à offrir un environnement de qualité aux familles.
    `,
  },
  {
    mainColor: "primary",
    icon: Assmat2,
    title: "Catarina <strong> Madeira</strong>",
    description: `
    Trésorière de l'association "MAM Pas Za Pas" et <strong>assistante maternelle agréée depuis 2013</strong>, je suis spécialisée dans l'accueil des jeunes enfants, notamment ceux en situation de handicap.
    <br /><br />
    Titulaire du <strong>CAP Petite Enfance</strong> (module 1), j'ai suivi plusieurs formations en sécurité, alimentation des tout-petits, et communication en langue des signes. 
    <br /><br />
    Avec plus de <strong>8 ans d'expérience en crèche privée et familiale</strong>, j'accueille aujourd'hui jusqu'à 4 enfants en Maison d'Assistants Maternels. 
    <br /><br />
    Mariée et maman de trois filles, <strong>Bruna</strong> (2002), <strong>Eva</strong> (2006) et <strong>Tania</strong> (2010), je m'engage à offrir un cadre bienveillant et stimulant.
    `,
  },
];

export const questionsMapping: QuestionsProps[] = [
  {
    title: "Qu'est-ce qu'une MAM ?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies.",
  },
  {
    title: "Question pertinente 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies.",
  },
  {
    title: "Question pertinente 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies. Nullam eget nunc nec purus ultricies ultricies.",
  },
];
