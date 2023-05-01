import {Category} from "./Category";
import {Location} from "./Location";

export interface Event {
  id: number;
  name: string;
  description: string;
  premiereDate: Date;
  ageRating: string;
  location: Location;
  duration: number;
  poster?: string | null;
  quantity: number;
  category: Category;
  genre: string;
}
