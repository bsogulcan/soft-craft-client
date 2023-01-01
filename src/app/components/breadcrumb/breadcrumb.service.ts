import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  addItem = new EventEmitter();

  constructor() {
  }
}
