import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent,
    FooterComponent  
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
