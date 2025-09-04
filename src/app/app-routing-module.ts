import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamento } from '../app/componentes/pensamentos/listar-pensamento/listar-pensamento';
import { CriarPensamento } from '../app/componentes/pensamentos/criar-pensamento/criar-pensamento';
import { ExcluirPensamento } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento';

const routes: Routes = [
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: CriarPensamento },
  { path: 'listarPensamento', component: ListarPensamento },
  { path: 'pensamentos/excluirPensamento/:id', component: ExcluirPensamento }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
