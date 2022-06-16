import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main/main.component";
import {ProjectComponent} from "./components/project/project.component";
import {CreateProjectComponent} from "./components/project/create-project/create-project.component";
import {EntityComponent} from "./components/entity/entity.component";
import {ProjectDetailsComponent} from "./components/project/project-details/project-details.component";
import {CreateEntityComponent} from "./components/entity/create-entity/create-entity.component";
import {EntityDetailsComponent} from "./components/entity/entity-details/entity-details.component";
import {PropertyComponent} from "./components/property/property.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {EnumerateComponent} from "./components/enumerate/enumerate.component";
import {EnumerateValueComponent} from "./components/enumerate-value/enumerate-value.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  //redirectTo: '/home', pathMatch: 'full'
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'new-project', component: CreateProjectComponent},
  {path: 'project/:projectId/entities', component: EntityComponent},
  {path: 'project/:projectId/details', component: ProjectDetailsComponent},
  {path: 'project/:projectId/create-entity', component: CreateEntityComponent},
  {path: 'project/:projectId/entity/:entityId/details', component: EntityDetailsComponent},
  {path: 'project/:projectId/entity/:entityId/properties', component: PropertyComponent},
  {path: 'project/:projectId/navigations', component: NavigationComponent},
  {path: 'project/:projectId/enumerates', component: EnumerateComponent},
  {path: 'project/:projectId/enumerate/:enumerateId/values', component: EnumerateValueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
