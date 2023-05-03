import {User} from "./account";
import {Seat} from "./seat";
import {TicketType} from "./ticket-type";

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
