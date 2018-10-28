import { Component } from '@angular/core';
import {Api50x15Service} from './services/api50x15.service';
import {Data50x15Service} from './services/data50x15.service';
import {WebsocketService} from './services/websocket.service';
import {ChatService} from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Api50x15Service, Data50x15Service, WebsocketService, ChatService]
})
export class AppComponent {
  title = 'app';
}
