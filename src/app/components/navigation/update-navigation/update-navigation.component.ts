import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {EntityService} from "../../../services/entity/entity.service";
import {PropertyService} from "../../../services/property/property.service";
import {NavigationService} from "../../../services/navigation/navigation.service";
import {NavigationFullOutput} from "../../../services/navigation/dtos/NavigationFullOutput";
import {GetEntityListInput} from "../../../services/entity/dtos/GetEntityListInput";
import {EntityFullOutput} from "../../../services/entity/dtos/EntityFullOutput";
import {IconComponent} from "../../icon/icon.component";

@Component({
  selector: 'app-update-navigation',
  templateUrl: './update-navigation.component.html',
  styleUrls: ['./update-navigation.component.css'],
  animations: [appModuleAnimation()],
  providers: [DialogService]
})
export class UpdateNavigationComponent implements OnInit {
  navigationId: number;
  navigation: NavigationFullOutput;
  projectId: number;
  entities: Array<EntityFullOutput>;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private entityService: EntityService,
              public dialogService: DialogService,
              private navigationService: NavigationService
  ) {
    this.projectId = parseInt(config.data.projectId);
    this.navigationId = parseInt(config.data.navigationId);

    navigationService.get(this.navigationId).subscribe(response => {
      if (response) {
        this.navigation = response;
      }
    });

    const getEntityListInput = new GetEntityListInput();
    getEntityListInput.projectId = this.projectId
    entityService.getAll(getEntityListInput).subscribe(response => {
      this.entities = response.items;
    });

  }

  ngOnInit(): void {
  }

  save() {
    this.navigationService.update(this.navigation.id, this.navigation).subscribe(response => {
      if (response) {
        this.ref.close(response);
      }
    })
  }

  openIconList() {
    const ref = this.dialogService.open(IconComponent, {
      data: {
        iconName: this.navigation.icon
      },
      header: 'Icons',
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.navigation.icon = response;
      }
    })
  }
}
