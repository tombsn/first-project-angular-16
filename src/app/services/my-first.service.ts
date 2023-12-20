import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Test',
      email: 'test@gmail.com',
      message: 'Hello Test',
    });
    this.insert({
      name: 'John',
      email: 'Johns@gmail.com',
      message: 'Hello John',
    });
    this.insert({
      name: 'Doe',
      email: 'Doe@gmail.com',
      message: 'Hello Doe',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
