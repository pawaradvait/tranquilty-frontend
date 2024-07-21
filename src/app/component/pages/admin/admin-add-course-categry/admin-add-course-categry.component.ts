import { Component, OnInit } from '@angular/core';
import { CourseCategoryService } from 'src/app/service/course-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-course-categry',
  templateUrl: './admin-add-course-categry.component.html',
  styleUrls: ['./admin-add-course-categry.component.css'],
})
export class AdminAddCourseCategryComponent implements OnInit {
  category = {
    title: '',
    description: '',
  };
  file!: File;

  constructor(private courseCategory: CourseCategoryService) {}

  ngOnInit(): void {}
  addCategorydata() {
    console.log(this.category);
    this.courseCategory.addcategory(this.category, this.file).subscribe(
      (data) => {
        Swal.fire('Sucess', 'data added successfully', 'success');
      },
      (error) => {
        Swal.fire('error', 'error while saving', 'error');
      }
    );
  }
  onchangefile(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }
}
