import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `<h1>Example of a pipe</h1>
  <p>My birthday is on {{ birthday | date | uppercase }}</p>
  <p>My birthday is on {{ birthday | date:"MM-dd-yyyy" }}</p>
  <p>I was born in {{ birthday | date:"yyyy" }}</p>
  <p>I love {{ 'cake' | uppercase }}</p>
  <p>I hate {{ 'CATS' | lowercase }}</p>
  <p>Your total is {{ total | currency:"GBP":"1" }}</p>
  <p>Our fee is {{ fee | percent }}</p>`
}) // notice the 'pipe' between the properties and the name of the pipe

export class PipesComponent {
  birthday = new Date(1981, 1, 15);
  total = 500;
  fee = 1; // the percent pipe goes by decimals
}
