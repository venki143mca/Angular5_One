import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { OnecommonModule } from '../onecommon/onecommon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    OnecommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
