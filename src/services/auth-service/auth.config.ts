import {AuthConfig} from 'angular-oauth2-oidc';
import {environment} from "../../environments/environment";

export const authConfig: AuthConfig = {
  issuer: environment.apiBaseUrl,
  redirectUri: environment.baseUrl,
  clientId: 'SoftCraft_App',
  responseType: 'code',
  scope: 'offline_access SoftCraft',
  dummyClientSecret: '1q2w3e*',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
};
