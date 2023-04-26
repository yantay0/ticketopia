import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = ''
  password: string = ''
  @Output() isLogged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token')
    if(token) {
      this.isLogged.emit(true)
    }
  }

  login() {
    this.categoryService.login(this.username, this.password).subscribe((data) =>{
      localStorage.setItem('token', data.token);
      this.isLogged.emit(true);
      this.isLogged.emit(false);
    });
  }

}
