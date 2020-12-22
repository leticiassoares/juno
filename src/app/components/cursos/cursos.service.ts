import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  baseUrl = 'http://localhost:8080/curso-api/curso/';


  constructor(private http: HttpClient) { }

  listarCursos(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  criarCurso(value: any): Observable<any> {
    return this.http.post(this.baseUrl, value);
  }

  deletarCursoPorID(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`);
  }

  editarCurso(value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`, value);
  }
}
