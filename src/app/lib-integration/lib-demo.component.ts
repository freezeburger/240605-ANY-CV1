import { Component } from '@angular/core';

@Component({
  selector: 'app-lib-demo',
  template: `
    <any-button [disabled]="true">TEXT</any-button>

    <h1 allow-disabled [disabled]="true">Lib Integration</h1>
  `,
  styles: ``
})
export class LibDemoComponent {

}
