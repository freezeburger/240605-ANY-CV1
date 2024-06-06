import { ChangeDetectionStrategy, Component, ComponentRef, ContentChild, Host, HostBinding, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildTheory } from './child.theory';

@Component({
  selector: 'app-parent',
  template: `
    <div>
        <app-child title="First Child" custom>
          <h3 #title> Hello from parent </h3>
          <app-side></app-side>
          <app-side></app-side>
          <app-side></app-side>
        </app-child>
        <hr>
        parent works!
        <code>{{ textChangeReception }}</code>
        <app-child [(text)]="textChangeReception" title></app-child>
        <hr>

        <app-child
          color="blue"
          (textChange)=" textChangeReception = $event"></app-child>
        <app-child text=" From Parent "></app-child>
        <app-child [text]="  'From Parent' "></app-child>

    </div>
  `,
  styles: `
    :host{ display: flex }
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentTheory {
  textChangeReception = '';

  @HostBinding('style.color') color = 'red';
  @HostBinding('attr.title') title = 'red';

  @ViewChild(ChildTheory) child!: ChildTheory;
  @ViewChildren(ChildTheory) children!: QueryList<ChildTheory>;

  @HostListener('window:click', ['$event'])
  handClick(event: PointerEvent) {
    console.log('HostListener', event);
  }

  @HostListener('document:keyup.control.enter', ['$event'])
  handKeyStroke(event: KeyboardEvent) {
    console.log('HostListener', event);
  }


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
