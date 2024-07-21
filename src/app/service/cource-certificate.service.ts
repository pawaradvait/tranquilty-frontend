import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class CourceCertificateService {
  constructor(private httpClient: HttpClient) {}

  getCertificate(userid: any, quizid: any) {
    return this.httpClient.get(
      `${baseUrl}/course-certificate/user/${userid}/quiz/${quizid}`
    );
  }
  addCertificate(Certificate: any) {
    return this.httpClient.post(`${baseUrl}/course-certificate/`, Certificate);
  }
}
