import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavComponent } from './component/main-nav/main-nav.component';
import { MainTableComponent } from './component/main-table/main-table.component';
import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: 'home', component: MainDashboardComponent},
  // { path: 'home', component: MainNavComponent, canActivate: [AuthGuard]},
  // { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
