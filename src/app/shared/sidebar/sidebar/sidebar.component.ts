import {Component, OnInit} from '@angular/core';
import {ToggleSideBarService} from "../toggle-side-bar.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  visibleSideBar: boolean;
  items: MenuItem[];

  constructor(private _toggleSideBarService: ToggleSideBarService) {
    this.items = [
      {
        label: 'Home Page',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/projects'
      },
      /* {
         label: 'Tenants',
         icon: 'pi pi-home',
         routerLink: '/main'
       },
       {
         label: 'Users',
         icon: 'pi pi-user',
         routerLink: '/main'
       },
       {
         label: 'Roles',
         icon: 'pi pi-home',
         routerLink: '/main'
       },
       {
         label: 'New',
         icon: 'pi pi-fw pi-plus',
         items: [
           {label: 'User', icon: 'pi pi-fw pi-user-plus', routerLink: '/'},
           {label: 'Filter', icon: 'pi pi-fw pi-filter', routerLink: '/home'}
         ]
       }*/
    ];
  }

  ngOnInit(): void {
    this._toggleSideBarService.sideBarToggle.subscribe(visible => {
      this.visibleSideBar = visible;
    })
  }

}
