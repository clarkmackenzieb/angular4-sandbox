import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <h1>Hello {{ fullName }} is {{ age }} years old.</h1>
    <h2>My name is {{ person.firstName }} {{ person.lastName }}</h2>
    <ul>
      <li>{{ 'Hello World' }}</li>
      <li>{{ 1+1 }}</li>
      <li>{{ showAge() }}</li>
    </ul>
  `// dynamically bind the property to the template, the {{}} is known as 'string interpolation'
})

export class DatabindingComponent  { // a com class is simply made up of properties and methods
  // Create some properties
  fullName = 'John Doe';
  age = 35;
  person = {
    firstName: 'Steve',
    lastName: 'Smith'
    };

  constructor() { // constructors are special methods that run when the com is initialized.
    console.log('Constructor ran...');
    //  this.age = 36;
    this.hasBirthday();
    this.hasBirthday();
  }

  hasBirthday() { // This method does not run automatically, it has to be called.
    this.age += 1;
  }

  showAge() { // This method was called in the string template
    return this.age;
  }
}
