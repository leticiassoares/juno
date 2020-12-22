import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
