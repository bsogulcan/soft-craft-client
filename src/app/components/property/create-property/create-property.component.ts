import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {PropertyService} from "../../../services/property/property.service";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {CreatePropertyInput} from "../../../services/property/dtos/CreatePropertyInput";
import {PrimaryKeyType} from "../../../services/enums/PrimaryKeyType";
import {PropertyType} from "../../../services/enums/PropertyType";

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

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private propertyService: PropertyService) {
    this.propertyTypes = Object.keys(PropertyType).filter((item) => {
      return isNaN(Number(item));
    });
  }

  ngOnInit(): void {

  }

}
