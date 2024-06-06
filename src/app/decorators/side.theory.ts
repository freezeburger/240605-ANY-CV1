import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side',
  template: `
    <p>
      side works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideTheory {

}
