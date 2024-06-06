import { Injectable } from '@angular/core';
import { BaseCrudService } from '../../core/abstracts/crud-service.abstract';
import { User } from './user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseCrudService<User, 'https://jsonplaceholder.typicode.com/users'>{

  override endpoint:any = 'https://jsonplaceholder.typicode.com/users';

  constructor() {
    super()
    setTimeout(() => { this.read() }, 5000)
  }

}
