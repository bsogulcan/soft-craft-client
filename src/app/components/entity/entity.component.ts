import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {EntityService} from "../../services/entity/entity.service";
import {EntityFullOutput} from "../../services/entity/dtos/EntityFullOutput";
import {ActivatedRoute, Router} from "@angular/router";
import {GetEntityListInput} from "../../services/entity/dtos/GetEntityListInput";
import {TenantType} from "../../services/enums/TenantType";
import {PrimaryKeyType} from "../../services/enums/PrimaryKeyType";

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css'],
  animations: [appModuleAnimation()]
})
export class EntityComponent implements OnInit {
  entities: any;
  properties: any;
  projectId: number;
  tenantType: TenantType;

  constructor(private entityService: EntityService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe(param => {
      if (param['projectId']) {
        this.projectId = param['projectId'];
        const entities = Array<EntityFullOutput>();
        const getEntityListInput = new GetEntityListInput();
        getEntityListInput.projectId = this.projectId;
        console.log(getEntityListInput);
        entityService.getAll(getEntityListInput).subscribe(response => {
          if (response) {
            entities.push(...response.items);
            this.entities = entities;
          }
        });
      }
    })
  }

  ngOnInit(): void {
  }

  newEntity() {
    this.router.navigate(['project', this.projectId, 'create-entity']);
  }

  getTenantTypeName(tenantType: TenantType) {
    return TenantType[tenantType];
  }

  getPrimaryKeyTypeName(primaryType: PrimaryKeyType) {
    return PrimaryKeyType[primaryType];
  }

  entityDetails(entityId: number) {
    this.router.navigate(['project', this.projectId, 'entity', entityId, 'details']);
  }

  entityProperties(entityId: number) {
    this.router.navigate(['project', this.projectId, 'entity', entityId, 'properties']);

  }
}
