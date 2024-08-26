import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {
    console.trace('constructor');
  }

  public open() {
    console.trace('open');
  }
}
