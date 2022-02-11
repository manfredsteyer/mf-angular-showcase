import { Component, OnInit } from '@angular/core';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(readonly auth: AuthService) { }

  ngOnInit(): void {
  }

}
