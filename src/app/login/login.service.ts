import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  public loginApiContext = environment.loginApiContext;

  constructor(public http: HttpClient) { }

  loginAndGetToken(input): Observable<any> {
    const url = this.loginApiContext + '/loginapi/user/login';
    console.log(url);
   return this.http.post<any>( url, input);
  }
}
