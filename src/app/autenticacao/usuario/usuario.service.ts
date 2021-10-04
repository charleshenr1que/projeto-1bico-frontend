import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  url = 'http://localhost:8080/users/log';

  constructor(private httpCliente: HttpClient, private token: TokenService) {}

  retornarUser() {
    let user = this.token.retornarToken();
    return this.httpCliente.get(`http://localhost:8080/users?userName=${user}`);
  }

  salvarToken(token: string) {
    this.token.salvarToken(token);
  }

  logout() {
    this.token.excluiToken();
  }

  estaLogado() {
    return this.token.possuiToken();
  }
}
