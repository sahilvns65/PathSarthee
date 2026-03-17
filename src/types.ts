export interface Startup {
  id: string;
  name: string;
  founder: string;
  description: string;
  category: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface ExecutionStep {
  title: string;
  description: string;
  icon: string;
}

export interface Story {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
}
