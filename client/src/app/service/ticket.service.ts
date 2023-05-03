import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ticket} from "../model/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.BASE_URL}/api/tickets/`);
  }

  getTicket(ticketId: number): Observable<Ticket> {
    const url = `${this.BASE_URL}/api/tickets/${ticketId}/`;
    return this.http.get<Ticket>(url);
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.BASE_URL}/api/tickets/`, ticket);
  }

  updateTicket(ticketId: number, ticket: Ticket): Observable<Ticket> {
    const url = `${this.BASE_URL}/api/tickets/${ticketId}/`;
    return this.http.put<Ticket>(url, ticket);
  }

  deleteTicket(ticketId: number): Observable<void> {
    const url = `${this.BASE_URL}/api/tickets/${ticketId}/`;
    return this.http.delete<void>(url);
  }
}
