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
  joinFail = false;

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
    console.log(room + ' ' + user);
    if (user !== '') {
      this.joinFail = false;
      this.chat.joinRoom(user, room['uuid'])
      this.router.navigate([{outlets: {chat: ['chat']}}], {skipLocationChange: true});
    }else{
      this.joinFail = true;
    }
  }

  createRoom(newRoom, newUser) {
    const user = newUser.value.trim();
    console.log(newRoom + ' ' + user);
    if (user !== '') {
      this.joinFail = false;
      this.chat.createRoom(newRoom.value).subscribe( value => {
        const response = value;
        console.log(response);
        this.chat.joinRoom(user, response['room_uuid'])
        this.router.navigate([{outlets: {chat: ['chat']}}], {skipLocationChange: true});

      });
    }else{
      this.joinFail = true;
    }
  }
}
