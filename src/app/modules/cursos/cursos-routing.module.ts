import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/auth/guard/auth.guard';
import { DetalhesCursoComponent } from './containers/detalhes-curso/detalhes-curso.component';
import { EditarCursoComponent } from './containers/editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './containers/deletar-curso/deletar-curso.component';
import { CriarCursoComponent } from './containers/criar-curso/criar-curso.component';
import { ListarCursosComponent } from './containers/listar-cursos/listar-cursos.component';

const cursosRoutes: Routes = [
 {
    path: 'pesquisa',
    component: PesquisaComponent,
  },
  {
    path: '',
    component: ListarCursosComponent,
  },
  { path: 'detalhes/:id', component: DetalhesCursoComponent },
  {
    path: 'criar',
    component: CriarCursoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'deletar/:id',
    component: DeletarCursoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar/:id',
    component: EditarCursoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
