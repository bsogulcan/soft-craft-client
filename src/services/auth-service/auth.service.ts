import {EventEmitter, Injectable} from '@angular/core';
import {OAuthService, OAuthSuccessEvent} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  claims: any;
  tokenReceived: EventEmitter<boolean> = new EventEmitter<boolean>();
  user: any;

  constructor(private _oauthService: OAuthService) {
    this._oauthService.configure(authConfig);
    this._oauthService.setStorage(localStorage);
    this._oauthService.loadDiscoveryDocumentAndTryLogin();

    this._oauthService.events.subscribe(event => {
      if (event instanceof OAuthSuccessEvent && event.type === 'token_received') {
        this.claims = _oauthService.getIdentityClaims();
        this.tokenReceived.emit(true);
      }
    });
  }

  login() {
    this._oauthService.setupAutomaticSilentRefresh();
    //this._oauthService.initCodeFlow();
    this._oauthService.initLoginFlow();

    /*this._oauthService.loadDiscoveryDocumentAndLogin().then(_ => {
      console.log(_)
      const claims = this._oauthService.getIdentityClaims();
    });*/
  }

  logout(): void {
    this._oauthService.revokeTokenAndLogout();
  }

  refresh(): void {
    this._oauthService.refreshToken();
  }

  getAccessToken() {
    return this._oauthService.getAccessToken();
  }

  getIdentityClaims() {
    this.claims = this._oauthService.getIdentityClaims();
    return this.claims;
  }

  getGrantedScopes() {
    return this._oauthService.getGrantedScopes();
  }
}
