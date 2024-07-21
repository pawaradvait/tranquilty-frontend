import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class CourseCategoryService {
  constructor(private httpClient: HttpClient) {}

  addcategory(category: any, file: File) {
    let formdata = new FormData();
    formdata.append('courseCategory1', JSON.stringify(category));
    formdata.append('file', file);

    return this.httpClient.post(`${baseUrl}/course-category/`, formdata);
  }
  getCategory() {
    return this.httpClient.get(`${baseUrl}/course-category/`);
  }

  getCatgeoryById(id: any) {
    return this.httpClient.get(`${baseUrl}/course-category/${id}`);
  }
}
