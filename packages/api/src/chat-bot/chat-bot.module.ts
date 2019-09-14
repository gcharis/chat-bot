import { Module } from '@nestjs/common';
import { ChatBotGateway } from './chat-bot.gateway';

@Module({
  providers: [ChatBotGateway],
})
export class ChatBotModule {}
