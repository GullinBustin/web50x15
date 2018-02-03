import { Component, OnInit } from '@angular/core';
import {Api50x15Service} from '../services/api50x15.service';
import {Router} from '@angular/router';
import {Data50x15Service} from '../services/data50x15.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  players = [];

  constructor(private service_api50x15: Api50x15Service,
              private service_data50x15: Data50x15Service,
              private router: Router) { }

  ngOnInit() {
  }

  onClickMe() {
    this.service_api50x15.postStart(this.players)
      .subscribe(data => {
         console.log(data);
         this.service_api50x15.postNextLvl()
           .subscribe( (value: Response) => {
             console.log(this.players);
             this.service_data50x15.startGame(this.players);
             const next_player = this.service_data50x15.getNextPlayer();
             console.log(next_player);
             this.router.navigateByUrl('/main/' + next_player, { skipLocationChange: true });
           });

      });
  }


  handlePlayers(players) {
    this.players = players;
  }
}
