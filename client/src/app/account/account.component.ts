import { Component, OnInit } from '@angular/core';
import {Account} from "../model/account";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "../service/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  account: Account;
  accounts: Account[] = [];


  constructor(private accountService: AccountService) {
    this.account = {} as Account;
    // this.accounts = []
  }
  ngOnInit(): void {
    this.getAccounts();
    console.log(this.accounts)
    this.getAccountByUserId()
    console.log(this.account)
    console.log(this.getUserId())
  }

  getToken() {
    return localStorage.getItem("token");
  }
   getUserInfo() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  getUserId() {
    const userInfo = this.getUserInfo();
    if (userInfo) {
      return userInfo.user_id;
    } else {
      return null;
    }
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe(data =>{
      this.accounts = data;
      console.log(this.accounts)
    })
  }

  getAccountByUserId(){
    const account = this.accounts.find(a=>a.user_id === this.getUserId())
    if(account){
      this.account = account
    }

  }

}
