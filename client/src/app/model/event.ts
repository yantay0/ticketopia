import {Category} from "./Category";
import {Location} from "./Location";

export interface Event {
  id: number;
  name: string;
  description: string;
  // premiere_date: Date;
  // age_rating: string;
  duration: number;
  poster?: string | null;
  category: Category;
  genre: string;
}
