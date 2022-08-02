import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../services/projects/project.service";
import {ProjectDto} from "../../../services/projects/dtos/ProjectDto";
import {ConfirmationService, MenuItem} from "primeng/api";
import {ToggleSideBarService} from "../../../shared/sidebar/toggle-side-bar.service";
import {GenerateProjectInput} from "../../../services/projects/dtos/GenerateProjectInput";
import {DialogService} from "primeng/dynamicdialog";
import {CreateProjectComponent} from "../create-project/create-project.component";
import {ProjectGenerateComponent} from "../project-generate/project-generate.component";
import {Message, MessageService} from 'primeng/api';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  animations: [appModuleAnimation()],
  providers: [MessageService]
})
export class ProjectDetailsComponent implements OnInit {
  project: ProjectDto;
  logTypes: any;
  saving: boolean;
  projectOptions: MenuItem[];
  private blob: Blob;
  position: string;
  displayPosition: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService,
              private toggleSideBarService: ToggleSideBarService,
              private confirmationService: ConfirmationService,
              public dialogService: DialogService,
              private messageService: MessageService) {
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
    let generateModal = this.dialogService.open(ProjectGenerateComponent, {
      closable: false,
    });

    const generateProjectInput = new GenerateProjectInput();
    generateProjectInput.id = this.project.id;
    this.projectService.generate(generateProjectInput).subscribe(response => {
      this.projectService.downloadProjectZip(this.project.id, this.project.uniqueName).subscribe((data) => {
        this.blob = new Blob([data], {type: 'application/zip'});
        var downloadURL = window.URL.createObjectURL(data);
        var link = document.createElement('a');
        link.href = downloadURL;
        link.download = this.project.uniqueName + ".zip";
        link.click();
        generateModal.close();
        this.messageService.add({severity: 'success', summary: 'Downloaded!', detail: this.project.name + ' Project'});
      });
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Cannot Generated!',
        detail: this.project.name + ' Project'
      });
    });
  }
}
