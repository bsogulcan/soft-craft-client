import {Component, OnInit} from '@angular/core';
import {ProjectDto} from "../../services/projects/dtos/ProjectDto";
import {ProjectService} from "../../services/projects/project.service";
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {CreateProjectComponent} from "./create-project/create-project.component";
import {MenuItem, MessageService} from "primeng/api";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [appModuleAnimation()],
})
export class ProjectComponent implements OnInit {
  projects: Array<ProjectDto>;
  createProjectDialogRef: DynamicDialogRef;
  projectContextMenu: MenuItem[];
  selectedProject: ProjectDto;

  constructor(private _projectService: ProjectService,
              public dialogService: DialogService,
              public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getProjects();

    this.projectContextMenu = [{
      label: 'File',
      items: [
        {
          label: 'New', icon: 'pi pi-plus', command: (event) => {
            //event.originalEvent: Browser event
            //event.item: menuitem metadata
            console.log(event);
            console.log(this.selectedProject)
          }
        }
      ]
    }];
  }

  getProjects() {
    this._projectService.getAll().subscribe((result: any) => {
      if (result) {
        this.projects = result.items;
      }
    });
  }

  openCreateProjectDialog() {
    this.createProjectDialogRef = this.dialogService.open(CreateProjectComponent, {
      header: 'Create New Project',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000,
      data: {
        name: 'ogo'
      }
    });

    this.createProjectDialogRef.onClose.subscribe((project: ProjectDto) => {
      if (project) {
        this.getProjects();
        this.messageService.add({severity: 'success', summary: 'Project Created', detail: project.name});
      }
    });
  }

  onSelectionChanged() {
    console.log(this.selectedProject);
  }
}
