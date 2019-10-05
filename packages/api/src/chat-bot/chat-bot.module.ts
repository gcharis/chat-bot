import { Module, HttpModule } from '@nestjs/common';
import { ChatBotGateway } from './chat-bot.gateway';
import { ChatBotService } from './chat-bot.service';
import { chatBotResponses } from './chat-bot-responses';
import { config } from 'dotenv';
import { CHAT_BOT_RESPONSES, AGENT_KEY } from './chat-bot.tokens';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: CHAT_BOT_RESPONSES,
      useValue: chatBotResponses,
    },
    {
      provide: AGENT_KEY,
      useFactory() {
        return config().parsed.AGENT_KEY;
      },
    },
    ChatBotGateway,
    ChatBotService,
  ],
  exports: [ChatBotService],
})
export class ChatBotModule {}
