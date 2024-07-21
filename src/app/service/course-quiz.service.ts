import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class CourseQuizService {
  constructor(private httpClient: HttpClient) {}

  addQuiz(quiz: any) {
    return this.httpClient.post(`${baseUrl}/course-quiz/`, quiz);
  }

  getQuiz() {
    return this.httpClient.get(`${baseUrl}/course-quiz/`);
  }
  getQuizByCategoryId(id: any) {
    return this.httpClient.get(`${baseUrl}/course-quiz/category/${id}`);
  }
  getQuizById(id: any) {
    return this.httpClient.get(`${baseUrl}/course-quiz/${id}`);
  }
}
