import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from './../../cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
})
export class CriarCursoComponent implements OnInit {
  curso: FormGroup;

  constructor(private service: CursosService, private router: Router) {}

  ngOnInit() {
    this.curso = new FormGroup({
      idCurso: new FormControl(null),
      nome: new FormControl(null),
      codigo: new FormControl(null),
      disciplina: new FormControl(null),
      codigoCnpq: new FormControl(null),
      descricao: new FormControl(null),
      observacao: new FormControl(null),
      cargaHoraria: new FormControl(null),
    });
  }

  onSubmit() {
    return this.service
      .postCurso(this.curso.value)
      .subscribe(() => this.router.navigate(['/cursos']));
  }

  onCancel() {
    this.router.navigate(['/cursos']);
  }
}
