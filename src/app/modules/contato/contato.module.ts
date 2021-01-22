import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoRoutingModule } from './contato-routing.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

import { ContatoComponent } from './container/contato.component';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    ContatoRoutingModule,
    CommonModule,
    RadioButtonModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
  ],
})
export class ContatoModule {}
