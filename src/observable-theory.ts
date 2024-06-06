import { WritableSignal, computed, effect, signal } from "@angular/core";
import { BehaviorSubject, fromEvent, map } from "rxjs";

console.log('Observable Theory: ');

/**
 * La programmation réactive est un paradigme de programmation orienté flux de données et propagation des changements.
 * Il faut donc un émetteur de données (Observable) et un récepteur de données (Observer).
 *
 * Les Observable RXJS sont une solution d'implémentation.
 * Les signals angular sont une autre implémentation.
 *
 * Dans Angular Signals et Observables sont compatible.
 */

const click$ = fromEvent(document, 'click');

let count = 0;


click$
  /* pipe d'opération */
  .pipe(
    // Opérateur (160+) de transformation
    map(() => count++),
  )
  .subscribe( event => console.log(event) );


// Signals

