import { Component } from '@angular/core';

@Component({
  selector: 'app-change-event',
  template: `
    <h1>Changing properties</h1>
    <button (click)="changeValue()">Make this appear and disappear by changing its value</button>
    <div *ngIf="value">
      <h1>{{ text }}</h1>
    </div>
  `
})

export class ChangeEventComponent {
  text: string = 'Property changed!'
  value: boolean = true;

  changeValue() {
    this.value = !this.value;
  }
}

