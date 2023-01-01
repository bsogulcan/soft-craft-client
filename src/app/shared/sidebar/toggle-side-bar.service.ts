import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSideBarService {
  sideBarToggle = new EventEmitter<boolean>();
  refreshSideBar = new EventEmitter();

  constructor() {

    this.sideBarToggle.subscribe(event => {
      let sidebarMenu = document.getElementById("sidebarMenu");
      let routerOutlet = document.getElementById("routerOutlet");

      if (sidebarMenu!.style.visibility == 'hidden') {
        sidebarMenu!.style.visibility = 'visible';
        routerOutlet!.style.marginLeft = '310px';
      } else {
        sidebarMenu!.style.visibility = 'hidden';
        routerOutlet!.style.marginLeft = '10px';
      }

    })
  }
}
