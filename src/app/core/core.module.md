#  Core Module

> "CoreModule" encapsule les concepts architecturaux clefs de cette aapplication.

* `generics` - Type Sémantiques de l'application
* `patterns` - Interfaces décrivant les pattern recommandées
* `entities` - Interfaces de réprésenation d'Entités ou de ValueObjects
* `services` - Application Level services (fonctionnels)
* `guards`   - Application Level gaurd services

```ts

userSerive.read()
```


```html


<ng-container *ngIf="userService.data$ | async as users">

  <h1>Nombre d'utilisateurs : {{users.length}}</h1>

  <h2 *ngIf="users.length">Dernier ustilisateur: {{users[0].name}}</h2>

  <ul>
    <li *ngFor="let user of users">
      {{user.name}}
    </li>
  </ul>

</ng-container>
```
