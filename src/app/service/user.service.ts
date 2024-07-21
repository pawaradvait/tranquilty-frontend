import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  addUser(user: any, file: File) {
    let formdata = new FormData();
    formdata.append('user', JSON.stringify(user));
    formdata.append('file', file);
    return this.httpClient.post(`${baseUrl}/user/`, formdata);
  }

  checkemail(email: any) {
    return this.httpClient.get(`${baseUrl}/user/email/${email}`, {
      responseType: 'text',
    });
  }

  optChecker(otp: any, username: any) {
    return this.httpClient.get(`${baseUrl}/user/email/otp/${otp}/${username}`, {
      responseType: 'text',
    });
  }

  newPassword(userinfo: any) {
    return this.httpClient.post(`${baseUrl}/user/password-change`, userinfo, {
      responseType: 'text',
    });
  }
}
