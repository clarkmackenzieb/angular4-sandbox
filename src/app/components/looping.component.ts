import { Component } from '@angular/core';

@Component({
  selector: 'app-looping',
  template: `
    <h1>Looping array/list example</h1>
    {{ people }}
    <ul>
      <li *ngFor="let person of people">
        {{ person }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let person of people; let i = index"> <!--gives the index(number) of each item-->
        {{ i + 1 }} {{ person }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let person of people2"> <!--accessing the object people2-->
        {{ person.firstName }} {{ person.lastName }}
      </li>
    </ul>
  `
})

export class LoopingComponent {
  people = ['Rick', 'Daryl', 'Carl', 'Glen'];

  people2 = [ // array of objects
    {
      firstName: 'Rick',
      lastName: 'Grimes'
    },
    {
      firstName: 'Jimmy',
      lastName: 'Paine'
    },
    {
      firstName: 'Sammy',
      lastName: 'Davis'
    }
  ];

  constructor() {
    this.people[2] = 'Carol'; // we can change the values of the array above with constructors or methods
  }
}
