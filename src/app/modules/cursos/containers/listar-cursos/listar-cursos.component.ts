import { Component, OnInit } from '@angular/core';
import { CursosService } from './../../cursos.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss'],
})
export class ListarCursosComponent implements OnInit {
  cursos = [];

  constructor(private service: CursosService) {}

  ngOnInit() {
    return this.service
      .getCursos()
      .subscribe((response) => (this.cursos = response.content));
  }
}
