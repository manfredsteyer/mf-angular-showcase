import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = '';

  constructor() { }

  login(userName: string, password: string): void {
    this.currentUser = userName;
    // No password check for the sake of demonstration
    // "Login for honest users TM"
  }

  logout(): void {
    this.currentUser = '';
  }
}
