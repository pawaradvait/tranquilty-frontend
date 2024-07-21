import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css'],
})
export class InternComponent implements OnInit {
  isLoggedIn = false;
  category = [
    {
      cid: 0,
      title: 'tester',
      description: 'a',
      category_image: '',
    },
  ];

  constructor(
    private loginService: LoginService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.loginService.loginstautus.asObservable().subscribe(
      (data: any) => {
        this.isLoggedIn = data;
      },
      (error) => {
        Swal.fire('error', 'error in login', 'error');
        console.log(error);
      }
    );

    this.categoryService.viewCategory().subscribe(
      (data: any) => {
        this.category = data;
      },
      (error) => {
        Swal.fire('error', 'error in db', 'error');
      }
    );
  }
}
