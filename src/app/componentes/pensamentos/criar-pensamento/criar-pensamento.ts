import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css'
})
export class CriarPensamento implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Pensamento criado com sucesso!");
  }

  cancelar(){
    alert("Ação cancelada!");
  }

}
