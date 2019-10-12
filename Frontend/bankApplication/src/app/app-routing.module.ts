import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'home', component: MainDashboardComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
