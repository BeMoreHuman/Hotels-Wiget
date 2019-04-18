import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

interface Message {
  type: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private message = new Subject<Message>();

  emit(type: string, data: any = null): void {
    this.message.next({type, data});
  }

  on(type: string) {
    return this.message.pipe(
      filter(event => event.type === type),
      map(event => event.data)
    );
  }

}
