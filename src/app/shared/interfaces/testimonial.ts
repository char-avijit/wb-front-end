export interface Testimonial {
  id: number;
  message: string;
  name: string;
  designation: string;
  avatar: string;
  avatarImageKey: string;
}


export interface TestimonialBody {
  message: string;
  name: string;
  designation: string;
  avatar: string;
  avatarImageKey: string;
}

export interface Testimonials {
  count: number;
  results: Testimonial[];

}

