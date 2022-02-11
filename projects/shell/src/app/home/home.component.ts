import { Component, OnInit } from '@angular/core';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName = '';
  password = '';

  constructor(readonly auth: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.login(this.userName, this.password);
  }

  logout(): void {
    this.auth.logout();
  }

}
