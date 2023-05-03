import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account} from "../model/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {
  }

  getAccounts(): Observable<Account[]> {
    return this.client.get<Account[]>(
      `${this.BASE_URL}/api/accounts/`
    );
  }


  getAccountByUserId(id: number): Observable<Account> {
    return this.client.get<Account>(
      `${this.BASE_URL}/api/accounts/${id}/`
    );
  }

  createAccount(account: Account): Observable<Account> {
    return this.client.post<Account>(
      `${this.BASE_URL}/api/accounts`, account
    );
  }

  updateAccount(id: number, account: Account): Observable<Account> {
    return this.client.patch<Account>(
      `${this.BASE_URL}/api/accounts/${id}`, account
    );
  }
}
