import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [FormsModule,CommonModule,RouterModule],
}) 
export class ChatComponent {
  @ViewChild('chatBox') chatBox!: ElementRef;

  messages: { text: string; type: 'user' | 'ai' }[] = [
    { text: "Hello! How can I assist you?", type: 'ai' }
  ];
  userInput: string = '';

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({ text: this.userInput, type: 'user' });

    // Clear input field
    this.userInput = '';

    // Simulate AI response after a short delay
    setTimeout(() => {
      this.messages.push({ text: "I'm just a demo bot!", type: 'ai' });
      this.scrollToBottom();
    }, 1000);
  }

  scrollToBottom() {
    setTimeout(() => {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    }, 100);
  }
}
