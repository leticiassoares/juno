import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  FormModule,
  InputModule,
  ButtonModule,
} from '@cca-fab/cca-fab-components-common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './container/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormModule,
    InputModule,
    ButtonModule,
    HttpClientModule,
  ]
})
export class LoginModule {}
