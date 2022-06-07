import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntityService} from "../../services/entity/entity.service";
import {EntityFullOutput} from "../../services/entity/dtos/EntityFullOutput";
import {PropertyService} from "../../services/property/property.service";
import {GetPropertyListInput} from "../../services/property/dtos/GetPropertyListInput";
import {PropertyFullOutput} from "../../services/property/dtos/PropertyFullOutput";
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {DialogService} from "primeng/dynamicdialog";
import {CreatePropertyComponent} from "./create-property/create-property.component";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  animations: [appModuleAnimation()],
  providers: [DialogService]
})
export class PropertyComponent implements OnInit {
  projectId: number;
  entity: EntityFullOutput;
  properties: Array<PropertyFullOutput>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private entityService: EntityService,
              private propertyService: PropertyService,
              public dialogService: DialogService) {
    route.params.subscribe(param => {
      if (param["projectId"]) {
        this.projectId = param["projectId"];
      }
      if (param["entityId"]) {
        const entityId = param["entityId"];
        entityService.get(entityId).subscribe(response => {
          if (response) {
            this.entity = response;
          }
        });
        const getPropertyListInput = new GetPropertyListInput();
        getPropertyListInput.entityId = entityId;
        propertyService.getAll(getPropertyListInput).subscribe(response => {
          if (response) {
            this.properties = response.items;
          }
        })
      }
    })
  }

  ngOnInit(): void {
  }

  getPropertyTypeName(type: string) {
    return '';
  }

  openNewPropertyDialog() {
    const ref = this.dialogService.open(CreatePropertyComponent, {
      data: {
        entityId: this.entity.id
      },
      header: 'New Property',
      width: '40%'
    });
  }
}
