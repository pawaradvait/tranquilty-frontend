import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private httpClient: HttpClient) {}

  viewQuizes() {
    return this.httpClient.get(`${baseUrl}/quiz/`);
  }

  addQuiz(quiz: any) {
    return this.httpClient.post(`${baseUrl}/quiz/`, quiz);
  }

  getQuizById(qid: any) {
    return this.httpClient.get(`${baseUrl}/quiz/${qid}`);
  }

  getAllquizOFcatid(id: any) {
    return this.httpClient.get(`${baseUrl}/quiz/category/${id}`);
  }
}
