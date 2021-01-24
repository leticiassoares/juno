import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { LoginRoutingModule } from './login-routing.module';
import { InputTextModule } from 'primeng/inputtext';


import { LoginComponent } from './container/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    HttpClientModule,
    ButtonModule,
    PasswordModule,
    InputTextModule, 
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule {}
