import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../app/home/home.component";
import {AboutComponent} from "./about.component";
import {DocumentComponent} from "./document/document.component";

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'documents', component: DocumentComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
