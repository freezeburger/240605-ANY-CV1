import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentTheory } from './parent.theory';
import { ChildTheory } from './child.theory';
import { SideTheory } from './side.theory';


@NgModule({
  declarations: [
    ParentTheory,
    ChildTheory,
    SideTheory
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentTheory,
    ChildTheory,
    SideTheory
  ]
})
export class DecoratorsModule { }
