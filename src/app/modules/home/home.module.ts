import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './container/home.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule, CardModule],
})
export class HomeModule {}
