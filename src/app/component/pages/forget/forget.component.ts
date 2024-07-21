import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
})
export class ForgetComponent implements OnInit {
  username: any;
  valid = false;
  validOTP = false;
  tester = false;
  opt: any;
  passwordChanged: any;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    this.userService.checkemail(this.username).subscribe(
      (data) => {
        console.log(data);
        this.valid = true;
        this.tester = true;
        Swal.fire('Success', 'OTP send to register Email', 'success');
      },
      (error) => {
        console.log(error);
        this.valid = false;

        Swal.fire('error', 'Invalid details', 'error');
      }
    );
  }
  onOtp() {
    this.userService.optChecker(this.opt, this.username).subscribe(
      (data) => {
        this.validOTP = true;
        this.tester = false;

        Swal.fire('Success', 'successfull otp Enter', 'success');
      },
      (error) => {
        this.validOTP = false;
        Swal.fire('error', 'Invalid OTP', 'error');
      }
    );
  }
  onPassword() {
    if (this.passwordChanged != null) {
      let userInfo = {
        username: this.username,
        password: this.passwordChanged,
      };
      this.userService.newPassword(userInfo).subscribe(
        (data) => {
          Swal.fire('Success', 'successfull Saved password', 'success');
          this.valid = false;
          this.validOTP = false;
          this.router.navigateByUrl('/login');
        },

        (error) => {
          Swal.fire(
            'error',
            'error in password enter different password',
            'error'
          );
          this.valid = false;
          this.validOTP = false;
        }
      );
    } else {
      Swal.fire('Error', 'Username or email field cannot be empty', 'error');
    }
  }
}
