import {Component} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../../model/account";
import {DOMAIN} from "../../config";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  newUser: User;
  passwordCheck = ''
  errorMessage = ''
  constructor(private authService: AuthService, private router: Router) {
    this.newUser = {} as User;
  }

  signUp(){
    if(!this.newUser.email || !this.newUser.password || !this.passwordCheck){
      this.errorMessage = 'Blank Fields'
    }
    this.authService.signUp(this.newUser.email, this.newUser.password, this.passwordCheck, this.newUser.username).subscribe(data=>{
      alert("welcome")
      this.newUser = {} as User;
      this.router.navigate([`${DOMAIN}`])
    })
  }
}
