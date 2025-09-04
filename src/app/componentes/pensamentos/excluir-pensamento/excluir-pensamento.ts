import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: false,
  templateUrl: './excluir-pensamento.html',
  styleUrl: './excluir-pensamento.css'
})
export class ExcluirPensamento implements OnInit {

  pensamento: PensamentoModel = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  };

  constructor(
    private pensamentoService: PensamentoService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
