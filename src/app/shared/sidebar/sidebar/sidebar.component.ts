import {Component, OnInit} from '@angular/core';
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
  visibleSideBar: boolean;
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
                label: 'Details',
                icon: 'pi pi-book',
                routerLink: '/project/' + project.id + '/details'
              },
              {
                label: 'Entities',
                icon: 'pi pi-database',
                routerLink: '/project/' + project.id + '/entities'
              },
              {
                label: 'Navigations',
                icon: 'pi pi-fw pi-external-link',
                routerLink: '/project/' + project.id + '/navigations'
              },
              {
                label: 'Enumerates',
                icon: 'pi pi-pencil',
                routerLink: '/project/' + project.id + '/enumerates'
              },
              {
                label: 'Localizations',
                icon: 'pi pi-code',
                routerLink: '/project/' + project.id + '/localizations'
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
      this.visibleSideBar = visible;
    })
  }

}
