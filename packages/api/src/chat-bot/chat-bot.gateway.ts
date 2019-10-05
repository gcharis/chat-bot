import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from '@nestjs/websockets';
import { Client } from 'socket.io';
import { ChatBotService } from './chat-bot.service';
import { ResponseTypes } from './chat-bot-responses';
import { Inject } from '@nestjs/common';
import { AGENT_KEY } from './chat-bot.tokens';

@WebSocketGateway(81)
export class ChatBotGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private chatBotService: ChatBotService, @Inject(AGENT_KEY) private agentKey: string) {}
  @SubscribeMessage('new message')
  handleEvent(client: Client, data: string): string {
    return this.chatBotService.getResponse(ResponseTypes.GREETING);
  }
  handleConnection() {
    console.log('connected');
  }

  handleDisconnect() {
    console.log('closeeeeed');
  }
}
