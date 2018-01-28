import { Component, OnInit } from '@angular/core';
import {Api50x15Service} from '../services/api50x15.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  private players;

  constructor(private service_api50x15: Api50x15Service, private router: Router) { }

  ngOnInit() {
  }

  onClickMe() {
    this.players = ['Yo', 'Tu'];
    this.service_api50x15.postStart(this.players)
      .subscribe(data => {
         console.log(data);
         this.service_api50x15.postNextLvl()
           .subscribe( (value: Response) => {
             this.router.navigateByUrl('/main/' + this.service_api50x15.getNextPlayer());
           });

      });
  }
}
