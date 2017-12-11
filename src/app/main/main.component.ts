import { Component, OnInit } from '@angular/core';
import {IPregunta} from '../interfaces/pregunta';
import {Api50x15Service} from '../api50x15.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [Api50x15Service]
})
export class MainComponent implements OnInit {

  question: IPregunta;

  constructor(private service_api50x15: Api50x15Service) { }

  ngOnInit() {
    this.service_api50x15.getQuestion()
      .subscribe(question => {this.question = question; });
  }

}
