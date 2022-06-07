import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {PropertyService} from "../../../services/property/property.service";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {CreatePropertyInput} from "../../../services/property/dtos/CreatePropertyInput";
import {PrimaryKeyType} from "../../../services/enums/PrimaryKeyType";
import {PropertyType} from "../../../services/enums/PropertyType";
import {EntityFullOutput} from "../../../services/entity/dtos/EntityFullOutput";
import {EntityService} from "../../../services/entity/entity.service";
import {GetEntityListInput} from "../../../services/entity/dtos/GetEntityListInput";

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css'],
  animations: [appModuleAnimation()],
})
export class CreatePropertyComponent implements OnInit {
  property: CreatePropertyInput = new CreatePropertyInput();
  propertyTypes: string[];
  selectedPropertyType: string = 'String';
  entities: Array<EntityFullOutput>;
  saving: boolean;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private entityService: EntityService,
              private propertyService: PropertyService) {
    this.property.entityId = config.data.entityId;

    this.propertyTypes = Object.keys(PropertyType).filter((item) => {
      return isNaN(Number(item));
    });

    const getEntityListInput = new GetEntityListInput();
    getEntityListInput.projectId = parseInt(config.data.projectId);
    entityService.getAll(getEntityListInput).subscribe(response => {
      this.entities = response.items;
    });
  }

  ngOnInit(): void {

  }

  save() {
    // @ts-ignore
    this.property.type = PropertyType[this.selectedPropertyType];
    this.propertyService.create(this.property).subscribe(response => {
      if (response) {
        this.ref.close(response);
      }
    })
  }
}
