import { BehaviorSubject, Observable } from "rxjs";

/**
 * Reactive Service Pattern
 *
 * All reactive services should implement this interface.
 * A Reactive Service is a service with a public data$ access.
 * data$ is observable and emits the latest value of the service.
 */
export interface YReactiveService<DataType> {

  /**
   * Observable of the latest value of the service.
   */
  data$: Pick<BehaviorSubject<DataType[]>, 'subscribe'>;
}


