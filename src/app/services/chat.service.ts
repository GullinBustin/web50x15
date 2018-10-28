import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs/Subject';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ChatService {

  messages: Subject<any>;
  testEvent;
  messageEvent;
  private options = {withCredentials: true};

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService, private http: HttpClient) {
    this.wsService.initSocket();
    this.testEvent = this.wsService.onEvent('test')
      .do(data => console.log('Do: ' + JSON.stringify(data)));
    this.messageEvent = this.wsService.onMessage()
      .do(data => console.log('Do: ' + JSON.stringify(data)));
  }


  getTestEvent() {
    return this.testEvent;
  }

  getMessageEvent() {
    return this.messageEvent;
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(event, msg) {
    this.wsService.send(event, msg);
  }

  joinRoom(username, roomUuid) {
    this.wsService.send('enter_room', {name: username, room_uuid: roomUuid});
  }

  getRooms() {
    return this.http.get('/chat/get_rooms')
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

  createRoom(roomName) {
    const body = {
      room_name: roomName
    };
    return this.http.post('/chat/create_room', body, this.options)
      .do(data => console.log('All: ' + JSON.stringify(data)));
  }

}
