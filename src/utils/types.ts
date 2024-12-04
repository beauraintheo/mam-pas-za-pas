export type ColorKeys =
  | "primary"
  | "primaryHover"
  | "secondary"
  | "secondaryHover"
  | "highlight"
  | "light"
  | "lightHover"
  | "lightIcon";

export interface IconProps {
  color: string;
}

export interface CardProps {
  mainColor: ColorKeys;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AssmatProps {
  mainColor: ColorKeys;
  icon: string;
  title: string;
  description: string;
}

export interface QuestionsProps {
  title: string;
  description: string;
}

export interface DropdownQuestionProps extends QuestionsProps {
  isOpen: boolean;
  onClick: (isOpen: boolean) => void;
}
