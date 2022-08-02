import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule), // Lazy load account module
    data: {preload: true}
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then(m => m.AppModule), // Lazy load account module
    data: {preload: true}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule],
  providers: []
})
export class RootRoutingModule {
}
