import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _oauthService: OAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._oauthService.getAccessToken()}`
      }
    });
    return next.handle(request);
  }
}
