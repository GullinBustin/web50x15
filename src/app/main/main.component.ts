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
  player_name: string;

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
    });

  }


  handleAnswer(answer) {
    this.service_api50x15.postAnswer(this.player_name, answer)
      .subscribe(value => {
        const nextPlayer = this.service_api50x15.getNextPlayer();
        console.log(nextPlayer);
        if (nextPlayer === undefined) {
          console.log('SIIIIIIIIII');
          this.service_api50x15.postNextLvl()
            .subscribe( (value2: Response) => {
              if (value2['reason'] === 'OK') {
                console.log(this.service_api50x15.getCurrentPlayer());
                this.router.navigateByUrl('/main/' + this.service_api50x15.getNextPlayer());
                // window.location.reload();
              }
            });
        }else {
          console.log('NOOOOOOOOOO');
          this.router.navigateByUrl('/main/' + nextPlayer);
        }
      });
  }
  // private ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
