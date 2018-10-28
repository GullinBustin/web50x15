import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})

export class ChatComponent implements OnInit {

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.getRooms().subscribe( (value: Response) => {
      console.log(value);
    });
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    });
  }

  sendMessage() {
    this.chat.sendMsg('Test Message');
  }
}
