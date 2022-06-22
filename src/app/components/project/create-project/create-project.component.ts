import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {CreateProjectDto} from "../../../services/projects/dtos/CreateProjectDto";
import {ProjectService} from "../../../services/projects/project.service";
import {ToggleSideBarService} from "../../../shared/sidebar/toggle-side-bar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  animations: [appModuleAnimation()],
})
export class CreateProjectComponent implements OnInit {

  project: CreateProjectDto = new CreateProjectDto();
  logTypes: any;
  saving: boolean;

  constructor(private projectService: ProjectService,
              private router: Router,
              private toggleSideBarService: ToggleSideBarService) {
    this.logTypes = [
      {name: 'Log4Net', id: 0},
      {name: 'ElasticSearch', id: 1},
    ];
  }


  ngOnInit(): void {
  }

  save() {
    console.log(this.project)
    this.saving = true;
    this.projectService.create(this.project).subscribe(response => {
      if (response) {
        this.saving = false;
        this.toggleSideBarService.sideBarToggle.emit(true);
        this.router.navigate(['project', response.id, 'entities']);
      }
    }, () => this.saving = false);
  }
}
