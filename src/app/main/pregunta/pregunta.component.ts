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
    console.log(this.pregunta);
    console.log(key);
    this.answerSelect.emit(key);
  }
}
