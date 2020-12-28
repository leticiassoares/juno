import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../modules/login/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  logged: boolean;

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.authservice.usuarioAutenticado.subscribe(
      (response) => (this.logged = response)
    );
  }
}
