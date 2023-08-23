import {Currency} from "../enums";

export interface ProductCardInput {
  title: string;
  price: number;
  currency: Currency;
  image: string;
  location: string;
}

export interface WorkProcessStepInput {
  description: string;
  readMoreLink: string;
  title: string;
  image: string;
}
