import {Ticket} from "./ticket";

export interface Account {
  userId: number;
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  city: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
