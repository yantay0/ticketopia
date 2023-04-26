import { Injectable } from '@angular/core';
import {AuthLoginInfo} from "./login-info";
import {Observable} from "rxjs";
import {JwtResponse} from "./jwt-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SignUpInfo} from "./signup-info";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = ''
  private signupUrl = ''

  constructor(private client: HttpClient) { }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.client.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.client.post<string>(this.signupUrl, info, httpOptions)
  }

}
