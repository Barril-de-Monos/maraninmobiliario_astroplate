export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export interface Product {
  title: string;
  image: string;
  description: string;
  link: string;
  category: string;
}
