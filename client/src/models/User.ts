import {Ticket} from "./Ticket";
import {Check} from "./Check";

export interface User {
  id: number;
  firstName: String;
  lastName: String;
  dateOfBirth: Date;
  phoneNumber: String;
  email: String;
  city: String;
  myTickets: Array<Ticket>;
  purchaseHistory: Array<Check>
}
