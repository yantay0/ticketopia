import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";
import {DOMAIN} from "../../config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = ''
  password: string = ''
  @Output() isLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token')
    if(token) {
      this.isLogged.emit(true)
    }

  }

  login() {
    this.categoryService.login(this.email, this.password).subscribe((data) =>{
      localStorage.setItem('token', data.token);
      this.router.navigate([`${DOMAIN}`])
      this.isLogged.emit(true);
      this.isLogged.emit(false);
      this.email = ''
      this.password = ''
    });
  }

}
