import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  currentAuthor = 'Charis';
  newMessage = '';
  messages = [{ author: 'bot_423mnnsz63', content: 'Hello!' }, { author: 'Charis', content: 'Hi!' }];

  constructor() {}

  ngOnInit() {}

  sendNewMessage(message: string) {
    this.messages.push({ author: 'Charis', content: message });
    this.newMessage = '';
  }
}
