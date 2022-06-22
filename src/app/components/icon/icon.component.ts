import {Component, OnInit} from '@angular/core';
import {Icons} from "../../services/const/Icons";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  icons = Icons;

  constructor(private ref: DynamicDialogRef) {
  }

  ngOnInit(): void {
  }

  iconSelected(e: any) {
    this.ref.close(e.value);
  }
}
