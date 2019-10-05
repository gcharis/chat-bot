import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from '@nestjs/websockets';
import { Client } from 'socket.io';
import { ChatBotService } from './chat-bot.service';

@WebSocketGateway(81)
export class ChatBotGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private chatBotService: ChatBotService) {}
  @SubscribeMessage('new message')
  handleEvent(client: Client, data: string) {
    return this.chatBotService.getResponse(data);
  }
  handleConnection() {
    console.log('connected');
  }

  handleDisconnect() {
    console.log('closeeeeed');
  }
}
