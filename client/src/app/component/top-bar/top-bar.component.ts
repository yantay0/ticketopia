import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DOMAIN} from "../../config";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private router: Router) {
  }

  signIn() {
    console.log('Sign in button clicked');
  }
  goToMainPage() {
    this.router.navigate([DOMAIN]);
  }
}
