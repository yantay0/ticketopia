import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken} from "../model/auth-token";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }


  login(email: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/api/user/login/`,
      {email, password}
    )
  };


}
