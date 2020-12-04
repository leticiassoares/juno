import {
  AccordionModule,
  CardModule,
} from '@cca-fab/cca-fab-components-common';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CardModule, AccordionModule],
  exports: [CardComponent],
})
export class SharedModule {}
