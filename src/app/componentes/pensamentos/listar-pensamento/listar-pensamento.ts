import { Component, OnInit, ChangeDetectorRef, signal } from '@angular/core';
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

  constructor(
    private pensamentoService: PensamentoService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos.set(listaPensamentos); // Atualiza o signal
      // this.listaPensamentos = listaPensamentos;
    });
  }

}
