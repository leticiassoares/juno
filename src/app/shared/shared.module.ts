import { RouterModule } from '@angular/router';
import {
  CardModule, IconModule,
} from '@cca-fab/cca-fab-components-common';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CardModule, IconModule, RouterModule],
  exports: [CardComponent],
})
export class SharedModule {}
