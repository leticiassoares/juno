import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar-curso',
  templateUrl: './deletar-curso.component.html',
  styleUrls: ['./deletar-curso.component.scss']
})
export class DeletarCursoComponent implements OnInit {

  id!: string;

  constructor(private service: CursosService, private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.aroute.snapshot.params['id'];
    return this.service.deletarCursoPorID(this.id).subscribe(() => this.router.navigate(['/cursos']));
  }

}
