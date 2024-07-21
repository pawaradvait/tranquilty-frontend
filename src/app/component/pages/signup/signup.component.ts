import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    phonenos: '',
    password: '',
  };
  file!: File;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  filegetter(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  onsubmit() {
    this.userService.addUser(this.user, this.file).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Suucessfully register', `user id:${data.id}`, 'success');
        this.user = {
          username: '',
          firstName: '',
          lastName: '',
          password: '',
          email: '',
          phonenos: '',
        };
      },

      (error) => {
        Swal.fire('error', 'Some fields are empty please fill them', 'error');
      }
    );
  }
}
