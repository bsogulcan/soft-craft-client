import {Component, EventEmitter, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth-service/auth.service";
import {SessionService} from "../../services/session/session.service";
import {MenuItem} from "primeng/api";
import {ToggleSideBarService} from "../sidebar/toggle-side-bar.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: any;
  items: MenuItem[];
  sideBarVisible: boolean;

  constructor(private _authService: AuthService,
              private _sessionService: SessionService,
              private _toggleSideBarService: ToggleSideBarService) {
    this.user = this._sessionService.getUser();
  }

  ngOnInit(): void {
    this._sessionService.userClaimsReceived.subscribe(user => {
      this.user = user;
      this.items = [{
        label: this.user.name + ' ' + this.user.surname,
        items: [{
          label: 'Edit Profile',
          icon: 'pi pi-user-edit',
          command: () => {
          }
        },
          {
            label: 'Logout',
            icon: 'pi pi-times',
            command: () => {
              this.logOut();
            }
          }
        ]
      }
      ];
    })

  }

  login() {
    this._authService.login();
  }

  logOut() {
    this._authService.logout();
  }

  toggleSideBar() {
    this._toggleSideBarService.sideBarToggle.emit(!this.sideBarVisible);
  }
}
