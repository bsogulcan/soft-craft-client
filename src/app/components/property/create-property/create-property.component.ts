import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {PropertyService} from "../../../services/property/property.service";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {CreatePropertyInput} from "../../../services/property/dtos/CreatePropertyInput";
import {PropertyType} from "../../../services/enums/PropertyType";
import {EntityFullOutput} from "../../../services/entity/dtos/EntityFullOutput";
import {EntityService} from "../../../services/entity/entity.service";
import {GetEntityListInput} from "../../../services/entity/dtos/GetEntityListInput";
import {RelationType} from "../../../services/enums/RelationType";

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css'],
  animations: [appModuleAnimation()],
})
export class CreatePropertyComponent implements OnInit {
  property: CreatePropertyInput = new CreatePropertyInput();
  propertyTypes: string[];
  relationTypes: string[];
  selectedPropertyType: string = 'String';
  selectedRelationType: string;
  entities: Array<EntityFullOutput>;
  saving: boolean;
  propertyType = PropertyType;
  isNullableOrRequired: string = 'nullable';

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private entityService: EntityService,
              private propertyService: PropertyService) {
    this.property.entityId = config.data.entityId;
    this.propertyTypes = Object.keys(PropertyType).filter((item) => {
      return isNaN(Number(item));
    });

    this.relationTypes = Object.keys(RelationType).filter((item) => {
      return isNaN(Number(item));
    });

    this.property.type = PropertyType.String;

    const getEntityListInput = new GetEntityListInput();
    getEntityListInput.projectId = parseInt(config.data.projectId);
    entityService.getAll(getEntityListInput).subscribe(response => {
      this.entities = response.items;
    });
  }

  ngOnInit(): void {

  }

  save() {
    this.property.isNullable = this.isNullableOrRequired == 'nullable';
    this.property.required = this.isNullableOrRequired == 'required';

    // @ts-ignore
    this.property.type = PropertyType[this.selectedPropertyType];
    this.propertyService.create(this.property).subscribe(response => {
      if (response) {
        this.ref.close(response);
      }
    })
  }

  onPropertyTypeChanged(e: any) {
    if (e.value && e.value != '') {
      // @ts-ignore
      this.property.type = PropertyType[e.value];
    } else {
      // @ts-ignore
      this.property.type = undefined;
    }
  }

  onIsRelationalPropertyChanged(e: any) {
    if (e.checked) {
      // @ts-ignore
      this.property.type = undefined;
      this.selectedPropertyType = '';
    } else {
      // @ts-ignore
      this.property.relationalEntityId = undefined;
    }
  }

  onSelectedRelationTypeChange(e: any) {
    if (e.value && e.value != '') {
      // @ts-ignore
      this.property.relationType = RelationType[e.value];
    } else {
      // @ts-ignore
      this.property.relationType = undefined;
    }
  }
}
