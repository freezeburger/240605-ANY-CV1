import { InjectionToken } from "@angular/core";
import { BaseCrudService } from "../../core/abstracts/crud-service.abstract";
import { User } from "./user.entity";


export const USER_CRUD_PROVIDERS = new InjectionToken<BaseCrudService<User, any>>('USER_CRUD_PROVIDERS');
