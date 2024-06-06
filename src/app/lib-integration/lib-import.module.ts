import { NgModule } from '@angular/core';
import { AllowDisabled, ButtonComponent } from '@any/dev';

@NgModule({
  imports: [
    ButtonComponent,
    AllowDisabled
  ],
  exports: [
    ButtonComponent,
    AllowDisabled
  ]
})
export class LibImportModule { }
