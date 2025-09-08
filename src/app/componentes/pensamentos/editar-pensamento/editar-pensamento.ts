import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from '../../minusculoValidators';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css'
})
export class EditarPensamento implements OnInit {

  formulario!: FormGroup;
  id!: number;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3),
        minusculoValidator,
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3),
        minusculoValidator,
      ])],
      modelo: ['modelo1', Validators.compose([
        Validators.required,
      ])]
    });

    if (id) {
      this.id = parseInt(id);
      this.pensamentoService.buscarPorId(this.id).subscribe({
        next: (pensamento) => {          
          this.formulario.patchValue({
            conteudo: pensamento.conteudo,
            autoria: pensamento.autoria,
            modelo: pensamento.modelo
          });

          this.cdr.detectChanges();
        },
      });
    }
  }

  editarPensamento() {
    if (this.formulario.valid) {
      const pensamentoAtualizado: PensamentoModel = {
        id: this.id,
        conteudo: this.formulario.value.conteudo,
        autoria: this.formulario.value.autoria,
        modelo: this.formulario.value.modelo
      };

      this.pensamentoService.editar(pensamentoAtualizado).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
