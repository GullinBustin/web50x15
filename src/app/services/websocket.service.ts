import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// import * as io from 'socket.io-client';
import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost/';
const SERVER_PATH = '/chat/socket.io';

@Injectable()
export class WebsocketService {

  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL, {path: SERVER_PATH});
  }

  public send(event, message) {
    this.socket.emit(event, message);
  }

  public sendMessage(message) {
    this.socket.emit('message', message);
  }

  public onMessage() {
    return new Observable(observer => {
      this.socket.on('message', (data) => observer.next(data));
    });
  }

  public onEvent(event) {
    return new Observable(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
