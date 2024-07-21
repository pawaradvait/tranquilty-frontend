import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public logindata = {
    username: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  onlogin() {
    this.loginService.generatetoken(this.logindata).subscribe(
      (data: any) => {
        Swal.fire('Success', 's', 'success');
        //login
        this.loginService.loginUser(data.token);
        //user added in localstorage
        this.loginService.getCurrentUser().subscribe(
          (data) => {
            this.loginService.setUser(data);
            if (this.loginService.getUserRole() == 'normal') {
              this.loginService.loginstautus.next(true);

              this.router.navigateByUrl('/');
            } else if (this.loginService.getUserRole() == 'admin') {
              this.loginService.loginstautus.next(true);

              this.router.navigateByUrl('/admin');
            } else {
              this.loginService.loggout();
            }
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        Swal.fire('error', 'Invalid Details', 'error');
      }
    );
  }
}
