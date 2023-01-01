import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from "./breadcrumb.service";
import {NavigationStart, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  items: any;

  constructor(private breadCrumbService: BreadcrumbService) {

  }

  ngOnInit() {
    this.breadCrumbService.addItem.subscribe(value => {
      this.items = undefined;
      let breadCrumbItems = value;
      this.items = breadCrumbItems;
    });
  }
}
