import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
