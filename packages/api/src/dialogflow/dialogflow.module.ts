import { Module } from '@nestjs/common';
import { DialogflowService } from './dialogflow.service';
import { SessionsClient } from 'dialogflow';
import { v4 as createUUID } from 'uuid';
import { SESSION_CLIENT, PROJECT_ID } from './dialogflow.tokens';
import { config } from 'dotenv';

@Module({
  providers: [
    DialogflowService,
    {
      provide: PROJECT_ID,
      useFactory() {
        return config().parsed.PROJECT_ID;
      },
    },
    {
      provide: SESSION_CLIENT,
      useFactory(projectId: string) {
        const sessionsClient = new SessionsClient();
        const sessionId = createUUID();

        Object.defineProperty(sessionsClient, 'getSessionPath', {
          enumerable: true,
          writable: false,
          configurable: false,
          value() {
            return sessionsClient.sessionPath(projectId, sessionId);
          },
        });

        return sessionsClient;
      },
      inject: [PROJECT_ID],
    },
  ],
  exports: [DialogflowService],
})
export class DialogflowModule {
  constructor() {}
}
