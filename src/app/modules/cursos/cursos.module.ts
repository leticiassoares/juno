import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CursosRoutingModule } from './cursos-routing.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';

import { CursosService } from '../../services/cursos.service';
import { ListarCursosComponent } from './containers/listar-cursos/listar-cursos.component';
import { CriarCursoComponent } from './containers/criar-curso/criar-curso.component';
import { EditarCursoComponent } from './containers/editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './containers/deletar-curso/deletar-curso.component';
import { DetalhesCursoComponent } from './containers/detalhes-curso/detalhes-curso.component';

@NgModule({
  declarations: [
    ListarCursosComponent,
    CriarCursoComponent,
    EditarCursoComponent,
    DeletarCursoComponent,
    DetalhesCursoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    FieldsetModule,
    DividerModule
  ],
  providers: [CursosService],
})
export class CursosModule {}
