import {Component, OnInit, ViewChild, AfterViewChecked} from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})

export class ChatComponent implements OnInit, AfterViewChecked {

  messages = [];

  @ViewChild('chatScroll') private chatScroll;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.getMessageEvent().subscribe((message) => {
      this.messages.push(message);
      console.log('user: ' + message['user'] + ' message: ' + message['message']);
    });
  }

  ngAfterViewChecked() {
    this.chatScroll.nativeElement.scrollTop = this.chatScroll.nativeElement.scrollHeight;
  }

  sendMessage(text) {
    this.chat.sendMsg('message', {msg: text.value});
    text.value = '';
  }
}
