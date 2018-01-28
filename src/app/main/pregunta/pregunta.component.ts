///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPregunta} from '../../interfaces/pregunta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input() pregunta: IPregunta;
  @Output() answerSelect = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  clickAnswer(key) {
    this.answerSelect.emit(key);
  }
}
