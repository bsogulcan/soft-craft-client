import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {EntityService} from "../../../services/entity/entity.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EntityCodeResultDto} from "../../../services/entity/dtos/EntityCodeResultDto";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {MatMenuTrigger} from "@angular/material/menu";
import {take} from "rxjs";
import {BreadcrumbService} from "../../breadcrumb/breadcrumb.service";

@Component({
  selector: 'app-entity-code-result',
  templateUrl: './entity-code-result.component.html',
  styleUrls: ['./entity-code-result.component.css'],
  animations: [appModuleAnimation()]
})
export class EntityCodeResultComponent implements OnInit {
  entityCodeResultDto: EntityCodeResultDto;

  constructor(private entityService: EntityService,
              private router: Router,
              private route: ActivatedRoute,
              private readonly viewRef: ViewContainerRef,
              private breadCrumbService: BreadcrumbService) {
    route.params.subscribe(param => {
      const projectId = param["projectId"];
      const entityId = param["entityId"];
      if (entityId) {
        entityService.getCodeResult(entityId).subscribe(response => {
          console.log(response);
          this.entityCodeResultDto = response;
        });

        this.breadCrumbService.addItem.emit([
          {
            label: 'Project',
            routerLink: '/project/' + projectId + '/details'
          },
          {
            label: 'Entities',
            routerLink: '/project/' + projectId + '/entities'
          },
          {
            label: 'Properties',
            routerLink: '/project/' + projectId + '/entity/' + entityId + '/properties'
          }
        ]);
      }
    });
  }

  ngOnInit(): void {
  }

  download(fileName: string, codeResult: string) {
    const blob = new Blob([codeResult], {type: 'text/plain'});
    const anchor = document.createElement('a');
    anchor.download = fileName;
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

  openInNewWindow(codeResult: string) {
    const blob = new Blob([codeResult], {type: 'text/plain'});
    var fileURL = URL.createObjectURL(blob);
    window.open(fileURL);
  }
}
