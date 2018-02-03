import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-player-menu',
  templateUrl: './player-menu.component.html',
  styleUrls: ['./player-menu.component.css']
})
export class PlayerMenuComponent implements OnInit {

  @Output() changePlayers = new EventEmitter();
  players = [];

  constructor() { }

  ngOnInit() {
  }

  removePlayer(player) {
    this.players.splice(this.players.indexOf(player), 1);
    this.changePlayers.emit(this.players);
  }

  addUser(input) {
    console.log(input.value);
    this.players.push(input.value);
    input.value = '';
    this.changePlayers.emit(this.players);
  }
}
