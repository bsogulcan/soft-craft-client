import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {DialogService} from "primeng/dynamicdialog";
import {NavigationService} from "../../services/navigation/navigation.service";
import {ActivatedRoute} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {EnumerateService} from "../../services/enumerate/enumerate.service";
import {GetEnumerateListInput} from "../../services/enumerate/dtos/GetEnumerateListInput";
import {EnumerateFullOutput} from "../../services/enumerate/dtos/EnumerateFullOutput";

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

  }

  editEnumerate(id:number) {

  }

  enumerateValues(id:number) {

  }

  deleteEnumerate(id:number) {

  }
}
