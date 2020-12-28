import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormModule,
  InputModule,
  ButtonModule,
} from '@cca-fab/cca-fab-components-common';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormModule,
    InputModule,
    ButtonModule,
  ],
})
export class LoginModule {}
