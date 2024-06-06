import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';



@NgModule({
  exports: [
    UserComponent
  ],
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
