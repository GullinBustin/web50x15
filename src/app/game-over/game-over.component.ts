import { Component, OnInit } from '@angular/core';
import {Api50x15Service} from '../services/api50x15.service';
import {Router} from '@angular/router';
import {Data50x15Service} from '../services/data50x15.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  players_points = [];

  constructor(private service_api50x15: Api50x15Service,
              private service_data50x15: Data50x15Service,
              private router: Router) { }

  ngOnInit() {
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

  homeButton() {
    this.router.navigateByUrl('/start', { skipLocationChange: true });

  }

  restartButton() {
    const all_players = this.service_data50x15.getAllPlayer();
      this.service_api50x15.postStart(all_players)
      .subscribe(data => {
        console.log(data);
        this.service_api50x15.postNextLvl()
          .subscribe( (value: Response) => {
            console.log(all_players);
            this.service_data50x15.startGame(all_players);
            const next_player = this.service_data50x15.getNextPlayer();
            console.log(next_player);
            this.router.navigateByUrl('/main/' + next_player, { skipLocationChange: true });
          });

      });
  }
}
