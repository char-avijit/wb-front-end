export interface Subscriber {
  name: string;
  phone: string;
  address: string;
  email: string;
}

export interface Subscribers {
  count: number;
  results: Subscriber[];

}
