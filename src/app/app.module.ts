import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './features/user/user.module';
import { CoreModule } from './core/core.module';
import { DecoratorsModule } from './decorators/decorators.module';
import { LibIntegrationModule } from './lib-integration/lib-integration.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    DecoratorsModule,
    LibIntegrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
