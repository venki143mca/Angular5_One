import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player.model';
import { PlayerService } from './player.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public players: Player[];
  public cols: any[];

  constructor(public playerService: PlayerService, public router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('access-token')) {
      this.cols = [
        { field: 'name', header: 'name' },
        { field: 'specification', header: 'Specification' }
      ];

      this.playerService.getPlayers().subscribe(
        data => {
          this.players = data.result;
          console.log(this.players);
        },
        error => {
          console.log(error);
          this.router.navigate(['/login']);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

}
