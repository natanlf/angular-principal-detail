import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  showPrincipal: boolean = true;
  showDetalhes: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaFilho) {
    this.showPrincipal = respostaFilho.principal;
    this.showDetalhes = respostaFilho.detalhes;
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }

}
