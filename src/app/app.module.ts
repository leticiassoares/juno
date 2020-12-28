import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  BreadcrumbModule,
  ButtonModule,
  CheckboxModule,
  FormModule,
  IconModule,
  InputModule,
  LabelModule,
  RadioModule,
  SelectModule,
  TextareaModule,
} from '@cca-fab/cca-fab-components-common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    ButtonModule,
    IconModule,
    FormModule,
    InputModule,
    CheckboxModule,
    SelectModule,
    RadioModule,
    TextareaModule,
    LabelModule,
    RadioModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
