import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../model/Event";

@Injectable({
  providedIn: 'root'
})
export class EventService {
<<<<<<< HEAD

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {
  }

  getAllEvents(): Observable<Event[]> {
    return this.client.get<Event[]>(
      `${this.BASE_URL}/api/events`
    )
  }

  getEventDetail(id: number): Observable<Event> {
    return this.client.get<Event>(`${this.BASE_URL}/api/events/${id}`);
=======
  items: Event[] = [];
  constructor(private client: HttpClient) {
  }

  BASE_URL = 'http://127.0.0.1:8000';

  getEventDetail(id: string): Observable<Event> {
    return this.client.get<Event>(`${this.BASE_URL}/events/${id}/`);
  }

  addToCart(event: Event) {
    this.items.push(event);
>>>>>>> 19d2bc383e3f82e517204bea0709e0310542dcf2
  }

}


