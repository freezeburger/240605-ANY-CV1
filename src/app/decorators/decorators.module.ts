import { Injector, NgModule, Self, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentTheory } from './parent.theory';
import { ChildTheory } from './child.theory';
import { SideTheory } from './side.theory';
import { ConsumerTheory } from './consumer.theory';
import { DummyService } from './dummy.service';


@NgModule({
  declarations: [
    ParentTheory,
    ChildTheory,
    SideTheory,
    ConsumerTheory
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentTheory,
    ChildTheory,
    SideTheory,
    ConsumerTheory
  ]
})
export class DecoratorsModule {
  dms = inject(DummyService)

  constructor(
    // @Self()  dms:DummyService,
    injector:Injector
  ) {
    console.log(this.dms)
    // console.log(injector.get(DummyService))
  }
}
