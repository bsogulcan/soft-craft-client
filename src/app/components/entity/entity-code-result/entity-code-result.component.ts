import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {EntityService} from "../../../services/entity/entity.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EntityCodeResultDto} from "../../../services/entity/dtos/EntityCodeResultDto";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {MatMenuTrigger} from "@angular/material/menu";
import {take} from "rxjs";

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
              private readonly viewRef: ViewContainerRef) {
    route.params.subscribe(param => {
      const entityId = param["entityId"];
      if (entityId) {
        entityService.getCodeResult(entityId).subscribe(response => {
          console.log(response);
          this.entityCodeResultDto = response;
        });
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
