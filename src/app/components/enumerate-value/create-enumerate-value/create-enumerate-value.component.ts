import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {EnumerateService} from "../../../services/enumerate/enumerate.service";
import {EnumerateValueService} from "../../../services/enumerate-value/enumerate-value.service";
import {CreateEnumerateInput} from "../../../services/enumerate/dtos/CreateEnumerateInput";
import {CreateEnumerateValueInput} from "../../../services/enumerate-value/dtos/CreateEnumerateValueInput";

@Component({
  selector: 'app-create-enumerate-value',
  templateUrl: './create-enumerate-value.component.html',
  styleUrls: ['./create-enumerate-value.component.css']
})
export class CreateEnumerateValueComponent implements OnInit {
  enumerateValue = new CreateEnumerateValueInput();
  saving: boolean;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private enumerateValueService: EnumerateValueService) {
    this.enumerateValue.enumerateId = config.data.enumerateId;
  }

  ngOnInit(): void {
  }

  save() {
    this.enumerateValueService.create(this.enumerateValue).subscribe(response => {
      if (response) {
        this.ref.close(response);
      }
    })
  }

}
