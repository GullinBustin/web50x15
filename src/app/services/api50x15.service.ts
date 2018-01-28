import { Injectable } from '@angular/core';
import {IPregunta} from '../interfaces/pregunta';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class Api50x15Service {

  private baseUrl = 'http://localhost:3000/game/';
  private pregutnaUrl = 'pregunta';
  private startUrl = 'start';
  private nextLvlUrl = 'nextLVL';
  private answerUrl = 'answer';


  private players = [];
  private current_players = [];
  private players_50ps = [];
  private players_change = [];
  private players_change_50pc = [];

  private options = {withCredentials: true};

  private currentQuestion: IPregunta;

  constructor(private http: HttpClient) { }

  getQuestion(name): Observable<IPregunta> {
    return this.http.get<IPregunta>(this.baseUrl + this.pregutnaUrl + '/' + name, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postNextLvl() {
    console.log(this.players.slice());
    this.current_players = this.players.slice();
    return this.http.post(this.baseUrl + this.nextLvlUrl, {}, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postStart(names) {
    this.players = names.slice();
    return this.http.post(this.baseUrl + this.startUrl, {'pNames': names}, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postAnswer(name, key) {
    const body = {
      pName: name,
      answer: key
    };

    return this.http.post(this.baseUrl + this.answerUrl, body, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  getNextPlayer() {
    console.log(this.current_players);
    return this.current_players.pop();
  }

  getCurrentPlayer() {
    return this.current_players;
  }

}


