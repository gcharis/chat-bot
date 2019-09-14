import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WsResponse,
} from '@nestjs/websockets';

@WebSocketGateway(81)
export class ChatBotGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @SubscribeMessage('click')
  handleEvent(client, data: unknown): WsResponse<unknown> {
    console.log(client);
    return { event: 'heh', data };
  }

  handleConnection() {
    console.log('connected');
  }

  handleDisconnect() {
    console.log('closeeeeed');
  }
}
