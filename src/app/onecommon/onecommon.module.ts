import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnecommonComponent } from './onecommon.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  declarations: [ OnecommonComponent ],
  exports: [ OnecommonComponent ]
})
export class OnecommonModule { }
