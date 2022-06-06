import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {EntityFullOutput} from "../../../services/entity/dtos/EntityFullOutput";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {EntityService} from "../../../services/entity/entity.service";
import {PrimaryKeyType} from "../../../services/enums/PrimaryKeyType";
import {TenantType} from "../../../services/enums/TenantType";
import {UpdateEntityInput} from "../../../services/entity/dtos/UpdateEntityInput";
import {ConfirmationService, MenuItem} from "primeng/api";

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css'],
  animations: [appModuleAnimation()]
})
export class EntityDetailsComponent implements OnInit {
  entity: EntityFullOutput;
  entityOptions: MenuItem[];
  primaryKeyTypes: string[];
  tenantTypes: string[];
  selectedPrimaryType: string;
  selectedTenantType: string;
  saving: boolean;

  constructor(private entityService: EntityService,
              private router: Router,
              private route: ActivatedRoute,
              private confirmationService: ConfirmationService) {
    route.params.subscribe(param => {
      const entityId = param["entityId"];
      if (entityId) {
        entityService.get(entityId).subscribe(response => {
          this.entity = response;
          this.selectedPrimaryType = PrimaryKeyType[this.entity.primaryKeyType];
          this.selectedTenantType = TenantType[this.entity.tenantType];

        });
      }
    });

    this.entityOptions = [{
      label: 'Options',
      items: [
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            this.deleteEntity();
          }
        }
      ]
    }
    ];

    this.primaryKeyTypes = Object.keys(PrimaryKeyType).filter((item) => {
      return isNaN(Number(item));
    });

    this.tenantTypes = Object.keys(TenantType).filter((item) => {
      return isNaN(Number(item));
    });
  }

  ngOnInit(): void {
  }

  save() {
    const updateEntityInput = new UpdateEntityInput();
    updateEntityInput.id = this.entity.id;
    updateEntityInput.name = this.entity.name;
    updateEntityInput.displayName = this.entity.displayName;
    updateEntityInput.isFullAudited = this.entity.isFullAudited;
    updateEntityInput.tenantType = this.entity.tenantType;
    updateEntityInput.projectId = this.entity.projectId;
    // @ts-ignore
    updateEntityInput.primaryKeyType = PrimaryKeyType[this.selectedPrimaryType];
    // @ts-ignore
    updateEntityInput.tenantType = TenantType[this.selectedTenantType];

    this.entityService.update(updateEntityInput.id, updateEntityInput).subscribe(response => {
      if (response) {
        this.router.navigate(['project', this.entity.projectId, 'entities']);
      }
    });

  }

  private deleteEntity() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.entityService.delete(this.entity.id).subscribe(response => {
          this.router.navigate(['project', this.entity.projectId, 'entities']);
        })
      },
      key: "positionDialog"
    });
  }
}
