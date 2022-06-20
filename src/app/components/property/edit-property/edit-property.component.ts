import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {EntityService} from "../../../services/entity/entity.service";
import {PropertyService} from "../../../services/property/property.service";
import {PropertyFullOutput} from "../../../services/property/dtos/PropertyFullOutput";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {EntityFullOutput} from "../../../services/entity/dtos/EntityFullOutput";
import {PropertyType} from "../../../services/enums/PropertyType";
import {GetEntityListInput} from "../../../services/entity/dtos/GetEntityListInput";
import {UpdatePropertyInput} from "../../../services/property/dtos/UpdatePropertyInput";
import {RelationType} from "../../../services/enums/RelationType";
import {EnumerateFullOutput} from "../../../services/enumerate/dtos/EnumerateFullOutput";
import {EnumerateService} from "../../../services/enumerate/enumerate.service";

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
  animations: [appModuleAnimation()],
})
export class EditPropertyComponent implements OnInit {
  property: PropertyFullOutput;
  propertyTypes: string[];
  relationTypes: string[];
  selectedPropertyType: string | undefined;
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
  selectedPropertyState: number;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private entityService: EntityService,
              private propertyService: PropertyService,
              private enumerateService: EnumerateService) {

    this.propertyTypes = Object.keys(PropertyType).filter((item) => {
      return isNaN(Number(item));
    });

    this.relationTypes = Object.keys(RelationType).filter((item) => {
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
        this.selectedPropertyType = PropertyType[this.property.type ? 0 : this.property.type!];
        this.selectedRelationType = RelationType[this.property.relationType];

        if (!this.property.isRelationalProperty && !this.property.isEnumProperty) {
          this.selectedPropertyState = 0;
        } else if (this.property.isRelationalProperty) {
          this.selectedPropertyState = 1
        } else {
          this.selectedPropertyState = 3;
        }

        console.log(this.property)
      }
    });

    enumerateService.getAll(getEntityListInput).subscribe(response => {
      this.enumerates = response.items;
    });
  }

  ngOnInit(): void {
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

  save() {
    const updatePropertyInput = new UpdatePropertyInput();
    // @ts-ignore
    this.property.type = PropertyType[this.selectedPropertyType];

    this.propertyService.update(this.property.id, this.property).subscribe(response => {
      if (response) {
        this.close(response);
      }
    })

  }

  close(data?: any) {
    this.ref.close(data);
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
}
