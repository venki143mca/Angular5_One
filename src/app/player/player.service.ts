import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Player } from '../model/player.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class PlayerService {

  public cricketApiContext = environment.cricketApiContext;

  constructor(public http: HttpClient) { }

  getPlayers(): Observable<any> {
    const url = this.cricketApiContext + '/cricket/players';
    return this.http.get( url, {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('access-token'))
    });
  }
}
