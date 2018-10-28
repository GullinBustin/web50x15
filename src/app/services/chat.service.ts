import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs/Subject';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IPregunta} from '../interfaces/pregunta';


@Injectable()
export class ChatService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService, private http: HttpClient) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      });
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

  getRooms() {
    return this.http.get('/chat/get_rooms')
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

}
