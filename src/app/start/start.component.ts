import { Component, OnInit } from '@angular/core';
import {Api50x15Service} from '../api50x15.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [Api50x15Service]
})
export class StartComponent implements OnInit {

  constructor(private service_api50x15: Api50x15Service, private router: Router) { }

  ngOnInit() {
  }

  onClickMe() {
    this.service_api50x15.postStart(['yo'])
      .subscribe(data => {
         console.log(data);
         this.router.navigateByUrl('/main');

      });
  }
}
