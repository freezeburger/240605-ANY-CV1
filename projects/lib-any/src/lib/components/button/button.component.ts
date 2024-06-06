import { Component } from '@angular/core';
import { AllowDisabled } from '../../directives/allow-disabled.directive';

@Component({
  selector: 'any-button',
  standalone: true,
  imports: [],
  template: `
      <ng-content></ng-content>
  `,
  styles: `
    :host{
      display: inline-block;
      background-color: lightgrey;
      font-family: Arial;
      text-align: center;
      line-height: 20px;
      padding: 10px;
      margin: 5px;
      border: 1px solid black;
      border-radius: 5px;
      height: 20px;
      min-width: 100px;
      cursor: pointer;
    }
  `,
  hostDirectives: [
    {
      directive: AllowDisabled,
      inputs: ['disabled']
    }
  ]
})
export class ButtonComponent {

}

