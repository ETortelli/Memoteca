import { Component, OnInit, signal } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css'
})
export class ListarPensamento implements OnInit{
  listaPensamentos = signal<PensamentoModel[]>([]);
  // listaPensamentos: PensamentoModel[] = [];
  paginaAtual: number = 1;

  constructor(
    private pensamentoService: PensamentoService,
  ) { }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos.set(listaPensamentos); // Atualiza o signal
      // this.listaPensamentos = listaPensamentos;
    });

    
      // this.pensamentoService.listar(this.paginaAtual).subscribe((listaPensamentos) => {
        // this.listaPensamentos = listaPensamentos;
      // });
  }

}
