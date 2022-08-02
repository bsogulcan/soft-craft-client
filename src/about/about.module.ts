import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutRoutingModule} from "./about-routing.module";
import {AboutComponent} from './about.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { DocumentComponent } from './document/document.component';


@NgModule({
  declarations: [
    AboutComponent,
    ToolbarComponent,
    DocumentComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ToolbarModule,
    ButtonModule,
    RippleModule
  ],
  bootstrap: [AboutComponent]
})
export class AboutModule {
}
