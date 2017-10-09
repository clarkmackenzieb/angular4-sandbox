import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-example',
  template: `
    <h1>Class Binding</h1>
    <h4 [class.special]="isSpecial">This class binding is special</h4>
    <h4 [ngClass]="currentClasses">This div is initially special and saveable</h4>
    <div [style.font-size]="styleSpecial ? 'x-large' : 'smaller'">Font size and style depends on styleSpecial being true</div>
    <div [ngStyle]="currentStyles">This div is an example of dynamic binding of styling</div>
    `
  ,
  styles: [
    `
      .special {
      color: green;
    }
      .saveable {
        text-transform: uppercase;
      }
    `
    // example of class binding to make the text green. Allows for multiple dynamic classes
  ]
})

export class NgclassExampleComponent  { // change these to true to see how they affect the text on screen.
  isSpecial = true;
  canSave = true;
  styleSpecial = true;
  currentClasses = {};
  currentStyles = {};

  constructor() {
    this.setCurrentClasses();
    this.setCurrentStyles();

  }

  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      special: this.isSpecial
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    };
  }
}
