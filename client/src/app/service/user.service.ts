import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/account";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/accounts/';

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://127.0.0.1:8000'
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/api/accounts/`);
  }

  getUser(userId: number): Observable<User> {
    const url = `${this.BASE_URL}/api/tickets/${userId}/`;
    return this.http.get<User>(url);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/api/accounts/`, user);
  }

  updateUser(userId: number, user: User): Observable<User> {
    const url = `${this.BASE_URL}/api/tickets/${userId}/`;
    return this.http.put<User>(url, user);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.BASE_URL}/api/tickets/${userId}/`;
    return this.http.delete<void>(url);
  }
}
