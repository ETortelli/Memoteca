import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensamentoModel } from './pensamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string): Observable<PensamentoModel[]> {
    const itensPorPagina = 6;

    let params = new HttpParams().set('_page', pagina).set('_limit', itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    return this.http.get<PensamentoModel[]>(`${this.API}`, { params });
  }

  criar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    return this.http.post<PensamentoModel>(this.API, pensamento);
  }

  editar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    return this.http.put<PensamentoModel>(`${this.API}/${pensamento.id}`, pensamento);
  }

  excluir(id: number): Observable<PensamentoModel> {
    return this.http.delete<PensamentoModel>(`${this.API}/${id}`);
  }

  buscarPorId(id: number): Observable<PensamentoModel> {
    return this.http.get<PensamentoModel>(`${this.API}/${id}`);
  }
}
