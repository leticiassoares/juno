import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
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
