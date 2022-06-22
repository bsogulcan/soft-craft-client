import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {EnumerateService} from "../../../services/enumerate/enumerate.service";
import {EnumerateValueService} from "../../../services/enumerate-value/enumerate-value.service";
import {EnumerateValueFullOutput} from "../../../services/enumerate-value/dtos/EnumerateValueFullOutput";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";

@Component({
  selector: 'app-edit-enumerate-value',
  templateUrl: './edit-enumerate-value.component.html',
  styleUrls: ['./edit-enumerate-value.component.css'],
  animations: [appModuleAnimation()],
})
export class EditEnumerateValueComponent implements OnInit {
  enumerateValue: EnumerateValueFullOutput;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private enumerateValueService: EnumerateValueService) {
    enumerateValueService.get(config.data.enumerateValueId).subscribe(response => {
      if (response) {
        this.enumerateValue = response;
      }
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.enumerateValueService.update(this.enumerateValue.id, this.enumerateValue).subscribe(response => {
      if (response) {
        this.ref.close(response);
      }
    });
  }
}
