import { ChangeDetectionStrategy, Component, ComponentRef, ContentChild, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildTheory } from './child.theory';

@Component({
  selector: 'app-parent',
  template: `
    <div>
        parent works!
        <code>{{ textChangeReception }}</code>
        <app-child [(text)]="textChangeReception"></app-child>
        <hr>

        <app-child
          color="blue"
          (textChange)=" textChangeReception = $event"></app-child>
        <app-child text=" From Parent "></app-child>
        <app-child [text]="  'From Parent' "></app-child>
    </div>
  `,
  styles: ``,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentTheory {
  textChangeReception = '';

  @ViewChild(ChildTheory) child!: ChildTheory;
  @ViewChildren(ChildTheory) children!: QueryList<ChildTheory>;

  ngAfterViewInit() {
    /*
      setTimeout(() => {
       console.log(this.child.text = 'Hello from parent');
     })
     */
    console.log(this.child);
    console.log(this.children);
  }


}
