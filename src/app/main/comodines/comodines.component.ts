import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-comodines',
  templateUrl: './comodines.component.html',
  styleUrls: ['./comodines.component.css']

})
export class ComodinesComponent implements OnInit {

  @Input() comodines;
  @Output() comodinSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  clickComodin(comodin) {
    this.comodinSelect.emit(comodin);
  }
}
