import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";
import {DOMAIN} from "../../config";
import {AuthService} from "../../auth/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {AuthToken} from "../../model/auth-token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = ''
  password: string = ''
  @Output() isLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
  errorMessage: string | undefined;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token')
    if(token) {
      this.isLogged.emit(true)
    }
  }



  login() {
    this.errorMessage = ''; // Initialize error message to empty string

    try {
      this.authService.login(this.email, this.password).subscribe((data) =>{
        localStorage.setItem('token', data.token);
        console.log(data)
        this.router.navigate([`${DOMAIN}`])
        this.isLogged.emit(true);
        this.isLogged.emit(false);
        console.log(this.email)
        this.email = ''
        this.password = ''
      }, (error) => {
        // Handle login error
        if (error.status === 400) {
          this.errorMessage = 'Email or password is incorrect';
        } else {
          this.errorMessage = 'An error occurred, please try again later';
        }
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }





}
