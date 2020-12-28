import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './../../cursos.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss'],
})
export class EditarCursoComponent implements OnInit {
  curso: FormGroup;
  id: string;

  constructor(
    private service: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

    this.route.params.subscribe((params) => (this.id = params['id']));
    this.service.getCursoById(this.id).subscribe((response) => {
      this.curso.patchValue(response);
    });
  }

  onSubmit() {
    this.service.editCurso(this.curso.value).subscribe(() => {
      this.router.navigate(['/cursos']);
    });
  }

  onCancel() {
    this.router.navigate(['/cursos']);
  }
}
