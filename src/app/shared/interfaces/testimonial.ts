export interface Testimonial {
  id: number;
  message: string;
  name: string;
  designation: string;
  avatar: string;
}

export interface Testimonials {
  count: number;
  results: Testimonial[];

}

