import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginstautus = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  generatetoken(user: any) {
    return this.httpClient.post(`${baseUrl}/generate-token`, user);
  }

  loginUser(token: any) {
    localStorage.setItem('token', token);
  }
  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == null || token == undefined) {
      return false;
    }
    return true;
  }

  loggout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userstr = localStorage.getItem('user');
    if (userstr != null) {
      return JSON.parse(userstr);
    } else {
      this.loggout();
      return null;
    }
  }

  public getUserRole() {
    let user = this.getUser();
    if (user != null) {
      return user.authorities[0].authority;
    }
  }

  public getCurrentUser() {
    return this.httpClient.get(`${baseUrl}/current-user`);
  }
}
