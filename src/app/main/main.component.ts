import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth-service/auth.service";
import {appModuleAnimation} from "../shared/animations/routerTransition";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [appModuleAnimation()],
})
export class MainComponent implements OnInit {

  constructor(private _authService: AuthService) {
  }

  ngOnInit(): void {
    console.log(this._authService.getAccessToken());
  }

}
