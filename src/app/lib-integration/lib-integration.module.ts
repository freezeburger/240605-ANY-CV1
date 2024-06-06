import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibImportModule } from './lib-import.module';
import { LibDemoComponent } from './lib-demo.component';



@NgModule({
  declarations: [
    LibDemoComponent
  ],
  exports: [
    LibDemoComponent
  ],
  imports: [
    CommonModule,
    LibImportModule
  ]
})
export class LibIntegrationModule { }
