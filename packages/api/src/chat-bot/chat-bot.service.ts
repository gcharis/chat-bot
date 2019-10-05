import { Injectable } from '@nestjs/common';
import { DialogflowService } from 'src/dialogflow/dialogflow.service';

@Injectable()
export class ChatBotService {
  constructor(private dialogflow: DialogflowService) {}

  async getResponse(message: string) {
    return this.dialogflow.getIntent(message);
  }
}
