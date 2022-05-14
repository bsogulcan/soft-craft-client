import {Component, OnInit} from '@angular/core';
import {ProjectDto} from "../../services/projects/dtos/ProjectDto";
import {ProjectService} from "../../services/projects/project.service";
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {CreateProjectComponent} from "./create-project/create-project.component";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [appModuleAnimation()],
})
export class ProjectComponent implements OnInit {
  projects: Array<ProjectDto>;
  createProjectDialogRef: DynamicDialogRef;

  constructor(private _projectService: ProjectService,
              public dialogService: DialogService,
              public messageService: MessageService) {
  }

  ngOnInit(): void {
    this._projectService.get().subscribe((result: any) => {
      if (result) {
        this.projects = result.items;
      }
    })
  }

  openCreateProjectDialog() {
    this.createProjectDialogRef = this.dialogService.open(CreateProjectComponent, {
      header: 'Create New Project',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });

    this.createProjectDialogRef.onClose.subscribe((project: ProjectDto) => {
      if (project) {
        this.messageService.add({severity: 'info', summary: 'Product Selected', detail: project.name});
      }
    });
  }
}
