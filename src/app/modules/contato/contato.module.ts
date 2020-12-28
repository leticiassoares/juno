import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormModule,
  InputModule,
  LabelModule,
  RadioModule,
  ButtonModule,
  TextareaModule,
} from '@cca-fab/cca-fab-components-common';
import { ContatoRoutingModule } from './contato-routing.module';

import { ContatoComponent } from './contato.component';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    ContatoRoutingModule,
    CommonModule,
    FormModule,
    InputModule,
    RadioModule,
    LabelModule,
    ButtonModule,
    TextareaModule,
  ],
})
export class ContatoModule {}
