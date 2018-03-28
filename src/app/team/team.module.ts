import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { OnecommonModule } from '../onecommon/onecommon.module';

@NgModule({
  imports: [
    CommonModule,
    OnecommonModule
  ],
  declarations: [
    TeamComponent
  ],
  exports: [
    TeamComponent
  ]
})
export class TeamModule { }
