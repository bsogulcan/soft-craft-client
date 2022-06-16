import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {EnumerateService} from "../../../services/enumerate/enumerate.service";
import {EnumerateFullOutput} from "../../../services/enumerate/dtos/EnumerateFullOutput";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";

@Component({
  selector: 'app-edit-enumerate',
  templateUrl: './edit-enumerate.component.html',
  styleUrls: ['./edit-enumerate.component.css'],
  animations: [appModuleAnimation()],
})
export class EditEnumerateComponent implements OnInit {
  enumerate: EnumerateFullOutput;

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private enumerateService: EnumerateService) {
    enumerateService.get(config.data.enumerateId).subscribe(response => {
      if (response) {
        this.enumerate = response;
      }
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.enumerateService.update(this.enumerate.id, this.enumerate).subscribe(response => {
      if (response) {
        this.ref.close(response);
      }
    });
  }
}
