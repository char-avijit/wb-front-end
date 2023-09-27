import {ShowCaseMetaData} from "./show-case-meta-data";
import {Category} from "./category";
import {ShowCaseImage} from "./show-case-image";
import {AreaUnit, Currency, PropertyType} from "../enums";
import {Testimonial} from "./testimonial";

export interface ShowCase {
  id: number;
  name: string;
  slug: string;
  address?: string;
  latitude?: string;
  longitude?: string;
  price: number;
  currency: Currency;
  area: number;
  areaUnit: AreaUnit;
  description: string;
  type: PropertyType;
  images?: ShowCaseImage[];
  metadata?: ShowCaseMetaData;
  showCaseCategory?: Category;
}

export interface ShowCases {
  count: number;
  results: ShowCase[];

}
