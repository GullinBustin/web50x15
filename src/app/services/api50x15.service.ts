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
  private comodinesUrl = 'comodines';
  private comodinUrl = 'comodin';
  private playersLifeUrl = 'players_life';
  private playersPointsUrl = 'players_points';

  private options = {withCredentials: true};

  constructor(private http: HttpClient) { }

  getQuestion(name): Observable<IPregunta> {
    return this.http.get<IPregunta>(this.baseUrl + this.pregutnaUrl + '/' + name, this.options)
      .map(response => response['question'])
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postNextLvl() {
    return this.http.post(this.baseUrl + this.nextLvlUrl, {}, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postStart(names) {
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

  postComodin(name, comodin) {
    const body = {
      pName: name,
      answer: comodin
    };
    return this.http.post(this.baseUrl + this.comodinUrl, body, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postComodinGoogle(name, query) {
    const body = {
      pName: name,
      answer: 'google',
      text: query
    };
    return this.http.post(this.baseUrl + this.comodinUrl, body, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  getComodines(name) {
    return this.http.get(this.baseUrl + this.comodinesUrl + '/' + name, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  getPlayersLife() {
    return this.http.get(this.baseUrl + this.playersLifeUrl, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  getPlayersPoints() {
    return this.http.get(this.baseUrl + this.playersPointsUrl, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }
}


