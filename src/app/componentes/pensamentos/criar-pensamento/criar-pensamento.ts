import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css'
})
export class CriarPensamento implements OnInit {

  formulario!: FormGroup

  constructor(
    private servicePensamento: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1']
    });
  }

  criarPensamento() {
    this.servicePensamento.criar(this.formulario.value).subscribe(() => { });
    this.router.navigate(['/listarPensamento']);
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
