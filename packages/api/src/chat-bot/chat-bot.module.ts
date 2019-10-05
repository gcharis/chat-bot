import { Module, HttpModule } from '@nestjs/common';
import { ChatBotGateway } from './chat-bot.gateway';
import { ChatBotService } from './chat-bot.service';
import { chatBotResponses } from './chat-bot-responses';
import { CHAT_BOT_RESPONSES } from './chat-bot.tokens';
import { DialogflowModule } from 'src/dialogflow/dialogflow.module';

@Module({
  imports: [HttpModule, DialogflowModule],
  providers: [
    {
      provide: CHAT_BOT_RESPONSES,
      useValue: chatBotResponses,
    },
    ChatBotGateway,
    ChatBotService,
  ],
  exports: [ChatBotService],
})
export class ChatBotModule {}
