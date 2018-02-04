import { Injectable } from '@angular/core';
import {IPregunta} from '../interfaces/pregunta';

@Injectable()
export class Data50x15Service {

  private alive_players = [];
  private dead_players = [];
  private current_players = [];
  private players_50pc = [];
  private players_change = [];
  private players_change_50pc = [];
  private current_type = 1;
  private players_points = [];

  private currentQuestion: IPregunta;
  private all_players = [];

  constructor() { }

  getNextPlayer() {
    if (this.current_players.length > 0) {
      this.current_type = 1;
      return this.current_players.pop();
    }
    if (this.players_50pc.length > 0) {
      this.current_type = 2;
      return this.players_50pc.pop();
    }
    if (this.players_change.length > 0) {
      this.current_type = 3;
      return this.players_change.pop();
    }
    if (this.players_change_50pc.length > 0) {
      this.current_type = 4;
      return this.players_change_50pc.pop();
    }
    return -1;
  }

  getAllPlayer() {
    return this.all_players;
  }

  useComodin(name, comodin) {
    switch (comodin) {
      case '50pc':
        if (this.current_type <= 2) {
          this.players_50pc.push(name);
        }else {
          this.players_change_50pc.push(name);
        }
        break;
      case 'change':
        this.players_change.push(name);
        break;
    }
  }

  setPlayersLife(ply_life) {
    let new_alive_players = [];
    let new_dead_players = [];
    for (const player in ply_life) {
      if (ply_life[player]['alive']) {
        new_alive_players.push(player);
      }else {
        new_dead_players.push(player);
      }
    }
    this.alive_players = new_alive_players;
    this.dead_players = new_dead_players;
  }

  isGameOver(){
    return this.alive_players.length === 0;
  }

  nextTurn() {
    this.current_players = this.alive_players.slice();
    this.current_players.reverse();
  }

  setPlayersPoints(ply_points) {
    this.players_points = ply_points;
  }

  startGame(ply_array) {
    this.all_players = ply_array.slice();
    this.alive_players = ply_array.slice();
    this.current_players = ply_array.slice();
    this.current_players.reverse();
  }
}
