import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './container/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule],
})
export class HomeModule {}
