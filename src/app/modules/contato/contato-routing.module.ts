import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoComponent } from './container/contato.component';

const contatoRoutes: Routes = [
  {
    path: '',
    component: ContatoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(contatoRoutes)],
  exports: [RouterModule],
})
export class ContatoRoutingModule {}
