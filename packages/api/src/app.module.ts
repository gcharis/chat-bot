import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatBotModule } from './chat-bot/chat-bot.module';
import { DialogflowModule } from './dialogflow/dialogflow.module';

@Module({
  imports: [ChatBotModule, DialogflowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
