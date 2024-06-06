import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { USER_CRUD_PROVIDERS } from './user.token';
import { UserService } from './user.service';



@NgModule({
  exports: [
    UserComponent
  ],
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      // A la question il y a til USER_CRUD_PROVIDERS disponible pour injection ?
      provide:USER_CRUD_PROVIDERS,
      // Répondre par UserService
      useExisting:UserService
    }
  ]
})
export class UserModule { }
