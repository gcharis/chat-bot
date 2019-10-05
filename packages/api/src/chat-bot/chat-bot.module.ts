import { Module, HttpModule } from '@nestjs/common';
import { ChatBotGateway } from './chat-bot.gateway';
import { ChatBotService } from './chat-bot.service';
import { DialogflowModule } from '../dialogflow/dialogflow.module';

@Module({
  imports: [HttpModule, DialogflowModule],
  providers: [ChatBotGateway, ChatBotService],
  exports: [ChatBotService],
})
export class ChatBotModule {}
