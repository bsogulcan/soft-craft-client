import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {CreateEntityInput} from "../../../services/entity/dtos/CreateEntityInput";
import {PrimaryKeyType} from "../../../services/enums/PrimaryKeyType";
import {TenantType} from "../../../services/enums/TenantType";
import {EntityService} from "../../../services/entity/entity.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.css'],
  animations: [appModuleAnimation()],
})
export class CreateEntityComponent implements OnInit {
  entity: CreateEntityInput = new CreateEntityInput();
  primaryKeyTypes: string[];
  selectedPrimaryType: string = "Int";
  saving: boolean;
  tenantTypes: string[];
  selectedTenantType: string = "None";

  constructor(private entityService: EntityService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params.subscribe(param => {
      this.entity.projectId = param["projectId"];
    });

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
    console.log(this.entity)
    this.saving = true;
    // @ts-ignore
    this.entity.primaryKeyType = PrimaryKeyType[this.selectedPrimaryType];
    // @ts-ignore
    this.entity.tenantType = TenantType[this.selectedTenantType];

    this.entityService.create(this.entity).subscribe(response => {
      if (response) {
        this.saving = false;
        this.router.navigate(['app','project', this.entity.projectId, 'entities']);
      }
    }, () => this.saving = false);
  }
}
