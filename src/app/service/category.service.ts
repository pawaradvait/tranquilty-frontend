import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  viewCategory() {
    return this.httpClient.get(`${baseUrl}/category/`);
  }

  addCategory(category: any, file: File) {
    let formData = new FormData();
    formData.append('category', JSON.stringify(category));
    formData.append('file', file);
    return this.httpClient.post(`${baseUrl}/category/`, formData);
  }
}
