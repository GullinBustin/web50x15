import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  text: string;
  constructor(  public http: HttpClient) { }

  private url = 'https://raw.githubusercontent.com/GullinBustin/little_countdown/master/package.json';
  private url2 = 'http://localhost:3000/api';

  ngOnInit() {
    this.text = 'text';
  }

  getText() {
    this.text = moment().format();
    console.log('yeah 1');
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');

    this.http.get(this.url).subscribe((response) => {
      console.log(JSON.stringify(response));
    });

  }

}
