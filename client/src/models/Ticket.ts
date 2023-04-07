import {Seat} from "./Seat";
import {TicketType} from "./TicketType";
import {User} from "./User";

export interface Ticket {
  user: User;
  id: number;
  event: Event;
  date: Date;
  location: String;
  seat: Seat;
  price: number;
  ticketType: TicketType;
}
