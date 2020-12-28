import { EditarCursoComponent } from './containers/editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './containers/deletar-curso/deletar-curso.component';
import { CriarCursoComponent } from './containers/criar-curso/criar-curso.component';
import { ListarCursosComponent } from './containers/listar-cursos/listar-cursos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const cursosRoutes: Routes = [
  {
    path: '',
    component: ListarCursosComponent,
  },
  {
    path: 'criar',
    component: CriarCursoComponent,
  },
  {
    path: 'deletar/:id',
    component: DeletarCursoComponent,
  },
  {
    path: 'editar/:id',
    component: EditarCursoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
