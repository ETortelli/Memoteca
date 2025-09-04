import { Component, Input } from '@angular/core';
import { PensamentoModel } from '../pensamento.model';

@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css'
})
export class Pensamento {

  @Input() pensamento: PensamentoModel = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Eduardo Tortelli',
    modelo: 'modelo3'
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    
    return 'pensamento-p';
  }

}
