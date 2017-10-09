// Basic component template setup, the com library needs to be imported so that angular knows that this a com.
import { Component } from '@angular/core';

@Component({ // the properties below are properties of the component decorator.
  selector: 'app-practice',
  template: `<h1>Hello World</h1>` // template string because of the back ticks.
})

export class PracticeComponent  {
  // basic class, class name should match the name of the file with every other word capitalized.
  // add your constructors to the export class as well.
}

// Once a com is created, don't forget to add it to the @NgModule in app.module.ts
// Putting it in the Module file will embed it into the root app com
