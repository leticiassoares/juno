import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuarioLogado: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuarioLogado = new FormGroup({
      user: new FormControl(null),
      senha: new FormControl(null),
    });
  }

  onSubmit() {
    this.authService.logar(this.usuarioLogado.value);
  }
}
