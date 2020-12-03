import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  CheckboxModule,
  FormModule,
  IconModule,
  InputModule,
  LabelModule,
  RadioModule,
} from '@cca-fab/cca-fab-components-common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, HeaderComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    IconModule,
    FormModule,
    InputModule,
    CheckboxModule,
    LabelModule,
    RadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
