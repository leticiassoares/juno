import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() curso!: {
    idCurso: number;
    nome: string;
    codigo: string;
    disciplina: string;
    codigoCnpq: string;
    descricao: string;
    observacao: string;
    cargaHoraria: number;
  };

  logged: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.logged = this.authService.isAutenticado();
  }

}
