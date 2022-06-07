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
import {ConfirmationService, MessageService} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {PanelModule} from "primeng/panel";
import {RippleModule} from "primeng/ripple";
import {ToggleButtonModule} from "primeng/togglebutton";
import {DropdownModule} from "primeng/dropdown";
import {EntityComponent} from './components/entity/entity.component';
import {ProjectDetailsComponent} from './components/project/project-details/project-details.component';
import {InplaceModule} from "primeng/inplace";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ListboxModule} from "primeng/listbox";
import {CreateEntityComponent} from './components/entity/create-entity/create-entity.component';
import {CheckboxModule} from "primeng/checkbox";
import {MatMenuModule} from '@angular/material/menu';
import { EntityDetailsComponent } from './components/entity/entity-details/entity-details.component';
import { PropertyComponent } from './components/property/property.component';
import { CreatePropertyComponent } from './components/property/create-property/create-property.component';
import {ScrollPanelModule} from "primeng/scrollpanel";
import { EditPropertyComponent } from './components/property/edit-property/edit-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    ToolbarComponent,
    SidebarComponent,
    ProjectComponent,
    CreateProjectComponent,
    EntityComponent,
    ProjectDetailsComponent,
    CreateEntityComponent,
    EntityDetailsComponent,
    PropertyComponent,
    CreatePropertyComponent,
    EditPropertyComponent
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
        DialogModule,
        InputTextModule,
        InputNumberModule,
        InputTextareaModule,
        FormsModule,
        ToastModule,
        PanelModule,
        RippleModule,
        ToggleButtonModule,
        DropdownModule,
        InplaceModule,
        ConfirmDialogModule,
        ListboxModule,
        CheckboxModule,
        MatMenuModule,
        ScrollPanelModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, DialogService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
