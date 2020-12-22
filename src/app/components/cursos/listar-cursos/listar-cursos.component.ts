import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss']
})
export class ListarCursosComponent implements OnInit {

  cursos = [];
  
  constructor(private service: CursosService) { }

  ngOnInit() {
    return this.service.listarCursos().subscribe(response => this.cursos = response.content); 

  }

}
