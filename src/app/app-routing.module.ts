import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./components/cursos/cursos.module').then((m) => m.CursosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
