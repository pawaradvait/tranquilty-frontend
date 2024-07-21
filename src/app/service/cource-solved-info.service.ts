import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class CourceSolvedInfoService {
  constructor(private httpClient: HttpClient) {}

  addCourseSolvedInfo(courseSolvedInfo: any) {
    return this.httpClient.post(
      `${baseUrl}/course-solved-info/`,
      courseSolvedInfo
    );
  }
  getCourseSolvedInfoByUserid(id: any) {
    return this.httpClient.get(`${baseUrl}/course-solved-info/user/${id}`);
  }
}
