import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { CriarPensamento } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPensamento } from './componentes/pensamentos/listar-pensamento/listar-pensamento';
import { Pensamento } from './componentes/pensamentos/pensamento/pensamento';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExcluirPensamento } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento';
import { EditarPensamento } from './componentes/pensamentos/editar-pensamento/editar-pensamento';
import { BotaoCarregarMais } from './componentes/pensamentos/listar-pensamento/botao-carregar-mais/botao-carregar-mais';

@NgModule({
  declarations: [
    App,
    Home,
    Cabecalho,
    Rodape,
    CriarPensamento,
    ListarPensamento,
    Pensamento,
    ExcluirPensamento,
    EditarPensamento,
    BotaoCarregarMais
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
