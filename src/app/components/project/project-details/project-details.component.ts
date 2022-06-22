import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../services/projects/project.service";
import {ProjectDto} from "../../../services/projects/dtos/ProjectDto";
import {ConfirmationService, MenuItem} from "primeng/api";
import {ToggleSideBarService} from "../../../shared/sidebar/toggle-side-bar.service";
import {GenerateProjectInput} from "../../../services/projects/dtos/GenerateProjectInput";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  animations: [appModuleAnimation()]
})
export class ProjectDetailsComponent implements OnInit {
  project: ProjectDto;
  logTypes: any;
  saving: boolean;
  projectOptions: MenuItem[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService,
              private toggleSideBarService: ToggleSideBarService,
              private confirmationService: ConfirmationService) {
    this.logTypes = [
      {name: 'Log4Net', id: 0},
      {name: 'ElasticSearch', id: 1},
    ];

    this.projectOptions = [{
      label: 'Options',
      items: [
        {
          label: 'Generate',
          icon: 'pi pi-play',
          command: () => {
            this.generateProject();
          }
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            this.deleteProject();
          }
        }
      ]
    }
    ];

    this.route.params.subscribe(params => {
      const projectId = params['projectId'];
      projectService.get(projectId).subscribe(response => {
        this.project = response;
        console.log(this.project)
      })

    });
  }

  deleteProject() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.projectService.delete(this.project.id).subscribe(response => {
          this.toggleSideBarService.sideBarToggle.emit(true);
          this.router.navigateByUrl('/home');
        })
      },
      key: "positionDialog"
    });

  }

  ngOnInit(): void {
  }

  save() {
    this.projectService.update(this.project.id, this.project).subscribe(response => {
      if (response) {

      }
    })
  }

  private generateProject() {
    const generateProjectInput = new GenerateProjectInput();
    generateProjectInput.id = this.project.id;
    this.projectService.generate(generateProjectInput).subscribe(response => {

    });
  }
}
