import { ChangeDetectionStrategy, Component, Inject, Injector, Optional, SkipSelf, inject } from '@angular/core';
import { USER_CRUD_PROVIDERS } from '../features/user/user.token';
import { DummyService } from './dummy.service';


/*
SOLID Principles
S - Single Responsibility Principle
O - Open/Closed Principle
L - Liskov Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle
*/
@Component({
  selector: 'app-consumer',
  template: `
    <p>
      consumer works!
    </p>
  `,
  styles: ``,
  providers: [DummyService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumerTheory {

  dms = inject(DummyService)
  mydms = inject(DummyService, {self:true})

  constructor( injector:Injector) {
    console.log(this.dms)
    // console.log(injector.get(DummyService))
  }
}
