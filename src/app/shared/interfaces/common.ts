import {Currency} from "../enums";

export interface ProductCardInput {
  title: string;
  price: number;
  currency: Currency;
  image: string;
  location:string;
}
