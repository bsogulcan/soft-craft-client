import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {NavigationFullOutput} from "../../../services/navigation/dtos/NavigationFullOutput";
import {GetNavigationListInput} from "../../../services/navigation/dtos/GetNavigationListInput";
import {NavigationService} from "../../../services/navigation/navigation.service";
import {appModuleAnimation} from "../../../shared/animations/routerTransition";

@Component({
  selector: 'app-re-order-navigation',
  templateUrl: './re-order-navigation.component.html',
  styleUrls: ['./re-order-navigation.component.css'],
  animations: [appModuleAnimation()],
})
export class ReOrderNavigationComponent implements OnInit {
  navigations: Array<NavigationFullOutput>;
  parentNavigationId: number;
  projectId: number;
  cols: any[];

  constructor(private ref: DynamicDialogRef,
              private config: DynamicDialogConfig,
              private navigationService: NavigationService) {
    this.parentNavigationId = config.data.parentNavigationId;
    this.projectId = config.data.projectId;

    this.cols = [
      {field: 'caption', header: 'Caption'}
    ];

    const getNavigationListInput = new GetNavigationListInput();
    getNavigationListInput.projectId = this.projectId;
    this.navigationService.getAll(getNavigationListInput).subscribe(response => {
      this.navigations = response.items.filter(x => x.parentNavigationId == this.parentNavigationId).sort((a, b) => {
        return a.index - b.index
      });
    });
  }

  ngOnInit(): void {
  }

  reOrderedColumn(e: any) {
    console.log(e);
    console.log(this.navigations);
  }

  save() {
    this.navigationService.reOrder(this.navigations).subscribe(response => {
      this.ref.close(true);
    })
  }
}
