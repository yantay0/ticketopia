import {User} from "./User";
import {Ticket} from "./Ticket";

export interface Check {
  ticket: Ticket;
  paymentDate: Date;
}
