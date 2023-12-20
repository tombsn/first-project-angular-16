import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss'],
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmited: boolean = false;
  messages: Array<any> = [];

  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmited = this.messages.length > 0;
  }

  onSubmit(): void {
    this.isSubmited = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  deleteMessage(index: number): void {
    this.service.deleteMessage(index);
  }
}
