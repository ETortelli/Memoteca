import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from '../../minusculoValidators';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css'
})
export class CriarPensamento implements OnInit {

  formulario!: FormGroup;

  constructor(
    private servicePensamento: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
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
  }

  criarPensamento() {
    if (this.formulario.valid) {
      this.servicePensamento.criar(this.formulario.value).subscribe(() => {
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
