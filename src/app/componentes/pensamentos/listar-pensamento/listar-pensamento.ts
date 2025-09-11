import { Component, OnInit, signal } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css'
})
export class ListarPensamento implements OnInit {
  // listaPensamentos = signal<PensamentoModel[]>([]);
  listaPensamentos: PensamentoModel[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(
    private pensamentoService: PensamentoService,
  ) { }

  ngOnInit(): void {
    // this.pensamentoService.listar(this.paginaAtual).subscribe((listaPensamentos) => {
    // this.listaPensamentos.set(listaPensamentos); // Atualiza o signal
    // this.listaPensamentos = listaPensamentos;
    // });


    this.pensamentoService.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!this.listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    });


    // this.pensamentoService.listar(++this.paginaAtual).subscribe((listaPensamentos) => {
    //   this.listaPensamentos.update((pensamentos) => [...pensamentos, ...listaPensamentos]);
    //   this.haMaisPensamentos = listaPensamentos.length > 0;
    // });      
    };

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
