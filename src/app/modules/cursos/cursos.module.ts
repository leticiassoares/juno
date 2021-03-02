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
import { InputTextModule } from 'primeng/inputtext';

import { CursosService } from '../../services/cursos.service';
import { ListarCursosComponent } from './containers/listar-cursos/listar-cursos.component';
import { CriarCursoComponent } from './containers/criar-curso/criar-curso.component';
import { EditarCursoComponent } from './containers/editar-curso/editar-curso.component';
import { DeletarCursoComponent } from './containers/deletar-curso/deletar-curso.component';
import { DetalhesCursoComponent } from './containers/detalhes-curso/detalhes-curso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    ListarCursosComponent,
    CriarCursoComponent,
    EditarCursoComponent,
    DeletarCursoComponent,
    DetalhesCursoComponent,
    PesquisaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CursosService],
})
export class CursosModule {}
