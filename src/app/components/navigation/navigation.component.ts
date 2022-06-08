import {Component, OnInit} from '@angular/core';
import {appModuleAnimation} from "../../shared/animations/routerTransition";
import {TreeNode} from "primeng/api";
import {NavigationService} from "../../services/navigation/navigation.service";
import {GetNavigationListInput} from "../../services/navigation/dtos/GetNavigationListInput";
import {ActivatedRoute} from "@angular/router";
import {NavigationFullOutput} from "../../services/navigation/dtos/NavigationFullOutput";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [appModuleAnimation()]
})
export class NavigationComponent implements OnInit {
  navigations: TreeNode[];

  constructor(private navigationService: NavigationService,
              private route: ActivatedRoute) {
    route.params.subscribe(param => {
      if (param["projectId"]) {
        const getNavigationListInput = new GetNavigationListInput();
        getNavigationListInput.projectId = param["projectId"];
        navigationService.getAll(getNavigationListInput).subscribe(response => {
          console.log(response);
          const treeNodes = new Array<TreeNode>();
          if (response) {
            response.items.filter(x => !x.parentNavigationId).forEach(navigationItem => {
              let treeNode: TreeNode;
              treeNode = {
                data: navigationItem
              };

              treeNode.children = [];
              navigationItem.navigations.forEach(childNavigations => {
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
    })
  }

  ngOnInit(): void {
  }

  newNavigation() {

  }

  getChildren(navigation: NavigationFullOutput) {
    let treeNode: TreeNode;
    treeNode = {
      data: navigation,
    }

    treeNode.children = [];
    if (navigation.navigations) {
      navigation.navigations.forEach(navigationItem => {
        treeNode.children!.push(this.getChildren(navigationItem));
      });
    }

    return treeNode;
  }

}
