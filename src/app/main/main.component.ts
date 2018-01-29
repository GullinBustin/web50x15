import { Component, OnInit } from '@angular/core';
import {IPregunta} from '../interfaces/pregunta';
import {Api50x15Service} from '../services/api50x15.service';
import {ActivatedRoute, Router} from '@angular/router';


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
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.player_name = params['name'];
      this.service_api50x15.getQuestion(this.player_name)
        .subscribe(question => {this.question = question;
          console.log(this.question);
        });
      this.service_api50x15.getComodines(this.player_name)
        .subscribe(res => {
          this.comodines = res['comodines'];
        });
    });

  }

  next_turn() {
    const nextPlayer = this.service_api50x15.getNextPlayer();
    console.log(nextPlayer);
    if (nextPlayer === undefined) {
      this.router.navigateByUrl('end_turn', { skipLocationChange: true });
    }else {
      this.router.navigateByUrl('/main/' + nextPlayer, { skipLocationChange: true });
    }
  }

  handleAnswer(answer) {
    this.service_api50x15.postAnswer(this.player_name, answer);
    this.next_turn();
  }

  handleComodin(comodin) {

    console.log(comodin);
    // this.service_api50x15.postComodin(this.player_name, comodin, this.comodin_google);
    if (comodin === 'google') {
      // this.next_turn();
      this.hidePopup = false;
      console.log('hidePopup', this.hidePopup);
    }
  }

  comodin_google(query) {
    console.log(query);
    this.service_api50x15.postComodinGoogle(this.player_name, query)
      .subscribe(value => {
        console.log(value);
        this.google_search = value['google_search']['data'][0]['description'];
      });
  }

  hide_google_popup() {
    this.hidePopup = true;
  }

  // private ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
