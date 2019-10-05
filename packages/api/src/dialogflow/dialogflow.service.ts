import { Injectable, Inject } from '@nestjs/common';
import { SESSION_CLIENT } from './dialogflow.tokens';
import { SessionsClient, DetectIntentRequest } from 'dialogflow';

@Injectable()
export class DialogflowService {
  constructor(@Inject(SESSION_CLIENT) private sessionClient: SessionsClient & { getSessionPath(): string }) {}
  async getIntent(text: string, ...options: Options[]) {
    const sessionPath = this.sessionClient.getSessionPath();
    const request: DetectIntentRequest = {
      session: sessionPath,
      queryInput: { text: { text, languageCode: 'en-US' } },
    };

    const response = await this.sessionClient.detectIntent(request);
    return response[0].queryResult.fulfillmentText;
  }
}

export interface Options {
  languageCode?: string;
}
