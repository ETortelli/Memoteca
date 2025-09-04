import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css'
})
export class EditarPensamento implements OnInit {

  pensamento: PensamentoModel = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID do pensamento:', id);

    if (id) {
      this.pensamentoService.buscarPorId(parseInt(id)).subscribe({
        next: (pensamento) => {  
          this.pensamento = {
            id: pensamento.id,
            conteudo: pensamento.conteudo,
            autoria: pensamento.autoria,
            modelo: pensamento.modelo
          };

          this.cdr.detectChanges();
        },
      });
    }
  }

  editarPensamento() {
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
