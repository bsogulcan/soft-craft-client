import {Component, OnInit} from '@angular/core';
import {CreateEnumerateInput} from "../../../services/enumerate/dtos/CreateEnumerateInput";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {PropertyType} from "../../../services/enums/PropertyType";
import {EnumerateService} from "../../../services/enumerate/enumerate.service";

@Component({
  selector: 'app-create-enumerate',
  templateUrl: './create-enumerate.component.html',
  styleUrls: ['./create-enumerate.component.css']
})
export class CreateEnumerateComponent implements OnInit {
  enumerate = new CreateEnumerateInput();
  saving: boolean;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private enumerateService: EnumerateService) {
    this.enumerate.projectId = config.data.projectId;

  }

  ngOnInit(): void {
  }

  save() {
    this.enumerateService.create(this.enumerate).subscribe(response => {
      if (response) {
        this.ref.close(response);
      }
    })
  }

}
