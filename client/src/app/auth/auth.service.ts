import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: any = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };

  getCurrentUser() {
    return this.currentUser;
  }
}
