import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  template: `<h1>Hello World in typescript</h1>`
})

export class TypescriptComponent  {
  name: string = 'Harry';
  age: number = 35;
  hasChildren: boolean = true;
  city: any = 'Boston';
  myNumbersArray: number[] = [1, 2, 3]; // this array will only take numbers
  myStringsArray: string[] = ['hello', 'world']; // this array will only take strings
  myAnyArray: any[] = [1, 2, 'hello']; // this array takes any types
  myTuple: [string, number] = ['hello', 3]; // this array will take what type is specified, and the amount (2) for this example.
  unusable: void = undefined;
  undefine: undefined = undefined;
  isNull: null = null;

  constructor() {

  }
}
