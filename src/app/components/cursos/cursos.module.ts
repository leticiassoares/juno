import { SharedModule } from './../../shared/shared.module';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, RouterModule, CursosRoutingModule, SharedModule],
  providers: [CursosService],
})
export class CursosModule {}
