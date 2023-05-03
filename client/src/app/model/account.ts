import {Ticket} from "./ticket";

export interface Account {
  user_id: number;
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  phone_number: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
