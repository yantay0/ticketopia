import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DOMAIN} from "../../config";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
  isLogged = false;
  constructor(private router: Router) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token')
    if(token) {
      this.isLogged = true;
    }
  }
  logOut() {
    localStorage.removeItem('token');
    this.isLogged = false;
  }

  goToMainPage() {
    this.router.navigate([DOMAIN]);
  }
}
