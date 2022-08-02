import {Component, HostListener, OnInit} from '@angular/core';
import {ToggleSideBarService} from "../toggle-side-bar.service";
import {MenuItem} from "primeng/api";
import {ProjectService} from "../../../services/projects/project.service";
import {BasePanelMenuItem} from "primeng/panelmenu";
import {MenuItemContent} from "primeng/menu";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor(private _toggleSideBarService: ToggleSideBarService,
              private _projectService: ProjectService) {

    this.getProjects();
  }

  getProjects() {
    let menuItems: MenuItem[] = [{
      label: 'Create a Project',
      icon: 'pi pi-plus',
      routerLink: '/new-project'
    }];


    this._projectService.getAll().subscribe(response => {
      if (response) {
        response.items.forEach(project => {
          menuItems.push({
            label: project.name,
            items: [
              {
                label: 'Actions',
                icon: 'pi pi-book',
                routerLink: '/app/project/' + project.id + '/details'
              },
              {
                label: 'Entities',
                icon: 'pi pi-database',
                routerLink: '/app/project/' + project.id + '/entities'
              },
              {
                label: 'Navigations',
                icon: 'pi pi-fw pi-external-link',
                routerLink: '/app/project/' + project.id + '/navigations'
              },
              {
                label: 'Enumerates',
                icon: 'pi pi-pencil',
                routerLink: '/app/project/' + project.id + '/enumerates'
              }
            ]
          })
        })
        this.items = menuItems;
      }
    })
  }

  ngOnInit(): void {
    this._toggleSideBarService.sideBarToggle.subscribe(visible => {
      this.getProjects();
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let sidebarMenu = document.getElementById("sidebarMenu");
    let routerOutlet = document.getElementById("routerOutlet");

    if (event.target.innerWidth <= 1000) {
      sidebarMenu!.style.visibility = 'hidden';
      routerOutlet!.style.marginLeft = '10px';
    } else {
      sidebarMenu!.style.visibility = 'visible';
      routerOutlet!.style.marginLeft = '310px';
    }
  }

}
