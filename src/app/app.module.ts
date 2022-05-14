import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from "primeng/splitbutton";
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {MainComponent} from './main/main.component';
import {ToolbarComponent} from './shared/toolbar/toolbar.component';
import {TokenInterceptor} from "../services/auth-service/token.interceptor";
import {AvatarModule} from "primeng/avatar";
import {MenuModule} from "primeng/menu";
import {SidebarComponent} from './shared/sidebar/sidebar/sidebar.component';
import {SidebarModule} from "primeng/sidebar";
import {ChipModule} from "primeng/chip";
import {PanelMenuModule} from "primeng/panelmenu";
import {ProjectComponent} from './components/project/project.component';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {CreateProjectComponent} from './components/project/create-project/create-project.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    ToolbarComponent,
    SidebarComponent,
    ProjectComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AvatarModule,
    MenuModule,
    SidebarModule,
    ChipModule,
    PanelMenuModule,
    CardModule,
    TableModule,
    DynamicDialogModule,
    DialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, DialogService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
