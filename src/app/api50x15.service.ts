import { Injectable } from '@angular/core';
import {IPregunta} from './interfaces/pregunta';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class Api50x15Service {

  private pregutnaUrl = 'http://localhost:3000/player/pregunta';
  private startUrl = 'http://localhost:3000/player/start';

  private options = {withCredentials: true};

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<IPregunta> {
    return this.http.get<IPregunta>(this.pregutnaUrl, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  postStart(names) {

    return this.http.post(this.startUrl, {'pNames': names}, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

}


