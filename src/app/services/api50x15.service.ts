import { Injectable } from '@angular/core';
import {IPregunta} from '../interfaces/pregunta';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class Api50x15Service {

  private baseUrl = 'http://localhost:3000/game/';
  private pregutnaUrl = 'pregunta';
  private startUrl = 'start';
  private nextLvlUrl = 'nextLVL';
  private answerUrl = 'answer';


  private alive_players = [];
  private dead_players = [];
  private current_players = [];
  private players_50ps = [];
  private players_change = [];
  private players_change_50pc = [];

  private options = {withCredentials: true};

  private currentQuestion: IPregunta;

  constructor(private http: HttpClient) { }

  getQuestion(name): Observable<IPregunta> {
    return this.http.get<IPregunta>(this.baseUrl + this.pregutnaUrl + '/' + name, this.options)
      .map(response => response['question'])
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postNextLvl() {
    console.log('Jugadores Vivos:')
    console.log(this.alive_players.slice());
    this.current_players = this.alive_players.slice();
    return this.http.post(this.baseUrl + this.nextLvlUrl, {}, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postStart(names) {
    this.alive_players = names.slice();
    return this.http.post(this.baseUrl + this.startUrl, {'pNames': names}, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postAnswer(name, key) {
    const body = {
      pName: name,
      answer: key
    };
    this.http.post(this.baseUrl + this.answerUrl, body, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .subscribe(value => {
        if (value['successful']) {
          console.log('Congrat');
        }else {
          const index = this.alive_players.indexOf(name);
          console.log(index);
          if (index > -1) {
            this.alive_players.splice(index, 1);
          }
          console.log(this.alive_players);
          this.dead_players.push(name);
          console.log('sorry');
        }
      });
  }

  getNextPlayer() {
    console.log(this.current_players);
    return this.current_players.pop();
  }

  getCurrentPlayer() {
    return this.current_players;
  }
}


