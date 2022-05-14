import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main/main.component";
import {ProjectComponent} from "./components/project/project.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  //redirectTo: '/home', pathMatch: 'full'
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path: 'projects', component: ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
