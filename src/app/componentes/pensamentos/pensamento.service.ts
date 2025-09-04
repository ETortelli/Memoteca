import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensamentoModel } from './pensamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(): Observable<PensamentoModel[]> {
    return this.http.get<PensamentoModel[]>(this.API);
  }

  criar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    return this.http.post<PensamentoModel>(this.API, pensamento);
  }

  // atualizar(pensamento: PensamentoModel): Observable<PensamentoModel> {
  //   return this.http.put<PensamentoModel>(`${this.API}/${pensamento.id}`, pensamento);
  // }

  // remover(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.API}/${id}`);
  // }
}