import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from './../../../../services/cursos.service';
import { AuthService } from './../../../../auth/auth.service';

@Component({
  selector: 'app-detalhes-curso',
  templateUrl: './detalhes-curso.component.html',
  styleUrls: ['./detalhes-curso.component.scss'],
})
export class DetalhesCursoComponent implements OnInit {
  id: any;
  curso: any;
  logged: boolean;

  constructor(
    private service: CursosService,
    private authService: AuthService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];

    this.service
      .getCursoById(this.id)
      .subscribe((response) => (this.curso = response));

    this.logged = this.authService.isAutenticado();
  }
}
