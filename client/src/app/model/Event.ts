import {Category} from "./Category";

export interface Event {
  id: number;
  title: string;
  description: Text | string;
  premiereDate: Date | string;
  ageRating: string;
  location: string;
  duration: number; // in minutes
  poster: string; // poster of the event
  capacity: number; // number of tickets
  category: Category;
}
