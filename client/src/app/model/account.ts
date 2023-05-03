import {Ticket} from "./ticket";

export interface Account {
  userId: number;
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  phone_number: string;
  city: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
