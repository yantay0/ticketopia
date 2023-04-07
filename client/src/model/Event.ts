import {Category} from "./Category";

export interface Event {
  id: number;
  title: String;
  description: Text;
  premiereDate: Date;
  ageRating: String;
  location: String;
  duration: number; // in minutes
  poster: String; // poster of the event
  capacity: number; // number of tickets
  category: Category;
}
