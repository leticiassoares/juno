import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';

const cursosRoutes: Routes = [
  {
    path: '',
    component: CursosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}