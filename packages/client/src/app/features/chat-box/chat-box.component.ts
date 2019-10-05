import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  currentAuthor = 'Charis';
  newMessage = '';
  messages = [];

  constructor(private socket: Socket) {}

  ngOnInit() {}

  sendNewMessage(message: string) {
    this.messages.push({ author: 'Charis', content: message });
    this.socket.emit('new message', message, this.handleMessage.bind(this));
    this.newMessage = '';
  }

  handleMessage(response: string) {
    this.messages.push({ author: 'bot_423mnnsz63', content: response });
  }
}
