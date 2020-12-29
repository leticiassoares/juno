import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean;
  public mostrar = new EventEmitter<boolean>();
  private user = 'l';
  private senha = '1';

  constructor(private http: HttpClient, private router: Router) {}

  logar(usuario: Usuario) {
    if (usuario.user == this.user && usuario.senha == this.senha) {
      this.usuarioAutenticado = true;
      this.mostrar.emit(true);
      this.router.navigate(['/']);
    } else {
      console.log('Erro!');
      this.usuarioAutenticado = false;
      this.mostrar.emit(false);
    }
  }

  isAutenticado() {
    return this.usuarioAutenticado;
  }
}
