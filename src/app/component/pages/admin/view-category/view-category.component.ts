import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  category = [{ title: 'aa', description: 'aass', category_image: '' }];

  constructor(private categroyService: CategoryService) {}

  ngOnInit(): void {
    this.categroyService.viewCategory().subscribe(
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
