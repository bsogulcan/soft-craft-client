import {Component, OnInit} from '@angular/core';
import {EntityService} from "../../../services/entity/entity.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EntityCodeResultDto} from "../../../services/entity/dtos/EntityCodeResultDto";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";

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
              private route: ActivatedRoute,) {
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

}
