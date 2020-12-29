import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private baseUrl = 'http://localhost:8080/curso-api/curso/';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCursoById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  postCurso(value: any): Observable<any> {
    return this.http.post(this.baseUrl, value);
  }

  deleteCursoById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}`);
  }

  editCurso(value: any): Observable<any> {
    return this.http.put(this.baseUrl, value);
  }
}
