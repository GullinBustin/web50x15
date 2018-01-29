import { Component, OnInit } from '@angular/core';
import {Api50x15Service} from '../services/api50x15.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-end-turn',
  templateUrl: './end-turn.component.html',
  styleUrls: ['./end-turn.component.css']
})
export class EndTurnComponent implements OnInit {

  constructor(private service_api50x15: Api50x15Service,
              private router: Router) { }

  ngOnInit() {

  }

  onClickMe() {
    this.service_api50x15.postNextLvl()
      .subscribe( (value: Response) => {
        console.log(value);
        if (value['reason'] === 'OK') {
          if (value['game_ends'] === false) {
            console.log(this.service_api50x15.getCurrentPlayer());
            const next_player = this.service_api50x15.getNextPlayer();
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
