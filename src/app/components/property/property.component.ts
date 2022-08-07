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
import {PropertyType} from "../../services/enums/PropertyType";
import {TenantType} from "../../services/enums/TenantType";
import {ConfirmationService} from "primeng/api";
import {UpdateEntityInput} from "../../services/entity/dtos/UpdateEntityInput";
import {EditPropertyComponent} from "./edit-property/edit-property.component";
import {BreadcrumbService} from "../breadcrumb/breadcrumb.service";

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
              public dialogService: DialogService,
              private confirmationService: ConfirmationService,
              private breadCrumbService: BreadcrumbService) {
    route.params.subscribe(param => {
      if (param["projectId"]) {
        this.projectId = param["projectId"];
      }
      if (param["entityId"]) {
        const entityId = param["entityId"];
        entityService.get(entityId).subscribe(response => {
          if (response) {
            this.entity = response;
            this.getPropertyList();

            this.breadCrumbService.addItem.emit([
              {
                label: 'Project',
                routerLink: '/project/' + this.projectId + '/details'
              },
              {
                label: 'Entities',
                routerLink: '/project/' + this.projectId + '/entities'
              },
              {
                label: 'Code Results',
                routerLink: '/project/' + this.projectId + '/entity/' + entityId + '/code-results'
              }
            ]);
          }
        });
      }
    })
  }

  ngOnInit(): void {
  }

  getPropertyList() {
    const getPropertyListInput = new GetPropertyListInput();
    getPropertyListInput.entityId = this.entity.id;
    this.propertyService.getAll(getPropertyListInput).subscribe(response => {
      if (response) {
        this.properties = response.items;
      }
    })
  }

  getPropertyTypeName(type: PropertyType) {
    return PropertyType[type];
  }

  openNewPropertyDialog() {
    const ref = this.dialogService.open(CreatePropertyComponent, {
      data: {
        projectId: this.projectId,
        entityId: this.entity.id
      },
      header: 'New Property',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getPropertyList();
      }
    })
  }

  deleteProperty(propertyId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.propertyService.delete(propertyId).subscribe(response => {
          this.getPropertyList();
        })
      },
      key: "positionDialog"
    });
  }

  updateProperty(entityId: number) {
    const ref = this.dialogService.open(EditPropertyComponent, {
      data: {
        propertyId: entityId,
        projectId: this.projectId,
        entityId: this.entity.id
      },
      header: 'Edit Property',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getPropertyList();
      }
    });
  }

  getReleationTypeName(id: any) {
    switch (id) {
      case 0 :
        return "One To One";
        break;
      case 1 :
        return "One To Many";
        break;
      case 2 :
        return "Many To Many";
        break;
      case 3 :
        return "One To Zero";
        break;
      default:
        return "-";
        break;
    }
  }
}
