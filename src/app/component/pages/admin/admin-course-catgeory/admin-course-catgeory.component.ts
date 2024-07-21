import { Component, OnInit } from '@angular/core';
import { CourseCategoryService } from 'src/app/service/course-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-course-catgeory',
  templateUrl: './admin-course-catgeory.component.html',
  styleUrls: ['./admin-course-catgeory.component.css'],
})
export class AdminCourseCatgeoryComponent implements OnInit {
  category = [{ title: 'aa', description: 'aass', courseCategoryImage: '' }];

  constructor(private courseCategory: CourseCategoryService) {}

  ngOnInit(): void {
    this.courseCategory.getCategory().subscribe(
      (data: any) => {
        this.category = data;
        console.log(data);
      },
      (error) => {
        Swal.fire('error', 'error in fetching data', 'error');
      }
    );
  }
}
