import { Component, OnInit } from '@angular/core';
import {IPregunta} from '../interfaces/pregunta';
import {Api50x15Service} from '../services/api50x15.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Data50x15Service} from '../services/data50x15.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  question: IPregunta;
  comodines;
  player_name: string;
  hidePopup = true;
  google_search: string;

  constructor(private service_api50x15: Api50x15Service,
              private service_data50x15: Data50x15Service,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.initialize_windows(params['name']);
    });
  }

  initialize_windows(param_name) {
    this.player_name = param_name;
    this.service_api50x15.getQuestion(this.player_name)
      .subscribe(question => {this.question = question;
        console.log(this.question);
      });
    this.service_api50x15.getComodines(this.player_name)
      .subscribe(res => {
        this.comodines = res['comodines'];
      });
  }

  next_turn() {
    this.google_search = null;
    const nextPlayer = this.service_data50x15.getNextPlayer();
    if (nextPlayer === -1) {
      this.service_api50x15.getPlayersLife()
        .subscribe( value => {
          this.service_data50x15.setPlayersLife(value['players_life']);
          const gameover = this.service_data50x15.isGameOver();
          if (gameover) {
            this.router.navigateByUrl('end_game', {skipLocationChange: true});
          }else {
            this.router.navigateByUrl('end_turn', {skipLocationChange: true});
          }
        });
    }else {
      if (nextPlayer === this.player_name) {
        this.initialize_windows(nextPlayer);
      }else {
        this.router.navigateByUrl('/main/' + nextPlayer, {skipLocationChange: true});
      }
    }
  }

  handleAnswer(answer) {
    console.log(answer);
    this.service_api50x15.postAnswer(this.player_name, answer)
      .subscribe(value => this.next_turn());
  }

  handleComodin(comodin) {
    console.log(comodin);
    if (comodin === 'google') {
      this.hidePopup = false;
      console.log('hidePopup', this.hidePopup);
    }else {
      this.service_api50x15.postComodin(this.player_name, comodin)
        .subscribe(value => {
          this.service_data50x15.useComodin(this.player_name, comodin);
          this.next_turn();
        });
    }
  }

  comodin_google(query) {
    console.log(query);
    this.service_api50x15.postComodinGoogle(this.player_name, query)
      .subscribe(value => {
        console.log(value);
        this.google_search = value['google_search']['data'];
      });
  }

  hide_google_popup() {
    this.hidePopup = true;
  }

  plantarse() {
    this.service_api50x15.plantarPlayer(this.player_name)
      .subscribe(value => this.next_turn());
  }

  // private ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
