import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {EnumerateValueService} from "../../services/enumerate-value/enumerate-value.service";
import {EnumerateService} from "../../services/enumerate/enumerate.service";
import {EnumerateFullOutput} from "../../services/enumerate/dtos/EnumerateFullOutput";
import {CreateEnumerateComponent} from "../enumerate/create-enumerate/create-enumerate.component";
import {CreateEnumerateValueComponent} from "./create-enumerate-value/create-enumerate-value.component";
import {DialogService} from "primeng/dynamicdialog";
import {EditEnumerateComponent} from "../enumerate/edit-enumerate/edit-enumerate.component";
import {EditEnumerateValueComponent} from "./edit-enumerate-value/edit-enumerate-value.component";

@Component({
  selector: 'app-enumerate-value',
  templateUrl: './enumerate-value.component.html',
  styleUrls: ['./enumerate-value.component.css'],
  animations: [appModuleAnimation()],
  providers: [DialogService]
})
export class EnumerateValueComponent implements OnInit {
  enumerate: EnumerateFullOutput;
  enumerateId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private confirmationService: ConfirmationService,
              private enumerateService: EnumerateService,
              public dialogService: DialogService,
              private enumerateValueService: EnumerateValueService
  ) {
    this.route.params.subscribe(params => {
      this.enumerateId = params['enumerateId'];
      this.getEnumerate();
    });
  }

  ngOnInit(): void {
  }

  getEnumerate() {
    this.enumerateService.get(this.enumerateId).subscribe(response => {
      this.enumerate = response;
      console.log(this.enumerate)
    })
  }

  newEnumerateValue() {
    const ref = this.dialogService.open(CreateEnumerateValueComponent, {
      data: {
        enumerateId: this.enumerate.id,
      },
      header: 'New Enumerate',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getEnumerate();
      }
    });
  }

  editEnumerateValue(id: number) {
    const ref = this.dialogService.open(EditEnumerateValueComponent, {
      data: {
        enumerateValueId: id,
      },
      header: 'Edit Enumerate Value',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getEnumerate();
      }
    })
  }

  deleteEnumerateValue(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.enumerateValueService.delete(id).subscribe(response => {
          this.getEnumerate();
        })
      },
      key: "positionDialog"
    });
  }
}
