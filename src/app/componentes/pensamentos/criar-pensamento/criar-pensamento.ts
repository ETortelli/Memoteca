import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css'
})
export class CriarPensamento implements OnInit {

  pensamento: PensamentoModel = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  }

  constructor(
    private servicePensamento: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.servicePensamento.criar(this.pensamento).subscribe(() => { });
    this.router.navigate(['/listarPensamento']);
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
