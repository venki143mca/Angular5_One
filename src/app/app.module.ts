import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { PlayerModule } from './player/player.module';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OnecommonModule } from './onecommon/onecommon.module';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { HomeModule } from './home/home.module';
import { TeamModule } from './team/team.module';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamComponent, canActivate: [AuthGuardService] },
  { path: 'player', component: PlayerComponent, canActivate: [AuthGuardService] },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    CommonModule,
    BrowserModule,
    LoginModule,
    PlayerModule,
    OnecommonModule,
    HomeModule,
    TeamModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
