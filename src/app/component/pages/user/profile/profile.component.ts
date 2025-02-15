import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(private LoginService: LoginService) {}

  ngOnInit(): void {
    this.user = this.LoginService.getUser();
    console.log(this.user);
  }
}
