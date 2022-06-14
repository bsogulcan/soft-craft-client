import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {ConfirmationService, TreeNode} from "primeng/api";
import {NavigationService} from "../../services/navigation/navigation.service";
import {GetNavigationListInput} from "../../services/navigation/dtos/GetNavigationListInput";
import {ActivatedRoute} from "@angular/router";
import {NavigationFullOutput} from "../../services/navigation/dtos/NavigationFullOutput";
import {CreatePropertyComponent} from "../property/create-property/create-property.component";
import {DialogService} from "primeng/dynamicdialog";
import {CreateNavigationComponent} from "./create-navigation/create-navigation.component";
import {UpdateNavigationComponent} from "./update-navigation/update-navigation.component";
import {ReOrderNavigationComponent} from "./re-order-navigation/re-order-navigation.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [appModuleAnimation()],
  providers: [DialogService]
})
export class NavigationComponent implements OnInit {
  navigations: TreeNode[];
  projectId: number;

  constructor(private navigationService: NavigationService,
              private route: ActivatedRoute,
              public dialogService: DialogService,
              private confirmationService: ConfirmationService) {
    route.params.subscribe(param => {
      if (param["projectId"]) {
        this.projectId = parseInt(param["projectId"]);
        this.getNavigations();
      }
    })
  }

  ngOnInit(): void {
  }

  getNavigations() {
    const getNavigationListInput = new GetNavigationListInput();
    getNavigationListInput.projectId = this.projectId;
    this.navigationService.getAll(getNavigationListInput).subscribe(response => {
      console.log(response);
      const treeNodes = new Array<TreeNode>();
      if (response) {
        response.items.sort((a, b) => {
          return a.index - b.index
        }).filter(x => !x.parentNavigationId).forEach(navigationItem => {
          let treeNode: TreeNode;
          treeNode = {
            data: navigationItem,
            expanded: true
          };

          treeNode.children = [];
          navigationItem.navigations.sort((a, b) => {
            return a.index - b.index
          }).forEach(childNavigations => {
            treeNode.children!.push(this.getChildren(childNavigations));
          })

          treeNodes.push(treeNode);
        });
        console.log(treeNodes);

        this.navigations = treeNodes;
        console.log(this.navigations)
      }
    })
  }

  newNavigation(navigationId?: number) {
    const ref = this.dialogService.open(CreateNavigationComponent, {
      data: {
        projectId: this.projectId,
        parentNavigationId: navigationId
      },
      header: 'New Navigation',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getNavigations();
      }
    })
  }

  getChildren(navigation: NavigationFullOutput) {
    let treeNode: TreeNode;
    treeNode = {
      data: navigation,
      expanded: true
    }

    treeNode.children = [];
    if (navigation.navigations) {
      navigation.navigations.sort((a, b) => {
        return a.index - b.index
      }).forEach(navigationItem => {
        treeNode.children!.push(this.getChildren(navigationItem));
      });
    }

    return treeNode;
  }

  deleteProperty(propertyId: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.navigationService.delete(propertyId).subscribe(response => {
          this.getNavigations()
        })
      },
      key: "positionDialog"
    });
  }

  updateNavigation(id: number) {
    const ref = this.dialogService.open(UpdateNavigationComponent, {
      data: {
        projectId: this.projectId,
        navigationId: id
      },
      header: 'Edit Navigation',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getNavigations();
      }
    })
  }

  reOrderNavigations(parentNavigationId: number) {
    const ref = this.dialogService.open(ReOrderNavigationComponent, {
      data: {
        projectId: this.projectId,
        parentNavigationId: parentNavigationId,
      },
      header: 'Order Navigation',
      width: '40%'
    });

    ref.onClose.subscribe(response => {
      if (response) {
        this.getNavigations();
      }
    })
  }

}
