import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth-service/auth.service";
import {appModuleAnimation} from "../shared/animations/routerTransition";
import {BreadcrumbService} from "../components/breadcrumb/breadcrumb.service";

@Component({
  selector: 'auth-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [appModuleAnimation()],
})
export class HomeComponent implements OnInit {

  constructor(private _authService: AuthService,
              private breadCrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    console.log(this._authService.getAccessToken());
    this.breadCrumbService.addItem.emit();
  }
}
