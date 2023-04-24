import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private client: HttpClient) {
  }

  BASE_URL = 'http://127.0.0.1:8000';

  getEvents(): Observable<Event[]> {
    return this.client.get<Event[]>(`${this.BASE_URL}/events/`);
  }

  getEventDetail(id: string): Observable<Event> {
    return this.client.get<Event>(`${this.BASE_URL}/events/${id}/`);
  }

  getEventByCategoryId(id: any): Observable<Event[]> {
    return this.client.get<Event[]>(`${this.BASE_URL}/categories/${id}/`);
  }
}
