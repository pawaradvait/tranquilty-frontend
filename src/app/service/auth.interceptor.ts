import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Authinterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestHeader = req;
    const token = this.loginService.getToken();
    if (token != null) {
      requestHeader = requestHeader.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(requestHeader);
  }
}

export const authInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Authinterceptor,
    multi: true,
  },
];
