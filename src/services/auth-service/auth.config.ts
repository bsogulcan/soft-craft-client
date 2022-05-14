import {AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://localhost:44366',
  redirectUri: 'http://localhost:4200',
  clientId: 'SoftCraft_App',
  responseType: 'code',
  scope: 'offline_access SoftCraft',
  dummyClientSecret: '1q2w3e*',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
};
