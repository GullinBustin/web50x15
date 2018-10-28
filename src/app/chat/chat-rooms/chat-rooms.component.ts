import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.sass']
})
export class ChatRoomsComponent implements OnInit {

  rooms = [];

  constructor(private chat: ChatService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.chat.getRooms().subscribe( value => {
     this.rooms = value['rooms'];
    });
  }

  joinRoom(room, newUser) {
    const user = newUser.value.trim();
    console.log(room + ' ' + user );
    this.router.navigate([{ outlets: { chat: ['chat'] } }]);
  }
}
