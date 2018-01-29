import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popup-google',
  templateUrl: './popup-google.component.html',
  styleUrls: ['./popup-google.component.css']
})
export class PopupGoogleComponent implements OnInit {

  @Input() google_search: string;
  @Output() close = new EventEmitter();
  @Output() send =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hide_popup() {
    this.close.emit();
  }

  send_query(query) {
    this.send.emit(query);
  }
}
