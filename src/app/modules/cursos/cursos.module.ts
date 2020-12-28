import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  FormModule,
  IconModule,
  InputModule,
  ModalModule,
  SelectModule,
  TextareaModule,
} from '@cca-fab/cca-fab-components-common';
import { SharedModule } from './../../shared/shared.module';
import { CursosRoutingModule } from './cursos-routing.module';

import { CursosService } from './cursos.service';
import { ListarCursosComponent } from './containers/listar-cursos/listar-cursos.component';
import { CriarCursoComponent } from './containers/criar-curso/criar-curso.component';
import { EditarCursoComponent } from './containers/editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './containers/deletar-curso/deletar-curso.component';

@NgModule({
  declarations: [
    ListarCursosComponent,
    CriarCursoComponent,
    EditarCursoComponent,
    DeletarCursoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosRoutingModule,
    SharedModule,
    IconModule,
    ButtonModule,
    SelectModule,
    FormModule,
    ModalModule,
    InputModule,
    TextareaModule,
    HttpClientModule,
  ],
  providers: [CursosService],
})
export class CursosModule {}
