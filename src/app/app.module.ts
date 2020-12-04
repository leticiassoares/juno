import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CheckboxModule,
  FormModule,
  IconModule,
  InputModule,
  LabelModule,
  RadioModule,
} from '@cca-fab/cca-fab-components-common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent,
    BreadcrumbComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    ButtonModule,
    IconModule,
    FormModule,
    InputModule,
    CheckboxModule,
    LabelModule,
    RadioModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
