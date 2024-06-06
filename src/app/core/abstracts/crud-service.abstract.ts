
import { Inject, inject } from "@angular/core";
import { YCrudServicePattern, YCrudServiceResponse, YEntityWithId } from "../patterns/crud-service.pattern";
import { Url } from "../types/generics.types";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { YReactiveService } from "../patterns/reactive-service.pattern";



export abstract class BaseCrudService<T extends YEntityWithId, E extends Url> implements YCrudServicePattern<T, E>, YReactiveService<T> {

  endpoint!: E;

  protected _data$ = new BehaviorSubject<T[]>([]);
  data$ = this._data$.asObservable();

  protected http = inject(HttpClient); // Injection fonctionnel

 /*
 constructor(
    protected http: HttpClient // Injection par typage simplifié
    @Inject(HttpClient) protected http: HttpClient // Injection par typage complet
  ) { }
 */
  create(data: Omit<T, "id">): Observable<YCrudServiceResponse<T>> {
    const serviceResponse = new Subject<YCrudServiceResponse<T>>();

    this.http.post<T>(this.endpoint, data).subscribe(data => {
      this._data$.next([data, ...this._data$.value]);
      serviceResponse.next({ status: "success", message: "Created", payload: data });
    })

    return serviceResponse.asObservable();
  }

  read(): Observable<YCrudServiceResponse<T[]>>;
  read(target: T["id"] ): Observable<YCrudServiceResponse<T>>;
  read(target?: T["id"] ): Observable<YCrudServiceResponse<T | T[]>> {
    const serviceResponse = new Subject<YCrudServiceResponse<T | T[]>>();

    if (target) {
      this.http.get<T>(`${this.endpoint}/${target}`).subscribe(data => {
        // TODO Filter Data
        this._data$.next([data, ...this._data$.value]);
        serviceResponse.next({ status: "success", message: "Read", payload: data });
      })
    } else {
      this.http.get<T[]>(this.endpoint).subscribe(data => {
        const payload: T[] = data;
        this._data$.next(data);
        serviceResponse.next({ status: "success", message: "Read", payload: data});
      })
    }


    return serviceResponse.asObservable();
  }
  update(target: T, data: Partial<Omit<T, "id">>): Observable<YCrudServiceResponse<T>> {
    const serviceResponse = new Subject<YCrudServiceResponse<T>>();

    this.http.put<T>(`${this.endpoint}/${target.id}`, data).subscribe(data => {
      this._data$.next(this._data$.value.map(entity => entity.id === target.id ? data : entity))
      serviceResponse.next({ status: "success", message: "Updated", payload: data });
    });

    return serviceResponse.asObservable();
  }
  delete(target: T): Observable<YCrudServiceResponse<T>> {
    const serviceResponse = new Subject<YCrudServiceResponse<T>>();

    this.http.delete<T>(`${this.endpoint}/${target.id}`).subscribe(data => {
      this._data$.next(this._data$.value.filter(entity => entity.id !== target.id));
      serviceResponse.next({ status: "success", message: "Deleted", payload: data });
    });


    return serviceResponse.asObservable();
  }

}
