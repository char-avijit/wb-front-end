export interface Category {
  id: number;
  name: string;
  description?: string;
}
export interface Categories {
  count: number;
  results: Category[];

}
export interface CategoryBody {
  name: string;
  description?: string;
}
