import { Component, WritableSignal, computed, effect, inject, signal } from '@angular/core';
import { UserService } from './features/user/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userService = inject(UserService);

  increment$ = new BehaviorSubject<number>(0);
  increment: WritableSignal<number> = signal(0);


  constructor() {
    //this.increment$.pipe(tap(console.log)).subscribe(console.warn);

    const log = computed(() => this.increment());

    effect(() => {
      console.log('Incremented', log());
    });

    // this.increment$.next(1);

/*
    this.increment.set(1);
    this.increment.set(10);
    this.increment.set(100);
    this.increment.set(1000);

    setTimeout(() => {
      this.increment.set(2);
    }, 0);

    */

  }


}
