import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CursosService } from './../../cursos.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss'],
})
export class ListarCursosComponent implements OnInit {
  cursos = [];
  logged: boolean;

  constructor(private service: CursosService, private authService: AuthService) {}

  ngOnInit() {
    this.service
      .getCursos()
      .subscribe((response) => (this.cursos = response.content));

      this.logged = this.authService.isAutenticado();

    }
}
