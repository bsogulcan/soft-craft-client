import {EventEmitter, Injectable} from '@angular/core';
import {AuthService} from "../../../services/auth-service/auth.service";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: any;
  userClaimsReceived = new EventEmitter<any>();

  constructor(private _authService: AuthService,
              private _userService: UserService) {
    _authService.tokenReceived.subscribe(() => this.getUser());
  }

  getUser() {
    if (this._authService.getIdentityClaims()) {
      this._userService.getUserById(this._authService.getIdentityClaims().sub).subscribe(response => {
        this.userClaimsReceived.emit(response);
        return response;
      });
    }

    return null;
  }

}
