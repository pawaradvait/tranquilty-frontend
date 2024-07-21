import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class CourseQuestionService {
  constructor(private httpClient: HttpClient) {}

  addQuestion(question: any) {
    return this.httpClient.post(`${baseUrl}/course-question/`, question);
  }
  getQuestionByQuizeId(id: any) {
    return this.httpClient.get(`${baseUrl}/course-question/quiz/${id}`);
  }

  addSolvedInfo(solvedInfo: any) {
    return this.httpClient.post(`${baseUrl}/course-solved-info/`, solvedInfo);
  }
}
