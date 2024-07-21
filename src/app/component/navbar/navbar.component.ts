import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  username = null;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.username = this.loginService.getUser()?.username;
    this.loginService.loginstautus.asObservable().subscribe((data) => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.username = this.loginService.getUser().username;
    });
  }

  tologout() {
    this.isLoggedIn = false;
    this.username = null;
    this.loginService.loggout();
    this.loginService.loginstautus.next(false);
    window.location.reload();
  }
}
