import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerService } from './player.service';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'primeng/datatable';
import { OnecommonComponent } from '../onecommon/onecommon.component';
import { OnecommonModule } from '../onecommon/onecommon.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DataTableModule,
    OnecommonModule
  ],
  declarations: [
    PlayerComponent
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule { }
