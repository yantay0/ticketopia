import {Ticket} from "./Ticket";

export interface User {
  id: number;
  firstName: String;
  lastName: String;
  dateOfBirth: Date;
  phoneNumber: String;
  email: String;
  city: String;
  tickets: Array<Ticket>
}
