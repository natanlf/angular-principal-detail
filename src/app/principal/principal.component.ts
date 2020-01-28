import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  feedback() {
    console.log('Resposta para o component pai', this.respostaFamilia.emit({"principal": false, "detalhes": true}));
  }

}
