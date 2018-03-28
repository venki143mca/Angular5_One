import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  canActivate() {
    const token = localStorage.getItem('access-token');
    if ( token ) {
      return true;
    } {
      this.router.navigate(['/login']);
    }
    return false;
  }

}
