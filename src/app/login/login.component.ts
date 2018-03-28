import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    username: '',
    password: ''
  };
  
  public loggedInUser: User;

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
  }

  signIn() {


    this.loginService.loginAndGetToken(this.user).subscribe(
      data => {
        if (data && data.user && data.token && data.token.token) {
          localStorage.setItem('access-token', data.token.token);
          localStorage.setItem('access-token-expires', data.token.expires);
          localStorage.setItem('loggedInUser', JSON.stringify(data.user));
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      error => {
        if (error && error.status === 403) {
          localStorage.clear();
          this.router.navigate(['/login']);
        } else {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      }
    );

  }

  signUp() {

  }

}
