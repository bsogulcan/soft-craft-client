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
import {EnumerateService} from "../../../services/enumerate/enumerate.service";
import {EnumerateFullOutput} from "../../../services/enumerate/dtos/EnumerateFullOutput";

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
  selectedPropertyType: string | undefined = 'String';
  selectedRelationType: string;
  entities: Array<EntityFullOutput>;
  saving: boolean;
  propertyType = PropertyType;
  isNullableOrRequired: string = 'nullable';
  enumerates: Array<EnumerateFullOutput>;
  propertyStateOptions = [
    {
      name: 'Standart',
      value: 0
    },
    {
      name: 'Relational',
      value: 1
    },
    {
      name: 'Enumerate',
      value: 2
    },
  ];
  selectedPropertyState = 0;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private entityService: EntityService,
              private propertyService: PropertyService,
              private enumerateService: EnumerateService) {
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

    enumerateService.getAll(getEntityListInput).subscribe(response => {
      this.enumerates = response.items;
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

  propertyStateChanged(stateValue: number) {
    switch (stateValue) {
      case 0:
        this.property.isRelationalProperty = false;
        this.property.isEnumProperty = false;
        this.property.enumerateId = undefined;
        this.property.relationalEntityId = undefined;
        break;
      case 1:
        this.selectedPropertyType = undefined;
        this.property.type = undefined;
        this.property.isRelationalProperty = true;
        this.property.isEnumProperty = false;
        this.property.enumerateId = undefined;
        break;
      case 2:
        this.selectedPropertyType = undefined;
        this.property.type = undefined;
        this.property.isRelationalProperty = false;
        this.property.isEnumProperty = true;
        this.property.relationalEntityId = undefined;
        break;
    }
  }

  onPropertyNameChanged(value: any) {
    this.property.displayName = value;
  }

  onRelationalPropertyNameChanged(value: any) {
    this.property.displayName = value;
  }

  onRelationalEntityChanged(selectedEntityId: any) {
    // @ts-ignore
    this.property.name = this.entities.find(x => x.id == selectedEntityId)?.name;
    // @ts-ignore
    this.property.displayName = this.entities.find(x => x.id == selectedEntityId)?.name;
    // @ts-ignore
    this.property.relationalName = this.entities.find(x => x.id == this.property.entityId)?.name;
    // @ts-ignore
    this.property.relationalDisplayName = this.entities.find(x => x.id == this.property.entityId)?.name;
  }

  onEnumerateChanged(selectedEnumerateId: any) {
    // @ts-ignore
    this.property.name = this.enumerates.find(x => x.id == selectedEnumerateId)?.name;
    // @ts-ignore
    this.property.displayName = this.enumerates.find(x => x.id == selectedEnumerateId)?.name;
  }
}
