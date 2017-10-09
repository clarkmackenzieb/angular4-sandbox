import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  template: `
    <h1>Hello to the mouse events</h1>
    <button id="btn" (click)="fireEvent($event)">Click Event</button>
    <br>
    <button id="btn" (mouseover)="fireEvent($event)">Mouseover Event</button>
    <br>
    <button id="btn" (mousedown)="fireEvent($event)">Mousedown Event</button>
    <br>
    <button id="btn" (mouseup)="fireEvent($event)">Mouseup Event</button>
    <br>
    <button id="btn" (dblclick)="fireEvent($event)">Double click Event</button>
    <br>
    <button id="btn" (drag)="fireEvent($event)">Drag Event</button>
    <br>
    <button id="btn" (dragover)="fireEvent($event)">Drag over Event</button>
    <br>
  `
  // Drag and drag over are hard to pull off, work with these
})

export class MouseEventComponent  {
  fireEvent(e) { // e is a special property that displays information in the inspector
    // console.log('Button Clicked');
    console.log(e.type);
  }
}
