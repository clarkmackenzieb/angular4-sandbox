import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-object-interface',
  template: `<h1>Hello to objects and interfaces</h1>`
})

export class ObjectInterfaceComponent {
  customer: Customer;
  customers: Customer[];

  constructor() {
    this.customer = { // this customer model needs to follow the interface model in order to work.
      id: 1,
      name: 'Jason David',
      email: 'jason@gmail.com'  // none to these properties can be missing, blank, or the wrong type.
    };

    this.customers = [  // this model is an array of objects
      {
        id: 1,
        name: 'Jason David',
        email: 'jason@gmail.com'
      },
      {
        id: 2,
        name: 'Alex Ben',
        email: 'alex@gmail.com'
      },
      {
        id: 3,
        name: 'Tony Red',
        email: 'tony@gmail.com'
      },
      {
        id: 4,
        name: 'Jessica Small',
        email: 'jessica@gmail.com'
      },
      {
        id: 5,
        name: 'Lisa Jen',
        email: 'lisa@gmail.com'
      }
    ];
  }
}

// this interface can be exported so that it can be imported and used by other coms
// interface Customer  {
//   id: number;
//   name: string;
//   email: string;
// }

// It is best to import interfaces that have large sets of different data or property types, such as arrays.
