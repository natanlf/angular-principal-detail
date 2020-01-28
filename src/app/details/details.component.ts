import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  feedback() {
    console.log('Resposta para o component pai', this.respostaFamilia.emit({"principal": true, "detalhes": false}));
  }

}
