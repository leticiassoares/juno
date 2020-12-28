import { Router } from '@angular/router';
import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = 'leticiassoares';
  senha = '123456';

  constructor(private http: HttpClient, private router: Router) {}

  logar(usuario: Usuario) {
    if (usuario.user == this.user && usuario.senha == this.senha) {
      this.router.navigate(['/']);
    } else if (usuario.user == this.user && usuario.senha != this.senha) {
      console.log('Senha incorreta!');
    } else if (usuario.user != this.user && usuario.senha == this.senha) {
      console.log('Usuário incorreto!');
    } else {
      console.log('Erro!');
    }
  }
}
