import { Component } from '@angular/core';

@Component({
  // two commented out ways of doing a conditional first one using a template, and the other using a turnary
  // ? stands for if, and the : represents else
  selector: 'app-conditionals',
  template: `
    <h1>Hello
      <span *ngIf="showName">{{ name }}</span>
      <span *ngIf="!showName">Conditionals</span>
      <!--<span *ngIf="showName; else noName"> {{ name }}</span>-->
      <!--<ng-template #noName>Conditionals</ng-template>-->
      <!--<p>Hello {{ showName ? name : 'Conditionals' }}</p>-->
      <hr>
        <div [ngSwitch] = "greeting"> <!-- Switch statement example -->
          <div *ngSwitchCase="'1'">Hello switch</div>
          <div *ngSwitchCase="'2'">Hi there</div>
          <div *ngSwitchCase="'3'">What's up</div>
          <div *ngSwitchDefault>Hello</div>
        </div>
    </h1>`
})

export class ConditionalsComponent  {
  name: string = 'John Doe';
  showName: boolean = false; // Set this to true to see the name in the browser instead of world.
  greeting: number = 1;
}
