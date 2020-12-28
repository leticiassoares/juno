import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IconModule } from '@cca-fab/cca-fab-components-common';

import { HomeComponent } from './container/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule, IconModule],
})
export class HomeModule {}
