import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {}

  addQuestion(question: any) {
    return this.httpClient.post(`${baseUrl}/question/`, question);
  }
  getQuestionByQuizeId(id: any) {
    return this.httpClient.get(`${baseUrl}/question/quiz/${id}`);
  }

  addSolvedInfo(solvedInfo: any) {
    return this.httpClient.post(`${baseUrl}/solved-info/`, solvedInfo);
  }

  getSolvedInfoBYUserId(userid: any) {
    return this.httpClient.get(`${baseUrl}/solved-info/user/${userid}`);
  }

  getallUsersthatareEligable() {
    return this.httpClient.get(`${baseUrl}/solved-info/eligable`);
  }
}
