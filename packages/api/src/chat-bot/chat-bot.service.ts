import { Injectable, Inject } from '@nestjs/common';
import { ResponseTypes, ChatBotResponse } from './chat-bot-responses';
import { CHAT_BOT_RESPONSES } from './chat-bot.tokens';
import { DialogflowService } from 'src/dialogflow/dialogflow.service';
import * as dialogflow from 'dialogflow';
import { v4 } from 'uuid';

@Injectable()
export class ChatBotService {
  constructor(private dialogflow: DialogflowService) {}

  async getResponse(message: string) {
    return this.dialogflow.getIntent(message);
  }
}
