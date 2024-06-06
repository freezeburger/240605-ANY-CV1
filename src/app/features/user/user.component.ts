import { Component, Inject, inject } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  public userService = inject(UserService);

  /*
  constructor(
    //public userService: UserService,
    //@Inject(UserService) public userService: UserService
  ) { }
  */

}
