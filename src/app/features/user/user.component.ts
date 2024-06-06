import { Component, Inject, inject } from '@angular/core';
import { USER_CRUD_PROVIDERS } from './user.token';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  public userService = inject(USER_CRUD_PROVIDERS);


  /*
  constructor(
    //public userService: UserService,
    //@Inject(UserService) public userService: UserService
  ) { }
  */

}
