import { Component, OnInit } from '@angular/core';
import {Api50x15Service} from '../services/api50x15.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Data50x15Service} from '../services/data50x15.service';

@Component({
  selector: 'app-end-turn',
  templateUrl: './end-turn.component.html',
  styleUrls: ['./end-turn.component.css']
})
export class EndTurnComponent implements OnInit {

  players_points = [];

  constructor(private service_api50x15: Api50x15Service,
              private service_data50x15: Data50x15Service,
              private router: Router) { }

  ngOnInit() {
    this.service_api50x15.getPlayersLife()
      .subscribe( value => {
        this.service_data50x15.setPlayersLife(value['players_life']);
      });
    this.service_api50x15.getPlayersPoints()
      .subscribe(value => {
        let new_player_points = [];
        for (let player in value['players_points']) {
          console.log(player);

          new_player_points.push({'name': player, 'points': value['players_points'][player]['points']});
        }
        this.players_points = new_player_points;
        this.service_data50x15.setPlayersPoints(new_player_points);
      });
  }

  onClickMe() {
    this.service_api50x15.postNextLvl()
      .subscribe( (value: Response) => {
        this.service_data50x15.nextTurn();
        if (value['reason'] === 'OK') {
          if (value['game_ends'] === false) {
            const next_player = this.service_data50x15.getNextPlayer();
            this.router.navigateByUrl('/main/' + next_player, { skipLocationChange: true });
            // window.location.reload();
          } else {
            console.log('Game Over');
            // this.router.navigateByUrl('/start');
          }
        } else {
          console.log('Turn not ends');
        }
      });
  }

}
