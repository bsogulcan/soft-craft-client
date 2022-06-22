import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {DialogService} from "primeng/dynamicdialog";
import {NavigationService} from "../../services/navigation/navigation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {EnumerateService} from "../../services/enumerate/enumerate.service";
import {GetEnumerateListInput} from "../../services/enumerate/dtos/GetEnumerateListInput";
import {EnumerateFullOutput} from "../../services/enumerate/dtos/EnumerateFullOutput";
import {CreatePropertyComponent} from "../property/create-property/create-property.component";
import {CreateEnumerateComponent} from "./create-enumerate/create-enumerate.component";
import {EditEnumerateComponent} from "./edit-enumerate/edit-enumerate.component";

@Component({
  selector: 'app-enumerate',
  templateUrl: './enumerate.component.html',
  styleUrls: ['./enumerate.component.css'],
  animations: [appModuleAnimation()],
  providers: [DialogService]
})
export class EnumerateComponent implements OnInit {
  projectId: number;
  enumerates: Array<EnumerateFullOutput>;

  constructor(private navigationService: NavigationService,
              private route: ActivatedRoute,
              private router: Router,
              public dialogService: DialogService,
              private confirmationService: ConfirmationService,
              private enumerateService: EnumerateService) {
    route.params.subscribe(param => {
      if (param["projectId"]) {
        this.projectId = parseInt(param["projectId"]);
        this.getEnumerates();
      }
    })
  }

  ngOnInit(): void {
  }

  getEnumerates() {
    const getEnumerateListInput = new GetEnumerateListInput();
    getEnumerateListInput.projectId = this.projectId;
    this.enumerateService.getAll(getEnumerateListInput).subscribe(response => {
      if (response) {
        this.enumerates = response.items;
      }
    });
  }

  newEnumerate() {
    const ref = this.dialogService.open(CreateEnumerateComponent, {
      data: {
        projectId: this.projectId,
      },
      header: 'New Enumerate',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getEnumerates();
      }
    })
  }

  editEnumerate(id: number) {
    const ref = this.dialogService.open(EditEnumerateComponent, {
      data: {
        enumerateId: id,
      },
      header: 'Edit Enumerate',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getEnumerates();
      }
    })
  }

  enumerateValues(id: number) {
    this.router.navigate(['project', this.projectId, 'enumerate', id, 'values']);
  }

  deleteEnumerate(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.enumerateService.delete(id).subscribe(response => {
          this.getEnumerates();
        })
      },
      key: "positionDialog"
    });
  }
}
