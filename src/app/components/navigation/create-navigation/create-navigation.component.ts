import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../../shared/animations/routerTransition";
import {CreateNavigationInput} from "../../../services/navigation/dtos/CreateNavigationInput";
import {EntityFullOutput} from "../../../services/entity/dtos/EntityFullOutput";
import {EntityService} from "../../../services/entity/entity.service";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {NavigationService} from "../../../services/navigation/navigation.service";
import {GetEntityListInput} from "../../../services/entity/dtos/GetEntityListInput";
import {IconComponent} from "../../icon/icon.component";

@Component({
  selector: 'app-create-navigation',
  templateUrl: './create-navigation.component.html',
  styleUrls: ['./create-navigation.component.css'],
  animations: [appModuleAnimation()],
  providers: [DialogService]
})
export class CreateNavigationComponent implements OnInit {
  navigation = new CreateNavigationInput();
  entities: Array<EntityFullOutput>;
  projectId: number;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private entityService: EntityService,
              public dialogService: DialogService,
              private navigationService: NavigationService
  ) {
    this.projectId = parseInt(config.data.projectId);

    const getEntityListInput = new GetEntityListInput();
    getEntityListInput.projectId = this.projectId
    entityService.getAll(getEntityListInput).subscribe(response => {
      this.entities = response.items;
    });

    if (config.data.parentNavigationId) {
      this.navigation.parentNavigationId = parseInt(config.data.parentNavigationId);
    }

    this.navigation.projectId = this.projectId;


  }

  ngOnInit(): void {
  }

  save() {
    this.navigationService.create(this.navigation).subscribe(response => {
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
