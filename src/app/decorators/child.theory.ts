import { Attribute, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import { SideTheory } from './side.theory';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works - {{ text }} !
      <button (click)="textChange.emit( text + '*')">Click me</button>
      <ng-content></ng-content>
    </p>
  `,
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTheory {
  @Input() color: 'blue' | 'cyan' | 'violet' = 'blue';
  @Input() text = 'child';
  @Output() textChange = new EventEmitter<string>();

  @ContentChild('title') titleElement!: HTMLHeadingElement;
  @ContentChildren(SideTheory) sideComponents!: SideTheory;

  constructor(
    @Attribute('title') title:string,
    @Attribute('custom') custom:string,
  ) {
    console.log('Attribute', title, custom)
  }

  ngAfterContentInit() {
    console.log(this.titleElement);
    console.log(this.sideComponents);
  }
}
