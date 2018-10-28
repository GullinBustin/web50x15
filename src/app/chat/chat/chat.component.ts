import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})

export class ChatComponent implements OnInit {

  messages = [];

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.getMessageEvent().subscribe((message) => {
      this.messages.push(message)
      console.log('user: ' + message['user'] + ' message: ' + message['message']);
    });
  }

  sendMessage(text) {
    this.chat.sendMsg('message', {msg: text.value});
    text.value = '';
  }
}
