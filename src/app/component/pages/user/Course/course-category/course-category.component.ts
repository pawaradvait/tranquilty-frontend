import { Component, OnInit } from '@angular/core';
import { CourseCategoryService } from 'src/app/service/course-category.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css'],
})
export class CourseCategoryComponent implements OnInit {
  isLoggedIn = false;
  category = [
    {
      ccid: 0,
      title: 'tester',
      description: 'a',
      courseCategoryImage: '',
    },
  ];

  constructor(
    private loginService: LoginService,
    private categoryService: CourseCategoryService
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

    this.categoryService.getCategory().subscribe(
      (data: any) => {
        this.category = data;
      },
      (error) => {
        Swal.fire('error', 'error in db', 'error');
      }
    );
  }
}
