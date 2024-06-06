import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentTheory } from './parent.theory';
import { ChildTheory } from './child.theory';
import { SideTheory } from './side.theory';
import { ConsumerTheory } from './consumer.theory';


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
export class DecoratorsModule { }
