export enum ResponseTypes {
  GREETING = 'GREETING',
}

export interface ChatBotResponse {
  [responseType: string]: string[];
}

export const chatBotResponses: ChatBotResponse = {
  [ResponseTypes.GREETING]: ['Hello back!', 'Howdy!', 'Yo'],
};
