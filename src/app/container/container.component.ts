import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition, animate } from '@angular/animations';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 0.5}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    
    trigger(
      'enterAnimationGrid', [
        transition(':enter', [
          style({transform: 'translateX(-10%)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class ContainerComponent implements OnInit {

  showPrincipal: boolean = true;
  showDetalhes: boolean = false;
  detailsVisibility: string = 'hidden'

  constructor() { }

  ngOnInit() {
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaFilho) {
    this.showPrincipal = respostaFilho.principal;
    this.showDetalhes = respostaFilho.detalhes;
    //this.showDetalhes ? this.detailsVisibility = 'visible' : this.detailsVisibility = 'hidden';
    console.log(this.detailsVisibility)
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }

}
