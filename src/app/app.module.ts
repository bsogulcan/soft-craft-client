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
import {EntityDetailsComponent} from './components/entity/entity-details/entity-details.component';
import {PropertyComponent} from './components/property/property.component';
import {CreatePropertyComponent} from './components/property/create-property/create-property.component';
import {ScrollPanelModule} from "primeng/scrollpanel";
import {EditPropertyComponent} from './components/property/edit-property/edit-property.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {NavigationComponent} from './components/navigation/navigation.component';
import {TreeTableModule} from "primeng/treetable";
import {CreateNavigationComponent} from './components/navigation/create-navigation/create-navigation.component';
import {MatIconModule} from "@angular/material/icon";
import {UpdateNavigationComponent} from './components/navigation/update-navigation/update-navigation.component';
import {ReOrderNavigationComponent} from './components/navigation/re-order-navigation/re-order-navigation.component';
import {EnumerateComponent} from './components/enumerate/enumerate.component';
import {CreateEnumerateComponent} from './components/enumerate/create-enumerate/create-enumerate.component';
import {IconComponent} from './components/icon/icon.component';
import {EditEnumerateComponent} from './components/enumerate/edit-enumerate/edit-enumerate.component';
import {EnumerateValueComponent} from './components/enumerate-value/enumerate-value.component';
import {
  CreateEnumerateValueComponent
} from './components/enumerate-value/create-enumerate-value/create-enumerate-value.component';
import {
  EditEnumerateValueComponent
} from './components/enumerate-value/edit-enumerate-value/edit-enumerate-value.component';
import {SelectButtonModule} from "primeng/selectbutton";
import {EntityCodeResultComponent} from './components/entity/entity-code-result/entity-code-result.component';
import {EditorModule} from "primeng/editor";
import {NumberedCodeblockModule} from '@ctrl/ngx-numbered-codeblock';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-csharp';
import {FieldsetModule} from "primeng/fieldset";
import {AccordionModule} from "primeng/accordion";
import {TabViewModule} from "primeng/tabview";
import {MatButtonModule} from "@angular/material/button";

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
    EditPropertyComponent,
    NavigationComponent,
    CreateNavigationComponent,
    UpdateNavigationComponent,
    ReOrderNavigationComponent,
    EnumerateComponent,
    CreateEnumerateComponent,
    IconComponent,
    EditEnumerateComponent,
    EnumerateValueComponent,
    CreateEnumerateValueComponent,
    EditEnumerateValueComponent,
    EntityCodeResultComponent,
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
        ScrollPanelModule,
        RadioButtonModule,
        TreeTableModule,
        MatIconModule,
        SelectButtonModule,
        EditorModule,
        NumberedCodeblockModule,
        FieldsetModule,
        AccordionModule,
        TabViewModule,
        MatButtonModule
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
