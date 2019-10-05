import { Injectable, Inject, HttpService } from '@nestjs/common';
import { ResponseTypes, ChatBotResponse } from './chat-bot-responses';
import { CHAT_BOT_RESPONSES, AGENT_KEY } from './chat-bot.tokens';

@Injectable()
export class ChatBotService {
  url = 'https://api.dialogflow.com/v2/';

  constructor(
    @Inject(CHAT_BOT_RESPONSES) private responses: ChatBotResponse,
    @Inject(AGENT_KEY) private readonly agentKey: string,
    private readonly http: HttpService,
  ) {
    this.http
      .get(this.url, {
        headers: {
          Authorization: `Bearer ${this.agentKey}`,
        },
      })
      .subscribe(console.log, console.log);
  }

  getResponse(responseType: ResponseTypes) {
    const responsesCount = this.responses[responseType].length;
    const rnd = (Math.random() * responsesCount).toFixed(0);
    return this.responses[responseType][rnd];
  }
}
