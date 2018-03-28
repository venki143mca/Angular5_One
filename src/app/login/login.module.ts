import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [ LoginComponent ],
  exports : [ LoginComponent ],
  providers: [ LoginService ]
})
export class LoginModule { }
