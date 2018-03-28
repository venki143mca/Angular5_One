import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onecommon',
  templateUrl: './onecommon.component.html',
  styleUrls: ['./onecommon.component.css']
})
export class OnecommonComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
