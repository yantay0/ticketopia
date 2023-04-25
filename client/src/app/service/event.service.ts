import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  items: Event[] = [];
  constructor(private client: HttpClient) {
  }

  BASE_URL = 'http://127.0.0.1:8000';

  getEventDetail(id: string): Observable<Event> {
    return this.client.get<Event>(`${this.BASE_URL}/events/${id}/`);
  }

  addToCart(event: Event) {
    this.items.push(event);
  }

}
