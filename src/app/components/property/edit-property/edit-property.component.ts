import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {EntityService} from "../../../services/entity/entity.service";
import {PropertyService} from "../../../services/property/property.service";
import {PropertyFullOutput} from "../../../services/property/dtos/PropertyFullOutput";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {EntityFullOutput} from "../../../services/entity/dtos/EntityFullOutput";
import {PropertyType} from "../../../services/enums/PropertyType";
import {GetEntityListInput} from "../../../services/entity/dtos/GetEntityListInput";

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
  animations: [appModuleAnimation()],
})
export class EditPropertyComponent implements OnInit {
  property: PropertyFullOutput;
  propertyTypes: string[];
  selectedPropertyType: string;
  entities: Array<EntityFullOutput>;
  saving: boolean;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private entityService: EntityService,
              private propertyService: PropertyService) {

    this.propertyTypes = Object.keys(PropertyType).filter((item) => {
      return isNaN(Number(item));
    });

    const getEntityListInput = new GetEntityListInput();
    getEntityListInput.projectId = parseInt(config.data.projectId);
    entityService.getAll(getEntityListInput).subscribe(response => {
      this.entities = response.items;
    });

    propertyService.get(config.data.propertyId).subscribe(response => {
      if (response) {
        this.property = response;
        this.selectedPropertyType = PropertyType[this.property.type];
        console.log(this.property)
      }
    })

  }

  ngOnInit(): void {
  }

  save() {

  }

  close() {
    this.ref.close();
  }
}
