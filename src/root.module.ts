import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RootRoutingModule} from './root-routing.module';
import {RootComponent} from './root.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {CommonModule} from "@angular/common";
import {TokenInterceptor} from "./services/auth-service/token.interceptor";
import {DialogService} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";

export function getCurrentLanguage(): string {
  return 'en';
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootRoutingModule,
    OAuthModule.forRoot(),
  ],
  declarations: [RootComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, DialogService, MessageService, ConfirmationService],
  bootstrap: [RootComponent],
})
export class RootModule {
}
