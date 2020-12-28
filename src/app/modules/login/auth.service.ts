import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public usuarioAutenticado = new EventEmitter<boolean>();
  private user = 'leticiassoares';
  private senha = '123456';

  constructor(private http: HttpClient, private router: Router) {}

  logar(usuario: Usuario) {
    if (usuario.user == this.user && usuario.senha == this.senha) {
      this.usuarioAutenticado.emit(true);
      this.router.navigate(['/']);
    } else if (usuario.user == this.user && usuario.senha != this.senha) {
      console.log('Senha incorreta!');
      this.usuarioAutenticado.emit(false);
    } else if (usuario.user != this.user && usuario.senha == this.senha) {
      console.log('Usuário incorreto!');
      this.usuarioAutenticado.emit(false);
    } else {
      console.log('Erro!');
      this.usuarioAutenticado.emit(false);
    }
  }
}
