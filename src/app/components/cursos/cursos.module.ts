import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ButtonModule, FormModule, IconModule, InputModule, ModalModule, SelectModule, TextareaModule } from '@cca-fab/cca-fab-components-common';
import { SharedModule } from './../../shared/shared.module';

import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './deletar-curso/deletar-curso.component';


@NgModule({
  declarations: [ListarCursosComponent, CriarCursoComponent, EditarCursoComponent, DeletarCursoComponent],
  imports: [CommonModule, RouterModule, CursosRoutingModule, SharedModule, IconModule, ButtonModule, SelectModule, FormModule, ModalModule, InputModule, TextareaModule, HttpClientModule],
  providers: [CursosService],
})
export class CursosModule {}
