import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../model/Event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {
  }

  getAllEvents(): Observable<Event[]> {
    return this.client.get<Event[]>(
      `${this.BASE_URL}/api/events/`
    )
  }

  getEvent(id: number): Observable<Event> {
    return this.client.get<Event>(
      `${this.BASE_URL}/api/events/${id}/`
    )
  }
}


