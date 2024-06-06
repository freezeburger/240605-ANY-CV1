import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works - {{ text }} !
      <button (click)="textChange.emit( text + '*')">Click me</button>
    </p>
  `,
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTheory {
  @Input() color: 'blue' | 'cyan' | 'violet' = 'blue';
  @Input() text = 'child';
  @Output() textChange = new EventEmitter<string>();
}
