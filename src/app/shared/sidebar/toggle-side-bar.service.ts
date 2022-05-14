import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSideBarService {
  sideBarToggle = new EventEmitter<boolean>();

  constructor() { }
}
