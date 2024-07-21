import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category = {
    title: '',
    description: '',
  };
  file!: File;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}
  addCategorydata() {
    console.log(this.category);
    this.categoryService.addCategory(this.category, this.file).subscribe(
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
