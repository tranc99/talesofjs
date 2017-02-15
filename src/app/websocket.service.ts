import { Injectable } from '@angular/core';
import * as Rx from 'rsjx/Rx';

@Injectable()
export class WebsocketService {

  constructor() { }

  private subject: Rx.Subject<MessageEvent>;

}
